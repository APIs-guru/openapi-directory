import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestrequest";
import { GoogleAppsDriveLabelsV2betaWriteControl } from "./googleappsdrivelabelsv2betawritecontrol";


export enum GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum {
    LabelViewBasic = "LABEL_VIEW_BASIC",
    LabelViewFull = "LABEL_VIEW_FULL"
}


// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput
/** 
 * The set of requests for updating aspects of a Label. If any request is not valid, no requests will be applied.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput })
  requests?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput[];

  @SpeakeasyMetadata({ data: "json, name=useAdminAccess" })
  useAdminAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum;

  @SpeakeasyMetadata({ data: "json, name=writeControl" })
  writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
}
