import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MarkUnplayedItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class MarkUnplayedItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class MarkUnplayedItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MarkUnplayedItemPathParams;

  @SpeakeasyMetadata()
  security: MarkUnplayedItemSecurity;
}


export class MarkUnplayedItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userItemDataDto?: shared.UserItemDataDto;
}
