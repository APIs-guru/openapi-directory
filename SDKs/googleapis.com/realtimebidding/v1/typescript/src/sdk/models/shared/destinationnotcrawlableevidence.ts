import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DestinationNotCrawlableEvidenceReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED",
    UnreachableRobots = "UNREACHABLE_ROBOTS",
    TimeoutRobots = "TIMEOUT_ROBOTS",
    RobotedDenied = "ROBOTED_DENIED",
    Unknown = "UNKNOWN"
}


// DestinationNotCrawlableEvidence
/** 
 * Evidence that the creative's destination URL was not crawlable by Google.
**/
export class DestinationNotCrawlableEvidence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=crawlTime" })
  crawlTime?: string;

  @SpeakeasyMetadata({ data: "json, name=crawledUrl" })
  crawledUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: DestinationNotCrawlableEvidenceReasonEnum;
}
