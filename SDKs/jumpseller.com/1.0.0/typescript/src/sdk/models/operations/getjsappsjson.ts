import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetJsappsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetJsappsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetJsappsJsonQueryParams;
}


export class GetJsappsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  app?: shared.App;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
