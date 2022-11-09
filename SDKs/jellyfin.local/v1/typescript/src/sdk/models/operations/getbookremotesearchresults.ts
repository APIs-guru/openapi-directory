import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBookRemoteSearchResultsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  bookInfoRemoteSearchQuery?: shared.BookInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=application/json" })
  bookInfoRemoteSearchQuery1?: shared.BookInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=text/json" })
  bookInfoRemoteSearchQuery2?: shared.BookInfoRemoteSearchQuery;
}


export class GetBookRemoteSearchResultsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetBookRemoteSearchResultsRequest extends SpeakeasyBase {
  @Metadata()
  request: GetBookRemoteSearchResultsRequests;

  @Metadata()
  security: GetBookRemoteSearchResultsSecurity;
}


export class GetBookRemoteSearchResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RemoteSearchResult })
  remoteSearchResults?: shared.RemoteSearchResult[];

  @Metadata()
  statusCode: number;
}
