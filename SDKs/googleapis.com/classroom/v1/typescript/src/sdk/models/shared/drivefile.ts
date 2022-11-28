import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DriveFile
/** 
 * Representation of a Google Drive file.
**/
export class DriveFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
