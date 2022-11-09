import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AcceleratorConfig
/** 
 * Specifies the type and number of accelerator cards attached to the instances of an instance. See GPUs on Compute Engine (https://cloud.google.com/compute/docs/gpus/).
**/
export class AcceleratorConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceleratorCount" })
  acceleratorCount?: number;

  @Metadata({ data: "json, name=acceleratorTypeUri" })
  acceleratorTypeUri?: string;
}
