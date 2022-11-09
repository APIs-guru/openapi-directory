import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRequestViewEqualCollectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=package" })
  package?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=project" })
  project?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=roles" })
  roles?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=types" })
  types?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=withfullhistory" })
  withfullhistory?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=withhistory" })
  withhistory?: string;
}


export class GetRequestViewEqualCollectionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetRequestViewEqualCollectionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRequestViewEqualCollectionQueryParams;

  @Metadata()
  security: GetRequestViewEqualCollectionSecurity;
}


export class GetRequestViewEqualCollectionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
