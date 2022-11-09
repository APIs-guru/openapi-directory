import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WorkloadMetadataConfigModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    GceMetadata = "GCE_METADATA"
,    GkeMetadata = "GKE_METADATA"
}

export enum WorkloadMetadataConfigNodeMetadataEnum {
    Unspecified = "UNSPECIFIED"
,    Secure = "SECURE"
,    Expose = "EXPOSE"
,    GkeMetadataServer = "GKE_METADATA_SERVER"
}


// WorkloadMetadataConfig
/** 
 * WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool.
**/
export class WorkloadMetadataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: WorkloadMetadataConfigModeEnum;

  @Metadata({ data: "json, name=nodeMetadata" })
  nodeMetadata?: WorkloadMetadataConfigNodeMetadataEnum;
}
