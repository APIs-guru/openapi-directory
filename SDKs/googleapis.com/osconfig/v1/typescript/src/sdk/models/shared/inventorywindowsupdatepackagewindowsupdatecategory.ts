import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InventoryWindowsUpdatePackageWindowsUpdateCategory
/** 
 * Categories specified by the Windows Update.
**/
export class InventoryWindowsUpdatePackageWindowsUpdateCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
