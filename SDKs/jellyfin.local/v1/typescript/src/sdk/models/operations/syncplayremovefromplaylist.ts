import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlayRemoveFromPlaylistRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  removeFromPlaylistRequestDto?: shared.RemoveFromPlaylistRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  removeFromPlaylistRequestDto1?: shared.RemoveFromPlaylistRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  removeFromPlaylistRequestDto2?: shared.RemoveFromPlaylistRequestDto;
}


export class SyncPlayRemoveFromPlaylistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayRemoveFromPlaylistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SyncPlayRemoveFromPlaylistRequests;

  @SpeakeasyMetadata()
  security: SyncPlayRemoveFromPlaylistSecurity;
}


export class SyncPlayRemoveFromPlaylistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
