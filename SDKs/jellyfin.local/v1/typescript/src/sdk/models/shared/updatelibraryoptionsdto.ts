import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LibraryOptions } from "./libraryoptions";



// UpdateLibraryOptionsDto
/** 
 * Update library options dto.
**/
export class UpdateLibraryOptionsDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=LibraryOptions" })
  libraryOptions?: LibraryOptions;
}
