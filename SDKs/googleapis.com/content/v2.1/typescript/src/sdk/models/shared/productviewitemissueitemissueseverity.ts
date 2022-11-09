import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductViewItemIssueIssueSeverityPerDestination } from "./productviewitemissueissueseverityperdestination";

export enum ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum {
    AggregatedIssueSeverityUnspecified = "AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED"
,    Disapproved = "DISAPPROVED"
,    Demoted = "DEMOTED"
,    Pending = "PENDING"
}


// ProductViewItemIssueItemIssueSeverity
/** 
 * Severity of an issue per destination in a region, and aggregated severity.
**/
export class ProductViewItemIssueItemIssueSeverity extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregatedSeverity" })
  aggregatedSeverity?: ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum;

  @Metadata({ data: "json, name=severityPerDestination", elemType: shared.ProductViewItemIssueIssueSeverityPerDestination })
  severityPerDestination?: ProductViewItemIssueIssueSeverityPerDestination[];
}
