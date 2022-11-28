import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BlueGreenInfoPhaseEnum {
    PhaseUnspecified = "PHASE_UNSPECIFIED",
    UpdateStarted = "UPDATE_STARTED",
    CreatingGreenPool = "CREATING_GREEN_POOL",
    CordoningBluePool = "CORDONING_BLUE_POOL",
    DrainingBluePool = "DRAINING_BLUE_POOL",
    NodePoolSoaking = "NODE_POOL_SOAKING",
    DeletingBluePool = "DELETING_BLUE_POOL",
    RollbackStarted = "ROLLBACK_STARTED"
}
/**
 * Information relevant to blue-green upgrade.
**/
export declare class BlueGreenInfo extends SpeakeasyBase {
    blueInstanceGroupUrls?: string[];
    bluePoolDeletionStartTime?: string;
    greenInstanceGroupUrls?: string[];
    greenPoolVersion?: string;
    phase?: BlueGreenInfoPhaseEnum;
}
