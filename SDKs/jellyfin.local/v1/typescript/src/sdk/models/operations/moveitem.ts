import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MoveItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=newIndex" })
  newIndex: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: string;
}


export class MoveItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class MoveItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MoveItemPathParams;

  @SpeakeasyMetadata()
  security: MoveItemSecurity;
}


export class MoveItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
