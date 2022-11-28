import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcceleratorConfig
/** 
 * Specifies the type and number of accelerator cards attached to the instances of an instance. See GPUs on Compute Engine (https://cloud.google.com/compute/docs/gpus/).
**/
export class AcceleratorConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorCount" })
  acceleratorCount?: number;

  @SpeakeasyMetadata({ data: "json, name=acceleratorTypeUri" })
  acceleratorTypeUri?: string;
}
