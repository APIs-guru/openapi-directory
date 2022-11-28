import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductViewItemIssueItemIssueType } from "./productviewitemissueitemissuetype";
import { ProductViewItemIssueItemIssueSeverity } from "./productviewitemissueitemissueseverity";


export enum ProductViewItemIssueResolutionEnum {
    Unknown = "UNKNOWN",
    MerchantAction = "MERCHANT_ACTION",
    PendingProcessing = "PENDING_PROCESSING"
}


// ProductViewItemIssue
/** 
 * Item issue associated with the product.
**/
export class ProductViewItemIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issueType" })
  issueType?: ProductViewItemIssueItemIssueType;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: ProductViewItemIssueResolutionEnum;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: ProductViewItemIssueItemIssueSeverity;
}
