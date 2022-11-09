import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BestSold } from "./bestsold";
import { DailyVisits } from "./dailyvisits";
import { NewVsReturning } from "./newvsreturning";
import { NewVsReturning } from "./newvsreturning";
import { OrdersData } from "./ordersdata";
import { PaymentMethodFreq } from "./paymentmethodfreq";
import { Referrer } from "./referrer";
import { CountryOrders } from "./countryorders";
import { ShippingMethodFreq } from "./shippingmethodfreq";
import { TrafficType } from "./traffictype";


export class StoreStatsConversions extends SpeakeasyBase {
  @Metadata({ data: "json, name=added_to_cart" })
  addedToCart?: number;

  @Metadata({ data: "json, name=checkout" })
  checkout?: number;

  @Metadata({ data: "json, name=paid" })
  paid?: number;
}


export class StoreStatsNewVsReturningCustomers extends SpeakeasyBase {
  @Metadata({ data: "json, name=global" })
  global?: number;

  @Metadata({ data: "json, name=per_day", elemType: shared.NewVsReturning })
  perDay?: NewVsReturning[];
}


export class StoreStatsNewVsReturningOrders extends SpeakeasyBase {
  @Metadata({ data: "json, name=global" })
  global?: number;

  @Metadata({ data: "json, name=per_day", elemType: shared.NewVsReturning })
  perDay?: NewVsReturning[];
}


export class StoreStatsOrders extends SpeakeasyBase {
  @Metadata({ data: "json, name=average" })
  average?: number;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=data", elemType: shared.OrdersData })
  data?: OrdersData[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class StoreStatsRegionOrders extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_mode" })
  displayMode?: string;

  @Metadata({ data: "json, name=regions_orders", elemType: shared.CountryOrders })
  regionsOrders?: CountryOrders[];
}


export class StoreStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=best_sold", elemType: shared.BestSold })
  bestSold?: BestSold[];

  @Metadata({ data: "json, name=conversions" })
  conversions?: StoreStatsConversions;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=daily_visits", elemType: shared.DailyVisits })
  dailyVisits?: DailyVisits[];

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=new_vs_returning_customers" })
  newVsReturningCustomers?: StoreStatsNewVsReturningCustomers;

  @Metadata({ data: "json, name=new_vs_returning_orders" })
  newVsReturningOrders?: StoreStatsNewVsReturningOrders;

  @Metadata({ data: "json, name=orders" })
  orders?: StoreStatsOrders;

  @Metadata({ data: "json, name=payment_methods", elemType: shared.PaymentMethodFreq })
  paymentMethods?: PaymentMethodFreq[];

  @Metadata({ data: "json, name=referrers", elemType: shared.Referrer })
  referrers?: Referrer[];

  @Metadata({ data: "json, name=region_orders" })
  regionOrders?: StoreStatsRegionOrders;

  @Metadata({ data: "json, name=search_frequencies_all" })
  searchFrequenciesAll?: any[];

  @Metadata({ data: "json, name=search_frequencies_without_results" })
  searchFrequenciesWithoutResults?: any[];

  @Metadata({ data: "json, name=shipping_methods", elemType: shared.ShippingMethodFreq })
  shippingMethods?: ShippingMethodFreq[];

  @Metadata({ data: "json, name=to" })
  to?: string;

  @Metadata({ data: "json, name=traffic_type", elemType: shared.TrafficType })
  trafficType?: TrafficType[];

  @Metadata({ data: "json, name=visits" })
  visits?: number;
}
