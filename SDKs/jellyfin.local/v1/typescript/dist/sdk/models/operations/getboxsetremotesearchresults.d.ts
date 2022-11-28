import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBoxSetRemoteSearchResultsRequests extends SpeakeasyBase {
    boxSetInfoRemoteSearchQuery?: shared.BoxSetInfoRemoteSearchQuery;
    boxSetInfoRemoteSearchQuery1?: shared.BoxSetInfoRemoteSearchQuery;
    boxSetInfoRemoteSearchQuery2?: shared.BoxSetInfoRemoteSearchQuery;
}
export declare class GetBoxSetRemoteSearchResultsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetBoxSetRemoteSearchResultsRequest extends SpeakeasyBase {
    request: GetBoxSetRemoteSearchResultsRequests;
    security: GetBoxSetRemoteSearchResultsSecurity;
}
export declare class GetBoxSetRemoteSearchResultsResponse extends SpeakeasyBase {
    contentType: string;
    remoteSearchResults?: shared.RemoteSearchResult[];
    statusCode: number;
}
