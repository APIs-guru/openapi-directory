import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MonitoringProjectsTimeSeriesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum {
    ReduceNone = "REDUCE_NONE"
,    ReduceMean = "REDUCE_MEAN"
,    ReduceMin = "REDUCE_MIN"
,    ReduceMax = "REDUCE_MAX"
,    ReduceSum = "REDUCE_SUM"
,    ReduceStddev = "REDUCE_STDDEV"
,    ReduceCount = "REDUCE_COUNT"
,    ReduceCountTrue = "REDUCE_COUNT_TRUE"
,    ReduceCountFalse = "REDUCE_COUNT_FALSE"
,    ReduceFractionTrue = "REDUCE_FRACTION_TRUE"
,    ReducePercentile99 = "REDUCE_PERCENTILE_99"
,    ReducePercentile95 = "REDUCE_PERCENTILE_95"
,    ReducePercentile50 = "REDUCE_PERCENTILE_50"
,    ReducePercentile05 = "REDUCE_PERCENTILE_05"
}

export enum MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum {
    AlignNone = "ALIGN_NONE"
,    AlignDelta = "ALIGN_DELTA"
,    AlignRate = "ALIGN_RATE"
,    AlignInterpolate = "ALIGN_INTERPOLATE"
,    AlignNextOlder = "ALIGN_NEXT_OLDER"
,    AlignMin = "ALIGN_MIN"
,    AlignMax = "ALIGN_MAX"
,    AlignMean = "ALIGN_MEAN"
,    AlignCount = "ALIGN_COUNT"
,    AlignSum = "ALIGN_SUM"
,    AlignStddev = "ALIGN_STDDEV"
,    AlignCountTrue = "ALIGN_COUNT_TRUE"
,    AlignCountFalse = "ALIGN_COUNT_FALSE"
,    AlignFractionTrue = "ALIGN_FRACTION_TRUE"
,    AlignPercentile99 = "ALIGN_PERCENTILE_99"
,    AlignPercentile95 = "ALIGN_PERCENTILE_95"
,    AlignPercentile50 = "ALIGN_PERCENTILE_50"
,    AlignPercentile05 = "ALIGN_PERCENTILE_05"
,    AlignPercentChange = "ALIGN_PERCENT_CHANGE"
}

export enum MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum {
    ReduceNone = "REDUCE_NONE"
,    ReduceMean = "REDUCE_MEAN"
,    ReduceMin = "REDUCE_MIN"
,    ReduceMax = "REDUCE_MAX"
,    ReduceSum = "REDUCE_SUM"
,    ReduceStddev = "REDUCE_STDDEV"
,    ReduceCount = "REDUCE_COUNT"
,    ReduceCountTrue = "REDUCE_COUNT_TRUE"
,    ReduceCountFalse = "REDUCE_COUNT_FALSE"
,    ReduceFractionTrue = "REDUCE_FRACTION_TRUE"
,    ReducePercentile99 = "REDUCE_PERCENTILE_99"
,    ReducePercentile95 = "REDUCE_PERCENTILE_95"
,    ReducePercentile50 = "REDUCE_PERCENTILE_50"
,    ReducePercentile05 = "REDUCE_PERCENTILE_05"
}

export enum MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum {
    AlignNone = "ALIGN_NONE"
,    AlignDelta = "ALIGN_DELTA"
,    AlignRate = "ALIGN_RATE"
,    AlignInterpolate = "ALIGN_INTERPOLATE"
,    AlignNextOlder = "ALIGN_NEXT_OLDER"
,    AlignMin = "ALIGN_MIN"
,    AlignMax = "ALIGN_MAX"
,    AlignMean = "ALIGN_MEAN"
,    AlignCount = "ALIGN_COUNT"
,    AlignSum = "ALIGN_SUM"
,    AlignStddev = "ALIGN_STDDEV"
,    AlignCountTrue = "ALIGN_COUNT_TRUE"
,    AlignCountFalse = "ALIGN_COUNT_FALSE"
,    AlignFractionTrue = "ALIGN_FRACTION_TRUE"
,    AlignPercentile99 = "ALIGN_PERCENTILE_99"
,    AlignPercentile95 = "ALIGN_PERCENTILE_95"
,    AlignPercentile50 = "ALIGN_PERCENTILE_50"
,    AlignPercentile05 = "ALIGN_PERCENTILE_05"
,    AlignPercentChange = "ALIGN_PERCENT_CHANGE"
}

export enum MonitoringProjectsTimeSeriesListViewEnum {
    Full = "FULL"
,    Headers = "HEADERS"
}


export class MonitoringProjectsTimeSeriesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=aggregation.alignmentPeriod" })
  aggregationAlignmentPeriod?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=aggregation.crossSeriesReducer" })
  aggregationCrossSeriesReducer?: MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=aggregation.groupByFields" })
  aggregationGroupByFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=aggregation.perSeriesAligner" })
  aggregationPerSeriesAligner?: MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.endTime" })
  intervalEndTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.startTime" })
  intervalStartTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=secondaryAggregation.alignmentPeriod" })
  secondaryAggregationAlignmentPeriod?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=secondaryAggregation.crossSeriesReducer" })
  secondaryAggregationCrossSeriesReducer?: MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=secondaryAggregation.groupByFields" })
  secondaryAggregationGroupByFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=secondaryAggregation.perSeriesAligner" })
  secondaryAggregationPerSeriesAligner?: MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: MonitoringProjectsTimeSeriesListViewEnum;
}


export class MonitoringProjectsTimeSeriesListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsTimeSeriesListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsTimeSeriesListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsTimeSeriesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: MonitoringProjectsTimeSeriesListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: MonitoringProjectsTimeSeriesListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: MonitoringProjectsTimeSeriesListSecurityOption3;
}


export class MonitoringProjectsTimeSeriesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MonitoringProjectsTimeSeriesListPathParams;

  @Metadata()
  queryParams: MonitoringProjectsTimeSeriesListQueryParams;

  @Metadata()
  security: MonitoringProjectsTimeSeriesListSecurity;
}


export class MonitoringProjectsTimeSeriesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTimeSeriesResponse?: shared.ListTimeSeriesResponse;

  @Metadata()
  statusCode: number;
}
