import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LibraryOptions } from "./libraryoptions";



// VirtualFolderInfo
/** 
 * Used to hold information about a user's list of configured virtual folders.
**/
export class VirtualFolderInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionType" })
  collectionType?: string;

  @SpeakeasyMetadata({ data: "json, name=ItemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=LibraryOptions" })
  libraryOptions?: LibraryOptions;

  @SpeakeasyMetadata({ data: "json, name=Locations" })
  locations?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryImageItemId" })
  primaryImageItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=RefreshProgress" })
  refreshProgress?: number;

  @SpeakeasyMetadata({ data: "json, name=RefreshStatus" })
  refreshStatus?: string;
}
