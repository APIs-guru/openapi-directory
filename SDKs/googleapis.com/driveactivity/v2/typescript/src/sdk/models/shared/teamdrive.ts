import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DriveItem } from "./driveitem";


// TeamDrive
/** 
 * This item is deprecated; please see `Drive` instead.
**/
export class TeamDrive extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=root" })
  root?: DriveItem;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
