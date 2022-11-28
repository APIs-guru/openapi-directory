import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Metrics
/** 
 * Performance metrics. Values are only set for metrics requested explicitly in the request's search query.
**/
export class Metrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aos" })
  aos?: number;

  @SpeakeasyMetadata({ data: "json, name=aovMicros" })
  aovMicros?: number;

  @SpeakeasyMetadata({ data: "json, name=clicks" })
  clicks?: string;

  @SpeakeasyMetadata({ data: "json, name=conversionRate" })
  conversionRate?: number;

  @SpeakeasyMetadata({ data: "json, name=conversionValueMicros" })
  conversionValueMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=conversions" })
  conversions?: number;

  @SpeakeasyMetadata({ data: "json, name=ctr" })
  ctr?: number;

  @SpeakeasyMetadata({ data: "json, name=daysToShip" })
  daysToShip?: number;

  @SpeakeasyMetadata({ data: "json, name=impressions" })
  impressions?: string;

  @SpeakeasyMetadata({ data: "json, name=itemDaysToShip" })
  itemDaysToShip?: number;

  @SpeakeasyMetadata({ data: "json, name=itemFillRate" })
  itemFillRate?: number;

  @SpeakeasyMetadata({ data: "json, name=orderedItemSalesMicros" })
  orderedItemSalesMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=orderedItems" })
  orderedItems?: string;

  @SpeakeasyMetadata({ data: "json, name=orders" })
  orders?: string;

  @SpeakeasyMetadata({ data: "json, name=rejectedItems" })
  rejectedItems?: string;

  @SpeakeasyMetadata({ data: "json, name=returnRate" })
  returnRate?: number;

  @SpeakeasyMetadata({ data: "json, name=returnedItems" })
  returnedItems?: string;

  @SpeakeasyMetadata({ data: "json, name=returnsMicros" })
  returnsMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=shippedItemSalesMicros" })
  shippedItemSalesMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=shippedItems" })
  shippedItems?: string;

  @SpeakeasyMetadata({ data: "json, name=shippedOrders" })
  shippedOrders?: string;

  @SpeakeasyMetadata({ data: "json, name=unshippedItems" })
  unshippedItems?: number;

  @SpeakeasyMetadata({ data: "json, name=unshippedOrders" })
  unshippedOrders?: number;
}
