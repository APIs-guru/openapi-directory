import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InventoryWindowsUpdatePackageWindowsUpdateCategory
/** 
 * Categories specified by the Windows Update.
**/
export class InventoryWindowsUpdatePackageWindowsUpdateCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
