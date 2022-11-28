import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlaySetPlaylistItemRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  setPlaylistItemRequestDto?: shared.SetPlaylistItemRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  setPlaylistItemRequestDto1?: shared.SetPlaylistItemRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  setPlaylistItemRequestDto2?: shared.SetPlaylistItemRequestDto;
}


export class SyncPlaySetPlaylistItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlaySetPlaylistItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SyncPlaySetPlaylistItemRequests;

  @SpeakeasyMetadata()
  security: SyncPlaySetPlaylistItemSecurity;
}


export class SyncPlaySetPlaylistItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
