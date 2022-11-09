import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TeamDriveReference
/** 
 * This item is deprecated; please see `DriveReference` instead.
**/
export class TeamDriveReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
