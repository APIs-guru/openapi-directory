import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSeriesRemoteSearchResultsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  seriesInfoRemoteSearchQuery?: shared.SeriesInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=application/json" })
  seriesInfoRemoteSearchQuery1?: shared.SeriesInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=text/json" })
  seriesInfoRemoteSearchQuery2?: shared.SeriesInfoRemoteSearchQuery;
}


export class GetSeriesRemoteSearchResultsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetSeriesRemoteSearchResultsRequest extends SpeakeasyBase {
  @Metadata()
  request: GetSeriesRemoteSearchResultsRequests;

  @Metadata()
  security: GetSeriesRemoteSearchResultsSecurity;
}


export class GetSeriesRemoteSearchResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RemoteSearchResult })
  remoteSearchResults?: shared.RemoteSearchResult[];

  @Metadata()
  statusCode: number;
}
