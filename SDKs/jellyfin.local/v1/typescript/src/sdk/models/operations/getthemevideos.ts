import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetThemeVideosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetThemeVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=inheritFromParent" })
  inheritFromParent?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetThemeVideosSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetThemeVideosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetThemeVideosPathParams;

  @Metadata()
  queryParams: GetThemeVideosQueryParams;

  @Metadata()
  security: GetThemeVideosSecurity;
}


export class GetThemeVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  themeMediaResult?: shared.ThemeMediaResult;
}
