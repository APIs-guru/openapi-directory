import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2RecordCondition } from "./googleprivacydlpv2recordcondition";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2InfoTypeTransformations } from "./googleprivacydlpv2infotypetransformations";
import { GooglePrivacyDlpV2PrimitiveTransformation } from "./googleprivacydlpv2primitivetransformation";
/**
 * The transformation to apply to the field.
**/
export declare class GooglePrivacyDlpV2FieldTransformation extends SpeakeasyBase {
    condition?: GooglePrivacyDlpV2RecordCondition;
    fields?: GooglePrivacyDlpV2FieldId[];
    infoTypeTransformations?: GooglePrivacyDlpV2InfoTypeTransformations;
    primitiveTransformation?: GooglePrivacyDlpV2PrimitiveTransformation;
}
