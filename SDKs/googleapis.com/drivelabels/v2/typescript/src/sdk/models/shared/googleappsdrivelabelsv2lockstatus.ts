import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2LockStatus
/** 
 * Contains information about whether a label component should be considered locked.
**/
export class GoogleAppsDriveLabelsV2LockStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;
}
