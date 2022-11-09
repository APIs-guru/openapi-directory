import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMusicVideoRemoteSearchResultsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  musicVideoInfoRemoteSearchQuery?: shared.MusicVideoInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=application/json" })
  musicVideoInfoRemoteSearchQuery1?: shared.MusicVideoInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=text/json" })
  musicVideoInfoRemoteSearchQuery2?: shared.MusicVideoInfoRemoteSearchQuery;
}


export class GetMusicVideoRemoteSearchResultsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetMusicVideoRemoteSearchResultsRequest extends SpeakeasyBase {
  @Metadata()
  request: GetMusicVideoRemoteSearchResultsRequests;

  @Metadata()
  security: GetMusicVideoRemoteSearchResultsSecurity;
}


export class GetMusicVideoRemoteSearchResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RemoteSearchResult })
  remoteSearchResults?: shared.RemoteSearchResult[];

  @Metadata()
  statusCode: number;
}
