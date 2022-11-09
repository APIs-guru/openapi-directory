import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum IpReputationReputationEnum {
    ReputationCategoryUnspecified = "REPUTATION_CATEGORY_UNSPECIFIED",
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW",
    Bad = "BAD"
}
/**
 * IP Reputation information for a set of IPs in a specific reputation category.
**/
export declare class IpReputation extends SpeakeasyBase {
    ipCount?: string;
    numIps?: string;
    reputation?: IpReputationReputationEnum;
    sampleIps?: string[];
}
