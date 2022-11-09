import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GpuSharingConfig } from "./gpusharingconfig";


// AcceleratorConfig
/** 
 * AcceleratorConfig represents a Hardware Accelerator request.
**/
export class AcceleratorConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceleratorCount" })
  acceleratorCount?: string;

  @Metadata({ data: "json, name=acceleratorType" })
  acceleratorType?: string;

  @Metadata({ data: "json, name=gpuPartitionSize" })
  gpuPartitionSize?: string;

  @Metadata({ data: "json, name=gpuSharingConfig" })
  gpuSharingConfig?: GpuSharingConfig;

  @Metadata({ data: "json, name=maxTimeSharedClientsPerGpu" })
  maxTimeSharedClientsPerGpu?: string;
}
