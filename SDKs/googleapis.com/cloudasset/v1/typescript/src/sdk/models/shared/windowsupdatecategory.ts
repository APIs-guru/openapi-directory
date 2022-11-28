import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WindowsUpdateCategory
/** 
 * Categories specified by the Windows Update.
**/
export class WindowsUpdateCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
