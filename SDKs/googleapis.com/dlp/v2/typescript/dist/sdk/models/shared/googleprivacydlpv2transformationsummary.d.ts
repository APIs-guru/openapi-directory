import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2FieldTransformation } from "./googleprivacydlpv2fieldtransformation";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2RecordSuppression } from "./googleprivacydlpv2recordsuppression";
import { GooglePrivacyDlpV2SummaryResult } from "./googleprivacydlpv2summaryresult";
import { GooglePrivacyDlpV2PrimitiveTransformation } from "./googleprivacydlpv2primitivetransformation";
/**
 * Summary of a single transformation. Only one of 'transformation', 'field_transformation', or 'record_suppress' will be set.
**/
export declare class GooglePrivacyDlpV2TransformationSummary extends SpeakeasyBase {
    field?: GooglePrivacyDlpV2FieldId;
    fieldTransformations?: GooglePrivacyDlpV2FieldTransformation[];
    infoType?: GooglePrivacyDlpV2InfoType;
    recordSuppress?: GooglePrivacyDlpV2RecordSuppression;
    results?: GooglePrivacyDlpV2SummaryResult[];
    transformation?: GooglePrivacyDlpV2PrimitiveTransformation;
    transformedBytes?: string;
}
