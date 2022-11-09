import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DriveItem } from "./driveitem";


// Drive
/** 
 * Information about a shared drive.
**/
export class Drive extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=root" })
  root?: DriveItem;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
