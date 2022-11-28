import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";



// GooglePrivacyDlpV2QuasiIdField
/** 
 * A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.
**/
export class GooglePrivacyDlpV2QuasiIdField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customTag" })
  customTag?: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: GooglePrivacyDlpV2FieldId;
}
