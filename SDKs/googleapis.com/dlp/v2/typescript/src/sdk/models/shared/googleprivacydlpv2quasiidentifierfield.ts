import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";


// GooglePrivacyDlpV2QuasiIdentifierField
/** 
 * A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.
**/
export class GooglePrivacyDlpV2QuasiIdentifierField extends SpeakeasyBase {
  @Metadata({ data: "json, name=customTag" })
  customTag?: string;

  @Metadata({ data: "json, name=field" })
  field?: GooglePrivacyDlpV2FieldId;
}
