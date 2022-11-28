import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMusicArtistRemoteSearchResultsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  artistInfoRemoteSearchQuery?: shared.ArtistInfoRemoteSearchQuery;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  artistInfoRemoteSearchQuery1?: shared.ArtistInfoRemoteSearchQuery;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  artistInfoRemoteSearchQuery2?: shared.ArtistInfoRemoteSearchQuery;
}


export class GetMusicArtistRemoteSearchResultsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetMusicArtistRemoteSearchResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: GetMusicArtistRemoteSearchResultsRequests;

  @SpeakeasyMetadata()
  security: GetMusicArtistRemoteSearchResultsSecurity;
}


export class GetMusicArtistRemoteSearchResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RemoteSearchResult })
  remoteSearchResults?: shared.RemoteSearchResult[];

  @SpeakeasyMetadata()
  statusCode: number;
}
