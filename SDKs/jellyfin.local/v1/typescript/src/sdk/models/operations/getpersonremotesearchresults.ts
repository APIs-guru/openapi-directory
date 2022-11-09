import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPersonRemoteSearchResultsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  personLookupInfoRemoteSearchQuery?: shared.PersonLookupInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=application/json" })
  personLookupInfoRemoteSearchQuery1?: shared.PersonLookupInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=text/json" })
  personLookupInfoRemoteSearchQuery2?: shared.PersonLookupInfoRemoteSearchQuery;
}


export class GetPersonRemoteSearchResultsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPersonRemoteSearchResultsRequest extends SpeakeasyBase {
  @Metadata()
  request: GetPersonRemoteSearchResultsRequests;

  @Metadata()
  security: GetPersonRemoteSearchResultsSecurity;
}


export class GetPersonRemoteSearchResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RemoteSearchResult })
  remoteSearchResults?: shared.RemoteSearchResult[];

  @Metadata()
  statusCode: number;
}
