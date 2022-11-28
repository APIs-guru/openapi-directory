import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SystemEventTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    UserDeletion = "USER_DELETION",
    TrashAutoPurge = "TRASH_AUTO_PURGE"
}


// SystemEvent
/** 
 * Event triggered by system operations instead of end users.
**/
export class SystemEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SystemEventTypeEnum;
}
