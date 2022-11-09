import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy } from "./googleappsdrivelabelsv2betalifecycledisabledpolicy";


// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest
/** 
 * Request to disable the Field.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabledPolicy" })
  disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
