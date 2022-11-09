import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MarkFavoriteItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class MarkFavoriteItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class MarkFavoriteItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MarkFavoriteItemPathParams;

  @Metadata()
  security: MarkFavoriteItemSecurity;
}


export class MarkFavoriteItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userItemDataDto?: shared.UserItemDataDto;
}
