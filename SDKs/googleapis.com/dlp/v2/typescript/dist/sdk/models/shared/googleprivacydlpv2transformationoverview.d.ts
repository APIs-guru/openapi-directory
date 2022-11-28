import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2TransformationSummary } from "./googleprivacydlpv2transformationsummary";
/**
 * Overview of the modifications that occurred.
**/
export declare class GooglePrivacyDlpV2TransformationOverview extends SpeakeasyBase {
    transformationSummaries?: GooglePrivacyDlpV2TransformationSummary[];
    transformedBytes?: string;
}
