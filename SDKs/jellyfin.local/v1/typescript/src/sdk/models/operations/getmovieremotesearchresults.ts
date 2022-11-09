import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMovieRemoteSearchResultsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  movieInfoRemoteSearchQuery?: shared.MovieInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=application/json" })
  movieInfoRemoteSearchQuery1?: shared.MovieInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=text/json" })
  movieInfoRemoteSearchQuery2?: shared.MovieInfoRemoteSearchQuery;
}


export class GetMovieRemoteSearchResultsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetMovieRemoteSearchResultsRequest extends SpeakeasyBase {
  @Metadata()
  request: GetMovieRemoteSearchResultsRequests;

  @Metadata()
  security: GetMovieRemoteSearchResultsSecurity;
}


export class GetMovieRemoteSearchResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RemoteSearchResult })
  remoteSearchResults?: shared.RemoteSearchResult[];

  @Metadata()
  statusCode: number;
}
