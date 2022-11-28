import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DriveItem } from "./driveitem";



// Drive
/** 
 * Information about a shared drive.
**/
export class Drive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=root" })
  root?: DriveItem;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
