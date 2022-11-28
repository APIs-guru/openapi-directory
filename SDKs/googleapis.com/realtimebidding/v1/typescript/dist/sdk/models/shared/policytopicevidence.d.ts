import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationNotCrawlableEvidence } from "./destinationnotcrawlableevidence";
import { DestinationNotWorkingEvidence } from "./destinationnotworkingevidence";
import { DestinationUrlEvidence } from "./destinationurlevidence";
import { DomainCallEvidence } from "./domaincallevidence";
import { DownloadSizeEvidence } from "./downloadsizeevidence";
import { HttpCallEvidence } from "./httpcallevidence";
import { HttpCookieEvidence } from "./httpcookieevidence";
/**
 * Evidence associated with a policy topic entry.
**/
export declare class PolicyTopicEvidence extends SpeakeasyBase {
    destinationNotCrawlable?: DestinationNotCrawlableEvidence;
    destinationNotWorking?: DestinationNotWorkingEvidence;
    destinationUrl?: DestinationUrlEvidence;
    domainCall?: DomainCallEvidence;
    downloadSize?: DownloadSizeEvidence;
    httpCall?: HttpCallEvidence;
    httpCookie?: HttpCookieEvidence;
}
