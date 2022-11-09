import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DriveFile
/** 
 * Representation of a Google Drive file.
**/
export class DriveFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
