import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMusicArtistRemoteSearchResultsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  artistInfoRemoteSearchQuery?: shared.ArtistInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=application/json" })
  artistInfoRemoteSearchQuery1?: shared.ArtistInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=text/json" })
  artistInfoRemoteSearchQuery2?: shared.ArtistInfoRemoteSearchQuery;
}


export class GetMusicArtistRemoteSearchResultsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetMusicArtistRemoteSearchResultsRequest extends SpeakeasyBase {
  @Metadata()
  request: GetMusicArtistRemoteSearchResultsRequests;

  @Metadata()
  security: GetMusicArtistRemoteSearchResultsSecurity;
}


export class GetMusicArtistRemoteSearchResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RemoteSearchResult })
  remoteSearchResults?: shared.RemoteSearchResult[];

  @Metadata()
  statusCode: number;
}
