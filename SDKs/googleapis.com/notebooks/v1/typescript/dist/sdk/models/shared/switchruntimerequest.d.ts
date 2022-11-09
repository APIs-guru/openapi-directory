import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeAcceleratorConfig } from "./runtimeacceleratorconfig";
/**
 * Request for switching a Managed Notebook Runtime.
**/
export declare class SwitchRuntimeRequest extends SpeakeasyBase {
    acceleratorConfig?: RuntimeAcceleratorConfig;
    machineType?: string;
    requestId?: string;
}
