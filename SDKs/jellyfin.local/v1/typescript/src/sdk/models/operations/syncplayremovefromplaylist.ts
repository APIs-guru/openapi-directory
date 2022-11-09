import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlayRemoveFromPlaylistRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  removeFromPlaylistRequestDto?: shared.RemoveFromPlaylistRequestDto;

  @Metadata({ data: "request, media_type=application/json" })
  removeFromPlaylistRequestDto1?: shared.RemoveFromPlaylistRequestDto;

  @Metadata({ data: "request, media_type=text/json" })
  removeFromPlaylistRequestDto2?: shared.RemoveFromPlaylistRequestDto;
}


export class SyncPlayRemoveFromPlaylistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayRemoveFromPlaylistRequest extends SpeakeasyBase {
  @Metadata()
  request: SyncPlayRemoveFromPlaylistRequests;

  @Metadata()
  security: SyncPlayRemoveFromPlaylistSecurity;
}


export class SyncPlayRemoveFromPlaylistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
