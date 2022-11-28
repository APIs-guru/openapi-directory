import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsTimeSeriesListPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum {
    ReduceNone = "REDUCE_NONE",
    ReduceMean = "REDUCE_MEAN",
    ReduceMin = "REDUCE_MIN",
    ReduceMax = "REDUCE_MAX",
    ReduceSum = "REDUCE_SUM",
    ReduceStddev = "REDUCE_STDDEV",
    ReduceCount = "REDUCE_COUNT",
    ReduceCountTrue = "REDUCE_COUNT_TRUE",
    ReduceCountFalse = "REDUCE_COUNT_FALSE",
    ReduceFractionTrue = "REDUCE_FRACTION_TRUE",
    ReducePercentile99 = "REDUCE_PERCENTILE_99",
    ReducePercentile95 = "REDUCE_PERCENTILE_95",
    ReducePercentile50 = "REDUCE_PERCENTILE_50",
    ReducePercentile05 = "REDUCE_PERCENTILE_05"
}
export declare enum MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum {
    AlignNone = "ALIGN_NONE",
    AlignDelta = "ALIGN_DELTA",
    AlignRate = "ALIGN_RATE",
    AlignInterpolate = "ALIGN_INTERPOLATE",
    AlignNextOlder = "ALIGN_NEXT_OLDER",
    AlignMin = "ALIGN_MIN",
    AlignMax = "ALIGN_MAX",
    AlignMean = "ALIGN_MEAN",
    AlignCount = "ALIGN_COUNT",
    AlignSum = "ALIGN_SUM",
    AlignStddev = "ALIGN_STDDEV",
    AlignCountTrue = "ALIGN_COUNT_TRUE",
    AlignCountFalse = "ALIGN_COUNT_FALSE",
    AlignFractionTrue = "ALIGN_FRACTION_TRUE",
    AlignPercentile99 = "ALIGN_PERCENTILE_99",
    AlignPercentile95 = "ALIGN_PERCENTILE_95",
    AlignPercentile50 = "ALIGN_PERCENTILE_50",
    AlignPercentile05 = "ALIGN_PERCENTILE_05",
    AlignPercentChange = "ALIGN_PERCENT_CHANGE"
}
export declare enum MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum {
    ReduceNone = "REDUCE_NONE",
    ReduceMean = "REDUCE_MEAN",
    ReduceMin = "REDUCE_MIN",
    ReduceMax = "REDUCE_MAX",
    ReduceSum = "REDUCE_SUM",
    ReduceStddev = "REDUCE_STDDEV",
    ReduceCount = "REDUCE_COUNT",
    ReduceCountTrue = "REDUCE_COUNT_TRUE",
    ReduceCountFalse = "REDUCE_COUNT_FALSE",
    ReduceFractionTrue = "REDUCE_FRACTION_TRUE",
    ReducePercentile99 = "REDUCE_PERCENTILE_99",
    ReducePercentile95 = "REDUCE_PERCENTILE_95",
    ReducePercentile50 = "REDUCE_PERCENTILE_50",
    ReducePercentile05 = "REDUCE_PERCENTILE_05"
}
export declare enum MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum {
    AlignNone = "ALIGN_NONE",
    AlignDelta = "ALIGN_DELTA",
    AlignRate = "ALIGN_RATE",
    AlignInterpolate = "ALIGN_INTERPOLATE",
    AlignNextOlder = "ALIGN_NEXT_OLDER",
    AlignMin = "ALIGN_MIN",
    AlignMax = "ALIGN_MAX",
    AlignMean = "ALIGN_MEAN",
    AlignCount = "ALIGN_COUNT",
    AlignSum = "ALIGN_SUM",
    AlignStddev = "ALIGN_STDDEV",
    AlignCountTrue = "ALIGN_COUNT_TRUE",
    AlignCountFalse = "ALIGN_COUNT_FALSE",
    AlignFractionTrue = "ALIGN_FRACTION_TRUE",
    AlignPercentile99 = "ALIGN_PERCENTILE_99",
    AlignPercentile95 = "ALIGN_PERCENTILE_95",
    AlignPercentile50 = "ALIGN_PERCENTILE_50",
    AlignPercentile05 = "ALIGN_PERCENTILE_05",
    AlignPercentChange = "ALIGN_PERCENT_CHANGE"
}
export declare enum MonitoringProjectsTimeSeriesListViewEnum {
    Full = "FULL",
    Headers = "HEADERS"
}
export declare class MonitoringProjectsTimeSeriesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    aggregationAlignmentPeriod?: string;
    aggregationCrossSeriesReducer?: MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum;
    aggregationGroupByFields?: string[];
    aggregationPerSeriesAligner?: MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    intervalEndTime?: string;
    intervalStartTime?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    secondaryAggregationAlignmentPeriod?: string;
    secondaryAggregationCrossSeriesReducer?: MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum;
    secondaryAggregationGroupByFields?: string[];
    secondaryAggregationPerSeriesAligner?: MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum;
    uploadType?: string;
    uploadProtocol?: string;
    view?: MonitoringProjectsTimeSeriesListViewEnum;
}
export declare class MonitoringProjectsTimeSeriesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsTimeSeriesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsTimeSeriesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsTimeSeriesListSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsTimeSeriesListSecurityOption1;
    option2?: MonitoringProjectsTimeSeriesListSecurityOption2;
    option3?: MonitoringProjectsTimeSeriesListSecurityOption3;
}
export declare class MonitoringProjectsTimeSeriesListRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsTimeSeriesListPathParams;
    queryParams: MonitoringProjectsTimeSeriesListQueryParams;
    security: MonitoringProjectsTimeSeriesListSecurity;
}
export declare class MonitoringProjectsTimeSeriesListResponse extends SpeakeasyBase {
    contentType: string;
    listTimeSeriesResponse?: shared.ListTimeSeriesResponse;
    statusCode: number;
}
