import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostJsappsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostJsappsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostJsappsJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.JsAppEdit;
}


export class PostJsappsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  jsApp?: shared.JsApp;

  @Metadata()
  statusCode: number;
}
