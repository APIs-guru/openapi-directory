import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WorkloadMetadataConfigModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    GceMetadata = "GCE_METADATA",
    GkeMetadata = "GKE_METADATA"
}


// WorkloadMetadataConfig
/** 
 * WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool.
**/
export class WorkloadMetadataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: WorkloadMetadataConfigModeEnum;
}
