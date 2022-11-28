import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LibraryOptions } from "./libraryoptions";



// AddVirtualFolderDto
/** 
 * Add virtual folder dto.
**/
export class AddVirtualFolderDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LibraryOptions" })
  libraryOptions?: LibraryOptions;
}
