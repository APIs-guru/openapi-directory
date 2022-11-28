import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationNotCrawlableEvidence } from "./destinationnotcrawlableevidence";
import { DestinationNotWorkingEvidence } from "./destinationnotworkingevidence";
import { DestinationUrlEvidence } from "./destinationurlevidence";
import { DomainCallEvidence } from "./domaincallevidence";
import { DownloadSizeEvidence } from "./downloadsizeevidence";
import { HttpCallEvidence } from "./httpcallevidence";
import { HttpCookieEvidence } from "./httpcookieevidence";



// PolicyTopicEvidence
/** 
 * Evidence associated with a policy topic entry.
**/
export class PolicyTopicEvidence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationNotCrawlable" })
  destinationNotCrawlable?: DestinationNotCrawlableEvidence;

  @SpeakeasyMetadata({ data: "json, name=destinationNotWorking" })
  destinationNotWorking?: DestinationNotWorkingEvidence;

  @SpeakeasyMetadata({ data: "json, name=destinationUrl" })
  destinationUrl?: DestinationUrlEvidence;

  @SpeakeasyMetadata({ data: "json, name=domainCall" })
  domainCall?: DomainCallEvidence;

  @SpeakeasyMetadata({ data: "json, name=downloadSize" })
  downloadSize?: DownloadSizeEvidence;

  @SpeakeasyMetadata({ data: "json, name=httpCall" })
  httpCall?: HttpCallEvidence;

  @SpeakeasyMetadata({ data: "json, name=httpCookie" })
  httpCookie?: HttpCookieEvidence;
}
