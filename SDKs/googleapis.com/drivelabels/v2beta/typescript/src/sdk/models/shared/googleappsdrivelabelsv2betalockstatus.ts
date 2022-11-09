import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaLockStatus
/** 
 * Contains information about whether a label component should be considered locked.
**/
export class GoogleAppsDriveLabelsV2betaLockStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=locked" })
  locked?: boolean;
}
