import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IpReputationReputationEnum {
    ReputationCategoryUnspecified = "REPUTATION_CATEGORY_UNSPECIFIED",
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW",
    Bad = "BAD"
}


// IpReputation
/** 
 * IP Reputation information for a set of IPs in a specific reputation category.
**/
export class IpReputation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipCount" })
  ipCount?: string;

  @SpeakeasyMetadata({ data: "json, name=reputation" })
  reputation?: IpReputationReputationEnum;

  @SpeakeasyMetadata({ data: "json, name=sampleIps" })
  sampleIps?: string[];
}
