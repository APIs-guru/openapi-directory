import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductViewItemIssueItemIssueType } from "./productviewitemissueitemissuetype";
import { ProductViewItemIssueItemIssueSeverity } from "./productviewitemissueitemissueseverity";

export enum ProductViewItemIssueResolutionEnum {
    Unknown = "UNKNOWN"
,    MerchantAction = "MERCHANT_ACTION"
,    PendingProcessing = "PENDING_PROCESSING"
}


// ProductViewItemIssue
/** 
 * Item issue associated with the product.
**/
export class ProductViewItemIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=issueType" })
  issueType?: ProductViewItemIssueItemIssueType;

  @Metadata({ data: "json, name=resolution" })
  resolution?: ProductViewItemIssueResolutionEnum;

  @Metadata({ data: "json, name=severity" })
  severity?: ProductViewItemIssueItemIssueSeverity;
}
