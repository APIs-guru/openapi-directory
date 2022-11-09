import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Date } from "./date";
import { ProductViewItemIssue } from "./productviewitemissue";

export enum ProductViewAggregatedDestinationStatusEnum {
    AggregatedStatusUnspecified = "AGGREGATED_STATUS_UNSPECIFIED"
,    NotEligibleOrDisapproved = "NOT_ELIGIBLE_OR_DISAPPROVED"
,    Pending = "PENDING"
,    EligibleLimited = "ELIGIBLE_LIMITED"
,    Eligible = "ELIGIBLE"
}

export enum ProductViewChannelEnum {
    ChannelUnspecified = "CHANNEL_UNSPECIFIED"
,    Local = "LOCAL"
,    Online = "ONLINE"
}


// ProductView
/** 
 * Product fields. Values are only set for fields requested explicitly in the request's search query.
**/
export class ProductView extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregatedDestinationStatus" })
  aggregatedDestinationStatus?: ProductViewAggregatedDestinationStatusEnum;

  @Metadata({ data: "json, name=availability" })
  availability?: string;

  @Metadata({ data: "json, name=brand" })
  brand?: string;

  @Metadata({ data: "json, name=channel" })
  channel?: ProductViewChannelEnum;

  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=gtin" })
  gtin?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=itemGroupId" })
  itemGroupId?: string;

  @Metadata({ data: "json, name=itemIssues", elemType: shared.ProductViewItemIssue })
  itemIssues?: ProductViewItemIssue[];

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=offerId" })
  offerId?: string;

  @Metadata({ data: "json, name=priceMicros" })
  priceMicros?: string;

  @Metadata({ data: "json, name=shippingLabel" })
  shippingLabel?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
