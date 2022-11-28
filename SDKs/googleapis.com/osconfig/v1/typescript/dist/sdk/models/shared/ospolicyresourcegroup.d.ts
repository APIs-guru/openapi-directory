import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyInventoryFilter } from "./ospolicyinventoryfilter";
import { OsPolicyResource } from "./ospolicyresource";
/**
 * Resource groups provide a mechanism to group OS policy resources. Resource groups enable OS policy authors to create a single OS policy to be applied to VMs running different operating Systems. When the OS policy is applied to a target VM, the appropriate resource group within the OS policy is selected based on the `OSFilter` specified within the resource group.
**/
export declare class OsPolicyResourceGroup extends SpeakeasyBase {
    inventoryFilters?: OsPolicyInventoryFilter[];
    resources?: OsPolicyResource[];
}
