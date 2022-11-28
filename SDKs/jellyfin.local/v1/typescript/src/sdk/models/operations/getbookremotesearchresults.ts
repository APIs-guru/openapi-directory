import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBookRemoteSearchResultsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  bookInfoRemoteSearchQuery?: shared.BookInfoRemoteSearchQuery;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  bookInfoRemoteSearchQuery1?: shared.BookInfoRemoteSearchQuery;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  bookInfoRemoteSearchQuery2?: shared.BookInfoRemoteSearchQuery;
}


export class GetBookRemoteSearchResultsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetBookRemoteSearchResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: GetBookRemoteSearchResultsRequests;

  @SpeakeasyMetadata()
  security: GetBookRemoteSearchResultsSecurity;
}


export class GetBookRemoteSearchResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RemoteSearchResult })
  remoteSearchResults?: shared.RemoteSearchResult[];

  @SpeakeasyMetadata()
  statusCode: number;
}
