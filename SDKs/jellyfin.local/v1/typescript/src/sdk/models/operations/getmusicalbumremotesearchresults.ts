import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMusicAlbumRemoteSearchResultsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  albumInfoRemoteSearchQuery?: shared.AlbumInfoRemoteSearchQuery;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  albumInfoRemoteSearchQuery1?: shared.AlbumInfoRemoteSearchQuery;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  albumInfoRemoteSearchQuery2?: shared.AlbumInfoRemoteSearchQuery;
}


export class GetMusicAlbumRemoteSearchResultsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetMusicAlbumRemoteSearchResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: GetMusicAlbumRemoteSearchResultsRequests;

  @SpeakeasyMetadata()
  security: GetMusicAlbumRemoteSearchResultsSecurity;
}


export class GetMusicAlbumRemoteSearchResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RemoteSearchResult })
  remoteSearchResults?: shared.RemoteSearchResult[];

  @SpeakeasyMetadata()
  statusCode: number;
}
