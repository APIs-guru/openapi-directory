import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Color } from "./googleprivacydlpv2color";
import { GooglePrivacyDlpV2SelectedInfoTypes } from "./googleprivacydlpv2selectedinfotypes";
/**
 * Configuration for determining how redaction of images should occur.
**/
export declare class GooglePrivacyDlpV2ImageTransformation extends SpeakeasyBase {
    allInfoTypes?: Map<string, any>;
    allText?: Map<string, any>;
    redactionColor?: GooglePrivacyDlpV2Color;
    selectedInfoTypes?: GooglePrivacyDlpV2SelectedInfoTypes;
}
