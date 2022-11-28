import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetLifecycleState } from "./fleetlifecyclestate";



// Fleet
/** 
 * Fleet contains the Fleet-wide metadata and configuration.
**/
export class Fleet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: FleetLifecycleState;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// FleetInput
/** 
 * Fleet contains the Fleet-wide metadata and configuration.
**/
export class FleetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
