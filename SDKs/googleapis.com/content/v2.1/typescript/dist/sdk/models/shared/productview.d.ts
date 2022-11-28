import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { ProductViewItemIssue } from "./productviewitemissue";
export declare enum ProductViewAggregatedDestinationStatusEnum {
    AggregatedStatusUnspecified = "AGGREGATED_STATUS_UNSPECIFIED",
    NotEligibleOrDisapproved = "NOT_ELIGIBLE_OR_DISAPPROVED",
    Pending = "PENDING",
    EligibleLimited = "ELIGIBLE_LIMITED",
    Eligible = "ELIGIBLE"
}
export declare enum ProductViewChannelEnum {
    ChannelUnspecified = "CHANNEL_UNSPECIFIED",
    Local = "LOCAL",
    Online = "ONLINE"
}
/**
 * Product fields. Values are only set for fields requested explicitly in the request's search query. Available only to selected merchants. Submit the [interest form](https://forms.gle/7Uy8htzAN8oNokz9A) to request access.
**/
export declare class ProductView extends SpeakeasyBase {
    aggregatedDestinationStatus?: ProductViewAggregatedDestinationStatusEnum;
    availability?: string;
    brand?: string;
    channel?: ProductViewChannelEnum;
    condition?: string;
    creationTime?: string;
    currencyCode?: string;
    expirationDate?: Date;
    gtin?: string[];
    id?: string;
    itemGroupId?: string;
    itemIssues?: ProductViewItemIssue[];
    languageCode?: string;
    offerId?: string;
    priceMicros?: string;
    shippingLabel?: string;
    title?: string;
}
