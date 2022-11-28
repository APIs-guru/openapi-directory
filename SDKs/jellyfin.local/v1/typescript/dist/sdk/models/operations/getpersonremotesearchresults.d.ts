import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPersonRemoteSearchResultsRequests extends SpeakeasyBase {
    personLookupInfoRemoteSearchQuery?: shared.PersonLookupInfoRemoteSearchQuery;
    personLookupInfoRemoteSearchQuery1?: shared.PersonLookupInfoRemoteSearchQuery;
    personLookupInfoRemoteSearchQuery2?: shared.PersonLookupInfoRemoteSearchQuery;
}
export declare class GetPersonRemoteSearchResultsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetPersonRemoteSearchResultsRequest extends SpeakeasyBase {
    request: GetPersonRemoteSearchResultsRequests;
    security: GetPersonRemoteSearchResultsSecurity;
}
export declare class GetPersonRemoteSearchResultsResponse extends SpeakeasyBase {
    contentType: string;
    remoteSearchResults?: shared.RemoteSearchResult[];
    statusCode: number;
}
