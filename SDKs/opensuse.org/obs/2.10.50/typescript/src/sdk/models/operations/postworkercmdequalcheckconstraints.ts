import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostWorkerCmdEqualCheckconstraintsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=arch" })
  arch: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=package" })
  package: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=repository" })
  repository: string;
}


export class PostWorkerCmdEqualCheckconstraintsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostWorkerCmdEqualCheckconstraintsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostWorkerCmdEqualCheckconstraintsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;

  @SpeakeasyMetadata()
  security: PostWorkerCmdEqualCheckconstraintsSecurity;
}


export class PostWorkerCmdEqualCheckconstraintsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
