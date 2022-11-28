import { SpeakeasyBase } from "../../../internal/utils";
import { Membership } from "./membership";
export declare class ListMembershipsResponse extends SpeakeasyBase {
    memberships?: Membership[];
    nextPageToken?: string;
}
