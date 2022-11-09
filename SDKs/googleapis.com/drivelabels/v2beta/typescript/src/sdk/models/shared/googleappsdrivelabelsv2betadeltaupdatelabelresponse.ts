import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponseresponse";
import { GoogleAppsDriveLabelsV2betaLabel } from "./googleappsdrivelabelsv2betalabel";


// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse
/** 
 * Response for Label update.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=responses", elemType: shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse })
  responses?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse[];

  @Metadata({ data: "json, name=updatedLabel" })
  updatedLabel?: GoogleAppsDriveLabelsV2betaLabel;
}
