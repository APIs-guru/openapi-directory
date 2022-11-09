import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MarkUnplayedItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class MarkUnplayedItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class MarkUnplayedItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MarkUnplayedItemPathParams;

  @Metadata()
  security: MarkUnplayedItemSecurity;
}


export class MarkUnplayedItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userItemDataDto?: shared.UserItemDataDto;
}
