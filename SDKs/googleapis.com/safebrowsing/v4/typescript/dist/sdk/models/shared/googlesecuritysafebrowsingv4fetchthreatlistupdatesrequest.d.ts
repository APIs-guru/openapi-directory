import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ClientInfo } from "./googlesecuritysafebrowsingv4clientinfo";
import { GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest } from "./googlesecuritysafebrowsingv4fetchthreatlistupdatesrequestlistupdaterequest";
/**
 * Describes a Safe Browsing API update request. Clients can request updates for multiple lists in a single request. The server may not respond to all requests, if the server has no updates for that list. NOTE: Field index 2 is unused. NEXT: 5
**/
export declare class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest extends SpeakeasyBase {
    client?: GoogleSecuritySafebrowsingV4ClientInfo;
    listUpdateRequests?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest[];
}
