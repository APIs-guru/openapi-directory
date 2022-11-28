import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionalMetricValue } from "./dimensionalmetricvalue";
export declare enum MetricValueMetricEnum {
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
/**
 * A value for a single Metric from a starting time.
**/
export declare class MetricValue extends SpeakeasyBase {
    dimensionalValues?: DimensionalMetricValue[];
    metric?: MetricValueMetricEnum;
    totalValue?: DimensionalMetricValue;
}
