import { SpeakeasyBase } from "../../../internal/utils";
import { PatchInstanceFilterGroupLabel } from "./patchinstancefiltergrouplabel";
/**
 * A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.
**/
export declare class PatchInstanceFilter extends SpeakeasyBase {
    all?: boolean;
    groupLabels?: PatchInstanceFilterGroupLabel[];
    instanceNamePrefixes?: string[];
    instances?: string[];
    zones?: string[];
}
