import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2Location } from "./googleprivacydlpv2location";
import { GooglePrivacyDlpV2QuoteInfo } from "./googleprivacydlpv2quoteinfo";
export declare enum GooglePrivacyDlpV2FindingLikelihoodEnum {
    LikelihoodUnspecified = "LIKELIHOOD_UNSPECIFIED",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Represents a piece of potentially sensitive content.
**/
export declare class GooglePrivacyDlpV2Finding extends SpeakeasyBase {
    createTime?: string;
    findingId?: string;
    infoType?: GooglePrivacyDlpV2InfoType;
    jobCreateTime?: string;
    jobName?: string;
    labels?: Map<string, string>;
    likelihood?: GooglePrivacyDlpV2FindingLikelihoodEnum;
    location?: GooglePrivacyDlpV2Location;
    name?: string;
    quote?: string;
    quoteInfo?: GooglePrivacyDlpV2QuoteInfo;
    resourceName?: string;
    triggerName?: string;
}
