import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetJsappsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetJsappsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetJsappsJsonQueryParams;
}


export class GetJsappsJsonResponse extends SpeakeasyBase {
  @Metadata()
  app?: shared.App;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
