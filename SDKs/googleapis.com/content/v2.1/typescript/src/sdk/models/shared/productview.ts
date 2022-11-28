import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { ProductViewItemIssue } from "./productviewitemissue";


export enum ProductViewAggregatedDestinationStatusEnum {
    AggregatedStatusUnspecified = "AGGREGATED_STATUS_UNSPECIFIED",
    NotEligibleOrDisapproved = "NOT_ELIGIBLE_OR_DISAPPROVED",
    Pending = "PENDING",
    EligibleLimited = "ELIGIBLE_LIMITED",
    Eligible = "ELIGIBLE"
}

export enum ProductViewChannelEnum {
    ChannelUnspecified = "CHANNEL_UNSPECIFIED",
    Local = "LOCAL",
    Online = "ONLINE"
}


// ProductView
/** 
 * Product fields. Values are only set for fields requested explicitly in the request's search query. Available only to selected merchants. Submit the [interest form](https://forms.gle/7Uy8htzAN8oNokz9A) to request access.
**/
export class ProductView extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregatedDestinationStatus" })
  aggregatedDestinationStatus?: ProductViewAggregatedDestinationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: string;

  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: ProductViewChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=gtin" })
  gtin?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=itemGroupId" })
  itemGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=itemIssues", elemType: ProductViewItemIssue })
  itemIssues?: ProductViewItemIssue[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId?: string;

  @SpeakeasyMetadata({ data: "json, name=priceMicros" })
  priceMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingLabel" })
  shippingLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
