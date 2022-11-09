import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Membership } from "./membership";
/**
 * The response message for MembershipsService.ListMemberships.
**/
export declare class ListMembershipsResponse extends SpeakeasyBase {
    memberships?: Membership[];
    nextPageToken?: string;
}
