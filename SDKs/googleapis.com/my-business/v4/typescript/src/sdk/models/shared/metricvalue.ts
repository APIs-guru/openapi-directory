import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionalMetricValue } from "./dimensionalmetricvalue";
import { DimensionalMetricValue } from "./dimensionalmetricvalue";

export enum MetricValueMetricEnum {
    MetricUnspecified = "METRIC_UNSPECIFIED"
,    All = "ALL"
,    QueriesDirect = "QUERIES_DIRECT"
,    QueriesIndirect = "QUERIES_INDIRECT"
,    QueriesChain = "QUERIES_CHAIN"
,    ViewsMaps = "VIEWS_MAPS"
,    ViewsSearch = "VIEWS_SEARCH"
,    ActionsWebsite = "ACTIONS_WEBSITE"
,    ActionsPhone = "ACTIONS_PHONE"
,    ActionsDrivingDirections = "ACTIONS_DRIVING_DIRECTIONS"
,    PhotosViewsMerchant = "PHOTOS_VIEWS_MERCHANT"
,    PhotosViewsCustomers = "PHOTOS_VIEWS_CUSTOMERS"
,    PhotosCountMerchant = "PHOTOS_COUNT_MERCHANT"
,    PhotosCountCustomers = "PHOTOS_COUNT_CUSTOMERS"
,    LocalPostViewsSearch = "LOCAL_POST_VIEWS_SEARCH"
,    LocalPostActionsCallToAction = "LOCAL_POST_ACTIONS_CALL_TO_ACTION"
}


// MetricValue
/** 
 * A value for a single Metric from a starting time.
**/
export class MetricValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionalValues", elemType: shared.DimensionalMetricValue })
  dimensionalValues?: DimensionalMetricValue[];

  @Metadata({ data: "json, name=metric" })
  metric?: MetricValueMetricEnum;

  @Metadata({ data: "json, name=totalValue" })
  totalValue?: DimensionalMetricValue;
}
