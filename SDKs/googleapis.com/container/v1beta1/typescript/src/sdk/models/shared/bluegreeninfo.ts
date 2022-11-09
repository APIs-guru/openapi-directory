import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BlueGreenInfoPhaseEnum {
    PhaseUnspecified = "PHASE_UNSPECIFIED"
,    UpdateStarted = "UPDATE_STARTED"
,    CreatingGreenPool = "CREATING_GREEN_POOL"
,    CordoningBluePool = "CORDONING_BLUE_POOL"
,    DrainingBluePool = "DRAINING_BLUE_POOL"
,    NodePoolSoaking = "NODE_POOL_SOAKING"
,    DeletingBluePool = "DELETING_BLUE_POOL"
,    RollbackStarted = "ROLLBACK_STARTED"
}


// BlueGreenInfo
/** 
 * Information relevant to blue-green upgrade.
**/
export class BlueGreenInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=blueInstanceGroupUrls" })
  blueInstanceGroupUrls?: string[];

  @Metadata({ data: "json, name=bluePoolDeletionStartTime" })
  bluePoolDeletionStartTime?: string;

  @Metadata({ data: "json, name=greenInstanceGroupUrls" })
  greenInstanceGroupUrls?: string[];

  @Metadata({ data: "json, name=greenPoolVersion" })
  greenPoolVersion?: string;

  @Metadata({ data: "json, name=phase" })
  phase?: BlueGreenInfoPhaseEnum;
}
