import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRequestIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetRequestIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withfullhistory" })
  withfullhistory?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withhistory" })
  withhistory?: string;
}


export class GetRequestIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetRequestIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRequestIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRequestIdQueryParams;

  @SpeakeasyMetadata()
  security: GetRequestIdSecurity;
}


export class GetRequestIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
