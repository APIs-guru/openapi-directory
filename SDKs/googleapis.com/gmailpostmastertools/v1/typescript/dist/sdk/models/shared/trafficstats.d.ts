import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliveryError } from "./deliveryerror";
import { IpReputation } from "./ipreputation";
import { FeedbackLoop } from "./feedbackloop";
export declare enum TrafficStatsDomainReputationEnum {
    ReputationCategoryUnspecified = "REPUTATION_CATEGORY_UNSPECIFIED",
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW",
    Bad = "BAD"
}
/**
 * Email traffic statistics pertaining to a specific date.
**/
export declare class TrafficStats extends SpeakeasyBase {
    deliveryErrors?: DeliveryError[];
    dkimSuccessRatio?: number;
    dmarcSuccessRatio?: number;
    domainReputation?: TrafficStatsDomainReputationEnum;
    inboundEncryptionRatio?: number;
    ipReputations?: IpReputation[];
    name?: string;
    outboundEncryptionRatio?: number;
    spammyFeedbackLoops?: FeedbackLoop[];
    spfSuccessRatio?: number;
    userReportedSpamRatio?: number;
}
