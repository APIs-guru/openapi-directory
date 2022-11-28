import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MetricRequestMetricEnum {
    MetricUnspecified = "METRIC_UNSPECIFIED",
    All = "ALL",
    QueriesDirect = "QUERIES_DIRECT",
    QueriesIndirect = "QUERIES_INDIRECT",
    QueriesChain = "QUERIES_CHAIN",
    ViewsMaps = "VIEWS_MAPS",
    ViewsSearch = "VIEWS_SEARCH",
    ActionsWebsite = "ACTIONS_WEBSITE",
    ActionsPhone = "ACTIONS_PHONE",
    ActionsDrivingDirections = "ACTIONS_DRIVING_DIRECTIONS",
    PhotosViewsMerchant = "PHOTOS_VIEWS_MERCHANT",
    PhotosViewsCustomers = "PHOTOS_VIEWS_CUSTOMERS",
    PhotosCountMerchant = "PHOTOS_COUNT_MERCHANT",
    PhotosCountCustomers = "PHOTOS_COUNT_CUSTOMERS",
    LocalPostViewsSearch = "LOCAL_POST_VIEWS_SEARCH",
    LocalPostActionsCallToAction = "LOCAL_POST_ACTIONS_CALL_TO_ACTION"
}
export declare enum MetricRequestOptionsEnum {
    MetricOptionUnspecified = "METRIC_OPTION_UNSPECIFIED",
    AggregatedTotal = "AGGREGATED_TOTAL",
    AggregatedDaily = "AGGREGATED_DAILY",
    BreakdownDayOfWeek = "BREAKDOWN_DAY_OF_WEEK",
    BreakdownHourOfDay = "BREAKDOWN_HOUR_OF_DAY"
}
/**
 * A request to return values for one metric and the options for how those values should be returned.
**/
export declare class MetricRequest extends SpeakeasyBase {
    metric?: MetricRequestMetricEnum;
    options?: MetricRequestOptionsEnum[];
}
