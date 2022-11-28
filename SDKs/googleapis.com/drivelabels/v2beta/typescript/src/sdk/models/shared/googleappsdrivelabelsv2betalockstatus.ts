import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaLockStatus
/** 
 * Contains information about whether a label component should be considered locked.
**/
export class GoogleAppsDriveLabelsV2betaLockStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;
}
