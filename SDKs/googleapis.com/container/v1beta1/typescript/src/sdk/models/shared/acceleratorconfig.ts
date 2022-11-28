import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GpuSharingConfig } from "./gpusharingconfig";



// AcceleratorConfig
/** 
 * AcceleratorConfig represents a Hardware Accelerator request.
**/
export class AcceleratorConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorCount" })
  acceleratorCount?: string;

  @SpeakeasyMetadata({ data: "json, name=acceleratorType" })
  acceleratorType?: string;

  @SpeakeasyMetadata({ data: "json, name=gpuPartitionSize" })
  gpuPartitionSize?: string;

  @SpeakeasyMetadata({ data: "json, name=gpuSharingConfig" })
  gpuSharingConfig?: GpuSharingConfig;

  @SpeakeasyMetadata({ data: "json, name=maxTimeSharedClientsPerGpu" })
  maxTimeSharedClientsPerGpu?: string;
}
