import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2FieldTransformation } from "./googleprivacydlpv2fieldtransformation";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2RecordSuppression } from "./googleprivacydlpv2recordsuppression";
import { GooglePrivacyDlpV2SummaryResult } from "./googleprivacydlpv2summaryresult";
import { GooglePrivacyDlpV2PrimitiveTransformation } from "./googleprivacydlpv2primitivetransformation";



// GooglePrivacyDlpV2TransformationSummary
/** 
 * Summary of a single transformation. Only one of 'transformation', 'field_transformation', or 'record_suppress' will be set.
**/
export class GooglePrivacyDlpV2TransformationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: GooglePrivacyDlpV2FieldId;

  @SpeakeasyMetadata({ data: "json, name=fieldTransformations", elemType: GooglePrivacyDlpV2FieldTransformation })
  fieldTransformations?: GooglePrivacyDlpV2FieldTransformation[];

  @SpeakeasyMetadata({ data: "json, name=infoType" })
  infoType?: GooglePrivacyDlpV2InfoType;

  @SpeakeasyMetadata({ data: "json, name=recordSuppress" })
  recordSuppress?: GooglePrivacyDlpV2RecordSuppression;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GooglePrivacyDlpV2SummaryResult })
  results?: GooglePrivacyDlpV2SummaryResult[];

  @SpeakeasyMetadata({ data: "json, name=transformation" })
  transformation?: GooglePrivacyDlpV2PrimitiveTransformation;

  @SpeakeasyMetadata({ data: "json, name=transformedBytes" })
  transformedBytes?: string;
}
