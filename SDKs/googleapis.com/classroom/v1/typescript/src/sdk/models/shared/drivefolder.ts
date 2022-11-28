import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DriveFolder
/** 
 * Representation of a Google Drive folder.
**/
export class DriveFolder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
