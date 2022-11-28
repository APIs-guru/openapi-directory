import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldTransformation } from "./googleprivacydlpv2fieldtransformation";
import { GooglePrivacyDlpV2RecordSuppression } from "./googleprivacydlpv2recordsuppression";



// GooglePrivacyDlpV2RecordTransformations
/** 
 * A type of transformation that is applied over structured data such as a table.
**/
export class GooglePrivacyDlpV2RecordTransformations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldTransformations", elemType: GooglePrivacyDlpV2FieldTransformation })
  fieldTransformations?: GooglePrivacyDlpV2FieldTransformation[];

  @SpeakeasyMetadata({ data: "json, name=recordSuppressions", elemType: GooglePrivacyDlpV2RecordSuppression })
  recordSuppressions?: GooglePrivacyDlpV2RecordSuppression[];
}
