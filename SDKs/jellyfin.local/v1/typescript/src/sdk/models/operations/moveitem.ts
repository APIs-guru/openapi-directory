import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MoveItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=newIndex" })
  newIndex: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: string;
}


export class MoveItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class MoveItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MoveItemPathParams;

  @Metadata()
  security: MoveItemSecurity;
}


export class MoveItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
