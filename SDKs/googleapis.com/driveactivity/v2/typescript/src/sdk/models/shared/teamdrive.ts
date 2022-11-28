import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DriveItem } from "./driveitem";



// TeamDrive
/** 
 * This item is deprecated; please see `Drive` instead.
**/
export class TeamDrive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=root" })
  root?: DriveItem;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
