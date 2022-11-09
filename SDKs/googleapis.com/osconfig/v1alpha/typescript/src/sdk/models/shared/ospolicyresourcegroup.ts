import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OsPolicyInventoryFilter } from "./ospolicyinventoryfilter";
import { OsPolicyOsFilter } from "./ospolicyosfilter";
import { OsPolicyResource } from "./ospolicyresource";


// OsPolicyResourceGroup
/** 
 * Resource groups provide a mechanism to group OS policy resources. Resource groups enable OS policy authors to create a single OS policy to be applied to VMs running different operating Systems. When the OS policy is applied to a target VM, the appropriate resource group within the OS policy is selected based on the `OSFilter` specified within the resource group.
**/
export class OsPolicyResourceGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventoryFilters", elemType: shared.OsPolicyInventoryFilter })
  inventoryFilters?: OsPolicyInventoryFilter[];

  @Metadata({ data: "json, name=osFilter" })
  osFilter?: OsPolicyOsFilter;

  @Metadata({ data: "json, name=resources", elemType: shared.OsPolicyResource })
  resources?: OsPolicyResource[];
}
