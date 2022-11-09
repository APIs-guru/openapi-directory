import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Metrics
/** 
 * Performance metrics. Values are only set for metrics requested explicitly in the request's search query.
**/
export class Metrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=aos" })
  aos?: number;

  @Metadata({ data: "json, name=aovMicros" })
  aovMicros?: number;

  @Metadata({ data: "json, name=clicks" })
  clicks?: string;

  @Metadata({ data: "json, name=conversionRate" })
  conversionRate?: number;

  @Metadata({ data: "json, name=conversionValueMicros" })
  conversionValueMicros?: string;

  @Metadata({ data: "json, name=conversions" })
  conversions?: number;

  @Metadata({ data: "json, name=ctr" })
  ctr?: number;

  @Metadata({ data: "json, name=daysToShip" })
  daysToShip?: number;

  @Metadata({ data: "json, name=impressions" })
  impressions?: string;

  @Metadata({ data: "json, name=itemDaysToShip" })
  itemDaysToShip?: number;

  @Metadata({ data: "json, name=itemFillRate" })
  itemFillRate?: number;

  @Metadata({ data: "json, name=orderedItemSalesMicros" })
  orderedItemSalesMicros?: string;

  @Metadata({ data: "json, name=orderedItems" })
  orderedItems?: string;

  @Metadata({ data: "json, name=orders" })
  orders?: string;

  @Metadata({ data: "json, name=rejectedItems" })
  rejectedItems?: string;

  @Metadata({ data: "json, name=returnRate" })
  returnRate?: number;

  @Metadata({ data: "json, name=returnedItems" })
  returnedItems?: string;

  @Metadata({ data: "json, name=returnsMicros" })
  returnsMicros?: string;

  @Metadata({ data: "json, name=shippedItemSalesMicros" })
  shippedItemSalesMicros?: string;

  @Metadata({ data: "json, name=shippedItems" })
  shippedItems?: string;

  @Metadata({ data: "json, name=shippedOrders" })
  shippedOrders?: string;

  @Metadata({ data: "json, name=unshippedItems" })
  unshippedItems?: number;

  @Metadata({ data: "json, name=unshippedOrders" })
  unshippedOrders?: number;
}
