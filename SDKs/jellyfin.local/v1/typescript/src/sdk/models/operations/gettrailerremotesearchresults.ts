import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrailerRemoteSearchResultsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  trailerInfoRemoteSearchQuery?: shared.TrailerInfoRemoteSearchQuery;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  trailerInfoRemoteSearchQuery1?: shared.TrailerInfoRemoteSearchQuery;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  trailerInfoRemoteSearchQuery2?: shared.TrailerInfoRemoteSearchQuery;
}


export class GetTrailerRemoteSearchResultsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetTrailerRemoteSearchResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: GetTrailerRemoteSearchResultsRequests;

  @SpeakeasyMetadata()
  security: GetTrailerRemoteSearchResultsSecurity;
}


export class GetTrailerRemoteSearchResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RemoteSearchResult })
  remoteSearchResults?: shared.RemoteSearchResult[];

  @SpeakeasyMetadata()
  statusCode: number;
}
