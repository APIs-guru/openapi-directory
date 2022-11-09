import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2Location } from "./googleprivacydlpv2location";
import { GooglePrivacyDlpV2QuoteInfo } from "./googleprivacydlpv2quoteinfo";

export enum GooglePrivacyDlpV2FindingLikelihoodEnum {
    LikelihoodUnspecified = "LIKELIHOOD_UNSPECIFIED"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}


// GooglePrivacyDlpV2Finding
/** 
 * Represents a piece of potentially sensitive content.
**/
export class GooglePrivacyDlpV2Finding extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=findingId" })
  findingId?: string;

  @Metadata({ data: "json, name=infoType" })
  infoType?: GooglePrivacyDlpV2InfoType;

  @Metadata({ data: "json, name=jobCreateTime" })
  jobCreateTime?: string;

  @Metadata({ data: "json, name=jobName" })
  jobName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=likelihood" })
  likelihood?: GooglePrivacyDlpV2FindingLikelihoodEnum;

  @Metadata({ data: "json, name=location" })
  location?: GooglePrivacyDlpV2Location;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=quote" })
  quote?: string;

  @Metadata({ data: "json, name=quoteInfo" })
  quoteInfo?: GooglePrivacyDlpV2QuoteInfo;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=triggerName" })
  triggerName?: string;
}
