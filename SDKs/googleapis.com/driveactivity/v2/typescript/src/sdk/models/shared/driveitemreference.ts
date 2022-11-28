import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DriveFolder } from "./drivefolder";
import { Folder } from "./folder";



// DriveItemReference
/** 
 * A lightweight reference to a Drive item, such as a file or folder.
**/
export class DriveItemReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=driveFile" })
  driveFile?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=driveFolder" })
  driveFolder?: DriveFolder;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=folder" })
  folder?: Folder;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
