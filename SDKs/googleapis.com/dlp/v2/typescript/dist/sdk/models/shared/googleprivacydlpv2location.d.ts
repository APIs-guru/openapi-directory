import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Range } from "./googleprivacydlpv2range";
import { GooglePrivacyDlpV2Container } from "./googleprivacydlpv2container";
import { GooglePrivacyDlpV2ContentLocation } from "./googleprivacydlpv2contentlocation";
/**
 * Specifies the location of the finding.
**/
export declare class GooglePrivacyDlpV2Location extends SpeakeasyBase {
    byteRange?: GooglePrivacyDlpV2Range;
    codepointRange?: GooglePrivacyDlpV2Range;
    container?: GooglePrivacyDlpV2Container;
    contentLocations?: GooglePrivacyDlpV2ContentLocation[];
}
