import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum FeatureResourceStateStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabling = "ENABLING",
    Active = "ACTIVE",
    Disabling = "DISABLING",
    Updating = "UPDATING",
    ServiceUpdating = "SERVICE_UPDATING"
}
/**
 * FeatureResourceState describes the state of a Feature *resource* in the GkeHub API. See `FeatureState` for the "running state" of the Feature in the Hub and across Memberships.
**/
export declare class FeatureResourceState extends SpeakeasyBase {
    state?: FeatureResourceStateStateEnum;
}
