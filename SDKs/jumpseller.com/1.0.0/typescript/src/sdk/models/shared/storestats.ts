import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BestSold } from "./bestsold";
import { DailyVisits } from "./dailyvisits";
import { NewVsReturning } from "./newvsreturning";
import { OrdersData } from "./ordersdata";
import { PaymentMethodFreq } from "./paymentmethodfreq";
import { Referrer } from "./referrer";
import { CountryOrders } from "./countryorders";
import { ShippingMethodFreq } from "./shippingmethodfreq";
import { TrafficType } from "./traffictype";



export class StoreStatsConversions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added_to_cart" })
  addedToCart?: number;

  @SpeakeasyMetadata({ data: "json, name=checkout" })
  checkout?: number;

  @SpeakeasyMetadata({ data: "json, name=paid" })
  paid?: number;
}


export class StoreStatsNewVsReturningCustomers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=global" })
  global?: number;

  @SpeakeasyMetadata({ data: "json, name=per_day", elemType: NewVsReturning })
  perDay?: NewVsReturning[];
}


export class StoreStatsNewVsReturningOrders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=global" })
  global?: number;

  @SpeakeasyMetadata({ data: "json, name=per_day", elemType: NewVsReturning })
  perDay?: NewVsReturning[];
}


export class StoreStatsOrders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average" })
  average?: number;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: OrdersData })
  data?: OrdersData[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class StoreStatsRegionOrders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_mode" })
  displayMode?: string;

  @SpeakeasyMetadata({ data: "json, name=regions_orders", elemType: CountryOrders })
  regionsOrders?: CountryOrders[];
}


export class StoreStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=best_sold", elemType: BestSold })
  bestSold?: BestSold[];

  @SpeakeasyMetadata({ data: "json, name=conversions" })
  conversions?: StoreStatsConversions;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=daily_visits", elemType: DailyVisits })
  dailyVisits?: DailyVisits[];

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=new_vs_returning_customers" })
  newVsReturningCustomers?: StoreStatsNewVsReturningCustomers;

  @SpeakeasyMetadata({ data: "json, name=new_vs_returning_orders" })
  newVsReturningOrders?: StoreStatsNewVsReturningOrders;

  @SpeakeasyMetadata({ data: "json, name=orders" })
  orders?: StoreStatsOrders;

  @SpeakeasyMetadata({ data: "json, name=payment_methods", elemType: PaymentMethodFreq })
  paymentMethods?: PaymentMethodFreq[];

  @SpeakeasyMetadata({ data: "json, name=referrers", elemType: Referrer })
  referrers?: Referrer[];

  @SpeakeasyMetadata({ data: "json, name=region_orders" })
  regionOrders?: StoreStatsRegionOrders;

  @SpeakeasyMetadata({ data: "json, name=search_frequencies_all" })
  searchFrequenciesAll?: any[];

  @SpeakeasyMetadata({ data: "json, name=search_frequencies_without_results" })
  searchFrequenciesWithoutResults?: any[];

  @SpeakeasyMetadata({ data: "json, name=shipping_methods", elemType: ShippingMethodFreq })
  shippingMethods?: ShippingMethodFreq[];

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=traffic_type", elemType: TrafficType })
  trafficType?: TrafficType[];

  @SpeakeasyMetadata({ data: "json, name=visits" })
  visits?: number;
}
