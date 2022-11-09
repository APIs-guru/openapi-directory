import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=field" })
  field?: GooglePrivacyDlpV2FieldId;

  @Metadata({ data: "json, name=fieldTransformations", elemType: shared.GooglePrivacyDlpV2FieldTransformation })
  fieldTransformations?: GooglePrivacyDlpV2FieldTransformation[];

  @Metadata({ data: "json, name=infoType" })
  infoType?: GooglePrivacyDlpV2InfoType;

  @Metadata({ data: "json, name=recordSuppress" })
  recordSuppress?: GooglePrivacyDlpV2RecordSuppression;

  @Metadata({ data: "json, name=results", elemType: shared.GooglePrivacyDlpV2SummaryResult })
  results?: GooglePrivacyDlpV2SummaryResult[];

  @Metadata({ data: "json, name=transformation" })
  transformation?: GooglePrivacyDlpV2PrimitiveTransformation;

  @Metadata({ data: "json, name=transformedBytes" })
  transformedBytes?: string;
}
