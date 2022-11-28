import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldTransformation } from "./googleprivacydlpv2fieldtransformation";
import { GooglePrivacyDlpV2RecordSuppression } from "./googleprivacydlpv2recordsuppression";
/**
 * A type of transformation that is applied over structured data such as a table.
**/
export declare class GooglePrivacyDlpV2RecordTransformations extends SpeakeasyBase {
    fieldTransformations?: GooglePrivacyDlpV2FieldTransformation[];
    recordSuppressions?: GooglePrivacyDlpV2RecordSuppression[];
}
