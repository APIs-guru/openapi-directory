import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryError } from "./deliveryerror";
import { IpReputation } from "./ipreputation";
import { FeedbackLoop } from "./feedbackloop";


export enum TrafficStatsDomainReputationEnum {
    ReputationCategoryUnspecified = "REPUTATION_CATEGORY_UNSPECIFIED",
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW",
    Bad = "BAD"
}


// TrafficStats
/** 
 * Email traffic statistics pertaining to a specific date.
**/
export class TrafficStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deliveryErrors", elemType: DeliveryError })
  deliveryErrors?: DeliveryError[];

  @SpeakeasyMetadata({ data: "json, name=dkimSuccessRatio" })
  dkimSuccessRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=dmarcSuccessRatio" })
  dmarcSuccessRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=domainReputation" })
  domainReputation?: TrafficStatsDomainReputationEnum;

  @SpeakeasyMetadata({ data: "json, name=inboundEncryptionRatio" })
  inboundEncryptionRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=ipReputations", elemType: IpReputation })
  ipReputations?: IpReputation[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outboundEncryptionRatio" })
  outboundEncryptionRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=spammyFeedbackLoops", elemType: FeedbackLoop })
  spammyFeedbackLoops?: FeedbackLoop[];

  @SpeakeasyMetadata({ data: "json, name=spfSuccessRatio" })
  spfSuccessRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=userReportedSpamRatio" })
  userReportedSpamRatio?: number;
}
