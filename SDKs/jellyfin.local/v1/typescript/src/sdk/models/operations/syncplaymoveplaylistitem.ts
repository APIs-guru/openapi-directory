import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlayMovePlaylistItemRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  movePlaylistItemRequestDto?: shared.MovePlaylistItemRequestDto;

  @Metadata({ data: "request, media_type=application/json" })
  movePlaylistItemRequestDto1?: shared.MovePlaylistItemRequestDto;

  @Metadata({ data: "request, media_type=text/json" })
  movePlaylistItemRequestDto2?: shared.MovePlaylistItemRequestDto;
}


export class SyncPlayMovePlaylistItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayMovePlaylistItemRequest extends SpeakeasyBase {
  @Metadata()
  request: SyncPlayMovePlaylistItemRequests;

  @Metadata()
  security: SyncPlayMovePlaylistItemSecurity;
}


export class SyncPlayMovePlaylistItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
