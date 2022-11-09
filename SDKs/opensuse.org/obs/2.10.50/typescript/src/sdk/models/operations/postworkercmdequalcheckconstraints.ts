import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostWorkerCmdEqualCheckconstraintsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=arch" })
  arch: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=package" })
  package: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=project" })
  project: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=repository" })
  repository: string;
}


export class PostWorkerCmdEqualCheckconstraintsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostWorkerCmdEqualCheckconstraintsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostWorkerCmdEqualCheckconstraintsQueryParams;

  @Metadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;

  @Metadata()
  security: PostWorkerCmdEqualCheckconstraintsSecurity;
}


export class PostWorkerCmdEqualCheckconstraintsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
