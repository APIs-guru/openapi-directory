import { SpeakeasyBase } from "../../../internal/utils";
import { ProductStatusDataQualityIssue } from "./productstatusdataqualityissue";
import { ProductStatusDestinationStatus } from "./productstatusdestinationstatus";
import { ProductStatusItemLevelIssue } from "./productstatusitemlevelissue";
import { Product } from "./product";
/**
 * The status of a product, i.e., information about a product computed asynchronously.
**/
export declare class ProductStatus extends SpeakeasyBase {
    creationDate?: string;
    dataQualityIssues?: ProductStatusDataQualityIssue[];
    destinationStatuses?: ProductStatusDestinationStatus[];
    googleExpirationDate?: string;
    itemLevelIssues?: ProductStatusItemLevelIssue[];
    kind?: string;
    lastUpdateDate?: string;
    link?: string;
    product?: Product;
    productId?: string;
    title?: string;
}
