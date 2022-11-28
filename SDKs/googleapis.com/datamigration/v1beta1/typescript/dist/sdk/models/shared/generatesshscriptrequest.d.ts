import { SpeakeasyBase } from "../../../internal/utils";
import { VmCreationConfig } from "./vmcreationconfig";
import { VmSelectionConfig } from "./vmselectionconfig";
/**
 * Request message for 'GenerateSshScript' request.
**/
export declare class GenerateSshScriptRequest extends SpeakeasyBase {
    vm?: string;
    vmCreationConfig?: VmCreationConfig;
    vmPort?: number;
    vmSelectionConfig?: VmSelectionConfig;
}
