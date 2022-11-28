import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectResult } from "./googleprivacydlpv2inspectresult";
/**
 * Results of redacting an image.
**/
export declare class GooglePrivacyDlpV2RedactImageResponse extends SpeakeasyBase {
    extractedText?: string;
    inspectResult?: GooglePrivacyDlpV2InspectResult;
    redactedImage?: string;
}
