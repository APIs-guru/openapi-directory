import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FleetLifecycleStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING"
}


// FleetLifecycleState
/** 
 * FleetLifecycleState describes the state of a Fleet resource.
**/
export class FleetLifecycleState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: FleetLifecycleStateCodeEnum;
}
