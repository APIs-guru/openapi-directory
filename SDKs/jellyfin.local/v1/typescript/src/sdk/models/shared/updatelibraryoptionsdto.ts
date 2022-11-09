import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LibraryOptions } from "./libraryoptions";


// UpdateLibraryOptionsDto
/** 
 * Update library options dto.
**/
export class UpdateLibraryOptionsDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=LibraryOptions" })
  libraryOptions?: LibraryOptions;
}
