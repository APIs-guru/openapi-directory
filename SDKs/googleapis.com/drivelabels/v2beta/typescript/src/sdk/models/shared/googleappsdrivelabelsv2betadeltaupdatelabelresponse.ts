import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponseresponse";
import { GoogleAppsDriveLabelsV2betaLabel } from "./googleappsdrivelabelsv2betalabel";



// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse
/** 
 * Response for Label update.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse })
  responses?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse[];

  @SpeakeasyMetadata({ data: "json, name=updatedLabel" })
  updatedLabel?: GoogleAppsDriveLabelsV2betaLabel;
}
