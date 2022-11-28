import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FeatureResourceStateStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabling = "ENABLING",
    Active = "ACTIVE",
    Disabling = "DISABLING",
    Updating = "UPDATING",
    ServiceUpdating = "SERVICE_UPDATING"
}


// FeatureResourceState
/** 
 * FeatureResourceState describes the state of a Feature *resource* in the GkeHub API. See `FeatureState` for the "running state" of the Feature in the Hub and across Memberships.
**/
export class FeatureResourceState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: FeatureResourceStateStateEnum;
}
