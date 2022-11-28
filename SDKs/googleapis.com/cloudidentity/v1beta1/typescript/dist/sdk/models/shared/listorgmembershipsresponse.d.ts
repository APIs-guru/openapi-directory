import { SpeakeasyBase } from "../../../internal/utils";
import { OrgMembership } from "./orgmembership";
/**
 * The response message for OrgMembershipsService.ListOrgMemberships.
**/
export declare class ListOrgMembershipsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    orgMemberships?: OrgMembership[];
}
