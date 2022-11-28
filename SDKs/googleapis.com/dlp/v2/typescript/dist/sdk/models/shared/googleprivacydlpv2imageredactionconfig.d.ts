import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2Color } from "./googleprivacydlpv2color";
/**
 * Configuration for determining how redaction of images should occur.
**/
export declare class GooglePrivacyDlpV2ImageRedactionConfig extends SpeakeasyBase {
    infoType?: GooglePrivacyDlpV2InfoType;
    redactAllText?: boolean;
    redactionColor?: GooglePrivacyDlpV2Color;
}
