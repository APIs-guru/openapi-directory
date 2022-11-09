import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRequestIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetRequestIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=withfullhistory" })
  withfullhistory?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=withhistory" })
  withhistory?: string;
}


export class GetRequestIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetRequestIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRequestIdPathParams;

  @Metadata()
  queryParams: GetRequestIdQueryParams;

  @Metadata()
  security: GetRequestIdSecurity;
}


export class GetRequestIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
