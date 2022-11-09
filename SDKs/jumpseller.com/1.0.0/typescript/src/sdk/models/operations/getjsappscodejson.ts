import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetJsappsCodeJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=code" })
  code: string;
}


export class GetJsappsCodeJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetJsappsCodeJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetJsappsCodeJsonPathParams;

  @Metadata()
  queryParams: GetJsappsCodeJsonQueryParams;
}


export class GetJsappsCodeJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  jsApp?: shared.JsApp;

  @Metadata()
  statusCode: number;
}
