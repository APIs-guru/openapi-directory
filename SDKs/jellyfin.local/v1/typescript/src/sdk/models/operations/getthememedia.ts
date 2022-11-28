import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetThemeMediaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetThemeMediaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inheritFromParent" })
  inheritFromParent?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetThemeMediaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetThemeMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetThemeMediaPathParams;

  @SpeakeasyMetadata()
  queryParams: GetThemeMediaQueryParams;

  @SpeakeasyMetadata()
  security: GetThemeMediaSecurity;
}


export class GetThemeMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allThemeMediaResult?: shared.AllThemeMediaResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
