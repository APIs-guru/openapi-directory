import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyInventoryFilter } from "./ospolicyinventoryfilter";
import { OsPolicyResource } from "./ospolicyresource";



// OsPolicyResourceGroup
/** 
 * Resource groups provide a mechanism to group OS policy resources. Resource groups enable OS policy authors to create a single OS policy to be applied to VMs running different operating Systems. When the OS policy is applied to a target VM, the appropriate resource group within the OS policy is selected based on the `OSFilter` specified within the resource group.
**/
export class OsPolicyResourceGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inventoryFilters", elemType: OsPolicyInventoryFilter })
  inventoryFilters?: OsPolicyInventoryFilter[];

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: OsPolicyResource })
  resources?: OsPolicyResource[];
}
