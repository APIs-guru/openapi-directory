import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MarkPlayedItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class MarkPlayedItemQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=datePlayed" })
  datePlayed?: Date;
}


export class MarkPlayedItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class MarkPlayedItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MarkPlayedItemPathParams;

  @SpeakeasyMetadata()
  queryParams: MarkPlayedItemQueryParams;

  @SpeakeasyMetadata()
  security: MarkPlayedItemSecurity;
}


export class MarkPlayedItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userItemDataDto?: shared.UserItemDataDto;
}
