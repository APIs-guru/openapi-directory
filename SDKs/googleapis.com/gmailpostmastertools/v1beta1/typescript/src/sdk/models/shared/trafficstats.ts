import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeliveryError } from "./deliveryerror";
import { IpReputation } from "./ipreputation";
import { FeedbackLoop } from "./feedbackloop";

export enum TrafficStatsDomainReputationEnum {
    ReputationCategoryUnspecified = "REPUTATION_CATEGORY_UNSPECIFIED"
,    High = "HIGH"
,    Medium = "MEDIUM"
,    Low = "LOW"
,    Bad = "BAD"
}


// TrafficStats
/** 
 * Email traffic statistics pertaining to a specific date.
**/
export class TrafficStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=deliveryErrors", elemType: shared.DeliveryError })
  deliveryErrors?: DeliveryError[];

  @Metadata({ data: "json, name=dkimSuccessRatio" })
  dkimSuccessRatio?: number;

  @Metadata({ data: "json, name=dmarcSuccessRatio" })
  dmarcSuccessRatio?: number;

  @Metadata({ data: "json, name=domainReputation" })
  domainReputation?: TrafficStatsDomainReputationEnum;

  @Metadata({ data: "json, name=inboundEncryptionRatio" })
  inboundEncryptionRatio?: number;

  @Metadata({ data: "json, name=ipReputations", elemType: shared.IpReputation })
  ipReputations?: IpReputation[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=outboundEncryptionRatio" })
  outboundEncryptionRatio?: number;

  @Metadata({ data: "json, name=spammyFeedbackLoops", elemType: shared.FeedbackLoop })
  spammyFeedbackLoops?: FeedbackLoop[];

  @Metadata({ data: "json, name=spfSuccessRatio" })
  spfSuccessRatio?: number;

  @Metadata({ data: "json, name=userReportedSpamRatio" })
  userReportedSpamRatio?: number;
}
