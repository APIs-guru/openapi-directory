import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductViewItemIssueIssueSeverityPerDestination } from "./productviewitemissueissueseverityperdestination";


export enum ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum {
    AggregatedIssueSeverityUnspecified = "AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED",
    Disapproved = "DISAPPROVED",
    Demoted = "DEMOTED",
    Pending = "PENDING"
}


// ProductViewItemIssueItemIssueSeverity
/** 
 * Severity of an issue per destination in a region, and aggregated severity.
**/
export class ProductViewItemIssueItemIssueSeverity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregatedSeverity" })
  aggregatedSeverity?: ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=severityPerDestination", elemType: ProductViewItemIssueIssueSeverityPerDestination })
  severityPerDestination?: ProductViewItemIssueIssueSeverityPerDestination[];
}
