import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WindowsUpdateCategory
/** 
 * Categories specified by the Windows Update.
**/
export class WindowsUpdateCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
