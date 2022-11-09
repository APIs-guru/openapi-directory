import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlaySetPlaylistItemRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  setPlaylistItemRequestDto?: shared.SetPlaylistItemRequestDto;

  @Metadata({ data: "request, media_type=application/json" })
  setPlaylistItemRequestDto1?: shared.SetPlaylistItemRequestDto;

  @Metadata({ data: "request, media_type=text/json" })
  setPlaylistItemRequestDto2?: shared.SetPlaylistItemRequestDto;
}


export class SyncPlaySetPlaylistItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlaySetPlaylistItemRequest extends SpeakeasyBase {
  @Metadata()
  request: SyncPlaySetPlaylistItemRequests;

  @Metadata()
  security: SyncPlaySetPlaylistItemSecurity;
}


export class SyncPlaySetPlaylistItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
