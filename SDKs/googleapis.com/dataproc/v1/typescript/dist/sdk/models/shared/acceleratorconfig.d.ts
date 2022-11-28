import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the type and number of accelerator cards attached to the instances of an instance. See GPUs on Compute Engine (https://cloud.google.com/compute/docs/gpus/).
**/
export declare class AcceleratorConfig extends SpeakeasyBase {
    acceleratorCount?: number;
    acceleratorTypeUri?: string;
}
