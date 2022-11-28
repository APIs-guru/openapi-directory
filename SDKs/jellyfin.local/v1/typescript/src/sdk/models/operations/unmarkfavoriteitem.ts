import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnmarkFavoriteItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UnmarkFavoriteItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UnmarkFavoriteItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnmarkFavoriteItemPathParams;

  @SpeakeasyMetadata()
  security: UnmarkFavoriteItemSecurity;
}


export class UnmarkFavoriteItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userItemDataDto?: shared.UserItemDataDto;
}
