import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2LockStatus
/** 
 * Contains information about whether a label component should be considered locked.
**/
export class GoogleAppsDriveLabelsV2LockStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=locked" })
  locked?: boolean;
}
