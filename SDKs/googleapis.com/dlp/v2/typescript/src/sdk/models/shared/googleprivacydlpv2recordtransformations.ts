import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2FieldTransformation } from "./googleprivacydlpv2fieldtransformation";
import { GooglePrivacyDlpV2RecordSuppression } from "./googleprivacydlpv2recordsuppression";


// GooglePrivacyDlpV2RecordTransformations
/** 
 * A type of transformation that is applied over structured data such as a table.
**/
export class GooglePrivacyDlpV2RecordTransformations extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldTransformations", elemType: shared.GooglePrivacyDlpV2FieldTransformation })
  fieldTransformations?: GooglePrivacyDlpV2FieldTransformation[];

  @Metadata({ data: "json, name=recordSuppressions", elemType: shared.GooglePrivacyDlpV2RecordSuppression })
  recordSuppressions?: GooglePrivacyDlpV2RecordSuppression[];
}
