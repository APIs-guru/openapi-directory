import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2PrimitiveTransformation } from "./googleprivacydlpv2primitivetransformation";
/**
 * A transformation to apply to text that is identified as a specific info_type.
**/
export declare class GooglePrivacyDlpV2InfoTypeTransformation extends SpeakeasyBase {
    infoTypes?: GooglePrivacyDlpV2InfoType[];
    primitiveTransformation?: GooglePrivacyDlpV2PrimitiveTransformation;
}
