import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationOwner } from "./organizationowner";
export declare enum OrganizationLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    DeleteRequested = "DELETE_REQUESTED"
}
/**
 * The root node in the resource hierarchy to which a particular entity's (e.g., company) resources belong.
**/
export declare class Organization extends SpeakeasyBase {
    creationTime?: string;
    displayName?: string;
    lifecycleState?: OrganizationLifecycleStateEnum;
    name?: string;
    organizationId?: string;
    owner?: OrganizationOwner;
}
