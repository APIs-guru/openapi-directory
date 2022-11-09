import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LibraryOptions } from "./libraryoptions";


// VirtualFolderInfo
/** 
 * Used to hold information about a user's list of configured virtual folders.
**/
export class VirtualFolderInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionType" })
  collectionType?: string;

  @Metadata({ data: "json, name=ItemId" })
  itemId?: string;

  @Metadata({ data: "json, name=LibraryOptions" })
  libraryOptions?: LibraryOptions;

  @Metadata({ data: "json, name=Locations" })
  locations?: string[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PrimaryImageItemId" })
  primaryImageItemId?: string;

  @Metadata({ data: "json, name=RefreshProgress" })
  refreshProgress?: number;

  @Metadata({ data: "json, name=RefreshStatus" })
  refreshStatus?: string;
}
