import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualMachine } from "./virtualmachine";
/**
 * The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail.
**/
export declare class Resources extends SpeakeasyBase {
    regions?: string[];
    virtualMachine?: VirtualMachine;
    zones?: string[];
}
