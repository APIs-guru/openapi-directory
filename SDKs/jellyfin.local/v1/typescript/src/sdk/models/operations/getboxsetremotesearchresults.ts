import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBoxSetRemoteSearchResultsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  boxSetInfoRemoteSearchQuery?: shared.BoxSetInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=application/json" })
  boxSetInfoRemoteSearchQuery1?: shared.BoxSetInfoRemoteSearchQuery;

  @Metadata({ data: "request, media_type=text/json" })
  boxSetInfoRemoteSearchQuery2?: shared.BoxSetInfoRemoteSearchQuery;
}


export class GetBoxSetRemoteSearchResultsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetBoxSetRemoteSearchResultsRequest extends SpeakeasyBase {
  @Metadata()
  request: GetBoxSetRemoteSearchResultsRequests;

  @Metadata()
  security: GetBoxSetRemoteSearchResultsSecurity;
}


export class GetBoxSetRemoteSearchResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RemoteSearchResult })
  remoteSearchResults?: shared.RemoteSearchResult[];

  @Metadata()
  statusCode: number;
}
