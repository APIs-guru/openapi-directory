import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FleetLifecycleStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * FleetLifecycleState describes the state of a Fleet resource.
**/
export declare class FleetLifecycleState extends SpeakeasyBase {
    code?: FleetLifecycleStateCodeEnum;
}
