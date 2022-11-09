import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DriveFolder } from "./drivefolder";
import { Folder } from "./folder";


// DriveItemReference
/** 
 * A lightweight reference to a Drive item, such as a file or folder.
**/
export class DriveItemReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=driveFile" })
  driveFile?: Map<string, any>;

  @Metadata({ data: "json, name=driveFolder" })
  driveFolder?: DriveFolder;

  @Metadata({ data: "json, name=file" })
  file?: Map<string, any>;

  @Metadata({ data: "json, name=folder" })
  folder?: Folder;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
