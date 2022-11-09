import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IpReputationReputationEnum {
    ReputationCategoryUnspecified = "REPUTATION_CATEGORY_UNSPECIFIED"
,    High = "HIGH"
,    Medium = "MEDIUM"
,    Low = "LOW"
,    Bad = "BAD"
}


// IpReputation
/** 
 * IP Reputation information for a set of IPs in a specific reputation category.
**/
export class IpReputation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipCount" })
  ipCount?: string;

  @Metadata({ data: "json, name=numIps" })
  numIps?: string;

  @Metadata({ data: "json, name=reputation" })
  reputation?: IpReputationReputationEnum;

  @Metadata({ data: "json, name=sampleIps" })
  sampleIps?: string[];
}
