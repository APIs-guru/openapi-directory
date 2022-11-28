import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetThemeVideosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetThemeVideosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inheritFromParent" })
  inheritFromParent?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetThemeVideosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetThemeVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetThemeVideosPathParams;

  @SpeakeasyMetadata()
  queryParams: GetThemeVideosQueryParams;

  @SpeakeasyMetadata()
  security: GetThemeVideosSecurity;
}


export class GetThemeVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  themeMediaResult?: shared.ThemeMediaResult;
}
