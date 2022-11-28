import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPersonRemoteSearchResultsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  personLookupInfoRemoteSearchQuery?: shared.PersonLookupInfoRemoteSearchQuery;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  personLookupInfoRemoteSearchQuery1?: shared.PersonLookupInfoRemoteSearchQuery;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  personLookupInfoRemoteSearchQuery2?: shared.PersonLookupInfoRemoteSearchQuery;
}


export class GetPersonRemoteSearchResultsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPersonRemoteSearchResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: GetPersonRemoteSearchResultsRequests;

  @SpeakeasyMetadata()
  security: GetPersonRemoteSearchResultsSecurity;
}


export class GetPersonRemoteSearchResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RemoteSearchResult })
  remoteSearchResults?: shared.RemoteSearchResult[];

  @SpeakeasyMetadata()
  statusCode: number;
}
