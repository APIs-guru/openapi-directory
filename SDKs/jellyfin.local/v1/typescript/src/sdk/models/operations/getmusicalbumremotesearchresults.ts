import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMusicAlbumRemoteSearchResultsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  albumInfoRemoteSearchQuery?: shared.AlbumInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=application/json" })
  albumInfoRemoteSearchQuery1?: shared.AlbumInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=text/json" })
  albumInfoRemoteSearchQuery2?: shared.AlbumInfoRemoteSearchQuery;
}


export class GetMusicAlbumRemoteSearchResultsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetMusicAlbumRemoteSearchResultsRequest extends SpeakeasyBase {
  @Metadata()
  request: GetMusicAlbumRemoteSearchResultsRequests;

  @Metadata()
  security: GetMusicAlbumRemoteSearchResultsSecurity;
}


export class GetMusicAlbumRemoteSearchResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RemoteSearchResult })
  remoteSearchResults?: shared.RemoteSearchResult[];

  @Metadata()
  statusCode: number;
}
