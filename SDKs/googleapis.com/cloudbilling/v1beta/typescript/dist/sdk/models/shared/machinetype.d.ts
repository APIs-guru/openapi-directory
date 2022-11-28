import { SpeakeasyBase } from "../../../internal/utils";
import { CustomMachineType } from "./custommachinetype";
import { PredefinedMachineType } from "./predefinedmachinetype";
/**
 * Specification of machine series, memory, and number of vCPUs.
**/
export declare class MachineType extends SpeakeasyBase {
    customMachineType?: CustomMachineType;
    predefinedMachineType?: PredefinedMachineType;
}
