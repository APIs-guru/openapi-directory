import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleSecuritySafebrowsingV4ClientInfo } from "./googlesecuritysafebrowsingv4clientinfo";
import { GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest } from "./googlesecuritysafebrowsingv4fetchthreatlistupdatesrequestlistupdaterequest";


// GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest
/** 
 * Describes a Safe Browsing API update request. Clients can request updates for multiple lists in a single request. The server may not respond to all requests, if the server has no updates for that list. NOTE: Field index 2 is unused. NEXT: 5
**/
export class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client" })
  client?: GoogleSecuritySafebrowsingV4ClientInfo;

  @Metadata({ data: "json, name=listUpdateRequests", elemType: shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest })
  listUpdateRequests?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest[];
}
