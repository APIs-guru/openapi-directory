import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetThemeMediaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetThemeMediaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=inheritFromParent" })
  inheritFromParent?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetThemeMediaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetThemeMediaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetThemeMediaPathParams;

  @Metadata()
  queryParams: GetThemeMediaQueryParams;

  @Metadata()
  security: GetThemeMediaSecurity;
}


export class GetThemeMediaResponse extends SpeakeasyBase {
  @Metadata()
  allThemeMediaResult?: shared.AllThemeMediaResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
