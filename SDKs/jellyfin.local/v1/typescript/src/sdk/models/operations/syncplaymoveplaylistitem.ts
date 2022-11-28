import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlayMovePlaylistItemRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  movePlaylistItemRequestDto?: shared.MovePlaylistItemRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  movePlaylistItemRequestDto1?: shared.MovePlaylistItemRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  movePlaylistItemRequestDto2?: shared.MovePlaylistItemRequestDto;
}


export class SyncPlayMovePlaylistItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayMovePlaylistItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SyncPlayMovePlaylistItemRequests;

  @SpeakeasyMetadata()
  security: SyncPlayMovePlaylistItemSecurity;
}


export class SyncPlayMovePlaylistItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
