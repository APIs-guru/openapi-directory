import { SpeakeasyBase } from "../../../internal/utils";
import { ProductStatusDestinationStatus } from "./productstatusdestinationstatus";
import { ProductStatusItemLevelIssue } from "./productstatusitemlevelissue";
/**
 * The status of a product, that is, information about a product computed asynchronously.
**/
export declare class ProductStatus extends SpeakeasyBase {
    creationDate?: string;
    destinationStatuses?: ProductStatusDestinationStatus[];
    googleExpirationDate?: string;
    itemLevelIssues?: ProductStatusItemLevelIssue[];
    kind?: string;
    lastUpdateDate?: string;
    link?: string;
    productId?: string;
    title?: string;
}
