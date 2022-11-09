import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LibraryOptions } from "./libraryoptions";


// AddVirtualFolderDto
/** 
 * Add virtual folder dto.
**/
export class AddVirtualFolderDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=LibraryOptions" })
  libraryOptions?: LibraryOptions;
}
