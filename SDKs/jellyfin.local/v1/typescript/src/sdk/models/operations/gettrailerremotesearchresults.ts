import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTrailerRemoteSearchResultsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  trailerInfoRemoteSearchQuery?: shared.TrailerInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=application/json" })
  trailerInfoRemoteSearchQuery1?: shared.TrailerInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=text/json" })
  trailerInfoRemoteSearchQuery2?: shared.TrailerInfoRemoteSearchQuery;
}


export class GetTrailerRemoteSearchResultsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetTrailerRemoteSearchResultsRequest extends SpeakeasyBase {
  @Metadata()
  request: GetTrailerRemoteSearchResultsRequests;

  @Metadata()
  security: GetTrailerRemoteSearchResultsSecurity;
}


export class GetTrailerRemoteSearchResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RemoteSearchResult })
  remoteSearchResults?: shared.RemoteSearchResult[];

  @Metadata()
  statusCode: number;
}
