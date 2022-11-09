import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FleetLifecycleStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
}


// FleetLifecycleState
/** 
 * FleetLifecycleState describes the state of a Fleet resource.
**/
export class FleetLifecycleState extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: FleetLifecycleStateCodeEnum;
}
