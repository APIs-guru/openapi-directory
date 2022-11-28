import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2Location } from "./googleprivacydlpv2location";
import { GooglePrivacyDlpV2QuoteInfo } from "./googleprivacydlpv2quoteinfo";


export enum GooglePrivacyDlpV2FindingLikelihoodEnum {
    LikelihoodUnspecified = "LIKELIHOOD_UNSPECIFIED",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}


// GooglePrivacyDlpV2Finding
/** 
 * Represents a piece of potentially sensitive content.
**/
export class GooglePrivacyDlpV2Finding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=findingId" })
  findingId?: string;

  @SpeakeasyMetadata({ data: "json, name=infoType" })
  infoType?: GooglePrivacyDlpV2InfoType;

  @SpeakeasyMetadata({ data: "json, name=jobCreateTime" })
  jobCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=jobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=likelihood" })
  likelihood?: GooglePrivacyDlpV2FindingLikelihoodEnum;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: GooglePrivacyDlpV2Location;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=quote" })
  quote?: string;

  @SpeakeasyMetadata({ data: "json, name=quoteInfo" })
  quoteInfo?: GooglePrivacyDlpV2QuoteInfo;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerName" })
  triggerName?: string;
}
