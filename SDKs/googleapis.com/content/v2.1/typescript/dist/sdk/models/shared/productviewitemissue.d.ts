import { SpeakeasyBase } from "../../../internal/utils";
import { ProductViewItemIssueItemIssueType } from "./productviewitemissueitemissuetype";
import { ProductViewItemIssueItemIssueSeverity } from "./productviewitemissueitemissueseverity";
export declare enum ProductViewItemIssueResolutionEnum {
    Unknown = "UNKNOWN",
    MerchantAction = "MERCHANT_ACTION",
    PendingProcessing = "PENDING_PROCESSING"
}
/**
 * Item issue associated with the product.
**/
export declare class ProductViewItemIssue extends SpeakeasyBase {
    issueType?: ProductViewItemIssueItemIssueType;
    resolution?: ProductViewItemIssueResolutionEnum;
    severity?: ProductViewItemIssueItemIssueSeverity;
}
