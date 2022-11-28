import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceGroup } from "./ospolicyresourcegroup";
export declare enum OsPolicyModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Validation = "VALIDATION",
    Enforcement = "ENFORCEMENT"
}
/**
 * An OS policy defines the desired state configuration for a VM.
**/
export declare class OsPolicy extends SpeakeasyBase {
    allowNoResourceGroupMatch?: boolean;
    description?: string;
    id?: string;
    mode?: OsPolicyModeEnum;
    resourceGroups?: OsPolicyResourceGroup[];
}
