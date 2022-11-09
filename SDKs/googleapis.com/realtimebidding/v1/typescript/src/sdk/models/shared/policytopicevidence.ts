import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=destinationNotCrawlable" })
  destinationNotCrawlable?: DestinationNotCrawlableEvidence;

  @Metadata({ data: "json, name=destinationNotWorking" })
  destinationNotWorking?: DestinationNotWorkingEvidence;

  @Metadata({ data: "json, name=destinationUrl" })
  destinationUrl?: DestinationUrlEvidence;

  @Metadata({ data: "json, name=domainCall" })
  domainCall?: DomainCallEvidence;

  @Metadata({ data: "json, name=downloadSize" })
  downloadSize?: DownloadSizeEvidence;

  @Metadata({ data: "json, name=httpCall" })
  httpCall?: HttpCallEvidence;

  @Metadata({ data: "json, name=httpCookie" })
  httpCookie?: HttpCookieEvidence;
}
