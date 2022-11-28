import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TeamDriveReference
/** 
 * This item is deprecated; please see `DriveReference` instead.
**/
export class TeamDriveReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
