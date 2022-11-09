import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MarkPlayedItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class MarkPlayedItemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=datePlayed" })
  datePlayed?: Date;
}


export class MarkPlayedItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class MarkPlayedItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MarkPlayedItemPathParams;

  @Metadata()
  queryParams: MarkPlayedItemQueryParams;

  @Metadata()
  security: MarkPlayedItemSecurity;
}


export class MarkPlayedItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userItemDataDto?: shared.UserItemDataDto;
}
