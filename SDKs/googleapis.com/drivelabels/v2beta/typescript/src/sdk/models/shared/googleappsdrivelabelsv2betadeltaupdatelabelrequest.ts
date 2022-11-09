import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestrequest";
import { GoogleAppsDriveLabelsV2betaWriteControl } from "./googleappsdrivelabelsv2betawritecontrol";

export enum GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum {
    LabelViewBasic = "LABEL_VIEW_BASIC"
,    LabelViewFull = "LABEL_VIEW_FULL"
}


// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest
/** 
 * The set of requests for updating aspects of a Label. If any request is not valid, no requests will be applied.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=requests", elemType: shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest })
  requests?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest[];

  @Metadata({ data: "json, name=useAdminAccess" })
  useAdminAccess?: boolean;

  @Metadata({ data: "json, name=view" })
  view?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum;

  @Metadata({ data: "json, name=writeControl" })
  writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
}
