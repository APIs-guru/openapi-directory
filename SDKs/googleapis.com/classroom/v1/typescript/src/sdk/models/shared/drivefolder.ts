import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DriveFolder
/** 
 * Representation of a Google Drive folder.
**/
export class DriveFolder extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
