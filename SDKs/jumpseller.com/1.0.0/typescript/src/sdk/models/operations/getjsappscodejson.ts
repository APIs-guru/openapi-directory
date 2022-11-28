import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetJsappsCodeJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=code" })
  code: string;
}


export class GetJsappsCodeJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetJsappsCodeJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJsappsCodeJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetJsappsCodeJsonQueryParams;
}


export class GetJsappsCodeJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  jsApp?: shared.JsApp;

  @SpeakeasyMetadata()
  statusCode: number;
}
