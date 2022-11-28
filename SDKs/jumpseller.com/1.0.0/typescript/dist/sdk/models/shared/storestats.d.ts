import { SpeakeasyBase } from "../../../internal/utils";
import { BestSold } from "./bestsold";
import { DailyVisits } from "./dailyvisits";
import { NewVsReturning } from "./newvsreturning";
import { OrdersData } from "./ordersdata";
import { PaymentMethodFreq } from "./paymentmethodfreq";
import { Referrer } from "./referrer";
import { CountryOrders } from "./countryorders";
import { ShippingMethodFreq } from "./shippingmethodfreq";
import { TrafficType } from "./traffictype";
export declare class StoreStatsConversions extends SpeakeasyBase {
    addedToCart?: number;
    checkout?: number;
    paid?: number;
}
export declare class StoreStatsNewVsReturningCustomers extends SpeakeasyBase {
    global?: number;
    perDay?: NewVsReturning[];
}
export declare class StoreStatsNewVsReturningOrders extends SpeakeasyBase {
    global?: number;
    perDay?: NewVsReturning[];
}
export declare class StoreStatsOrders extends SpeakeasyBase {
    average?: number;
    count?: number;
    data?: OrdersData[];
    total?: number;
}
export declare class StoreStatsRegionOrders extends SpeakeasyBase {
    displayMode?: string;
    regionsOrders?: CountryOrders[];
}
export declare class StoreStats extends SpeakeasyBase {
    bestSold?: BestSold[];
    conversions?: StoreStatsConversions;
    currency?: string;
    dailyVisits?: DailyVisits[];
    from?: string;
    newVsReturningCustomers?: StoreStatsNewVsReturningCustomers;
    newVsReturningOrders?: StoreStatsNewVsReturningOrders;
    orders?: StoreStatsOrders;
    paymentMethods?: PaymentMethodFreq[];
    referrers?: Referrer[];
    regionOrders?: StoreStatsRegionOrders;
    searchFrequenciesAll?: any[];
    searchFrequenciesWithoutResults?: any[];
    shippingMethods?: ShippingMethodFreq[];
    to?: string;
    trafficType?: TrafficType[];
    visits?: number;
}
