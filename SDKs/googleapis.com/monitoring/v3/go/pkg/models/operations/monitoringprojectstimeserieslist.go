package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringProjectsTimeSeriesListPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum string

const (
	MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnumReduceNone         MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum = "REDUCE_NONE"
	MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnumReduceMean         MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum = "REDUCE_MEAN"
	MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnumReduceMin          MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum = "REDUCE_MIN"
	MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnumReduceMax          MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum = "REDUCE_MAX"
	MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnumReduceSum          MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum = "REDUCE_SUM"
	MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnumReduceStddev       MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum = "REDUCE_STDDEV"
	MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnumReduceCount        MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum = "REDUCE_COUNT"
	MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnumReduceCountTrue    MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum = "REDUCE_COUNT_TRUE"
	MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnumReduceCountFalse   MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum = "REDUCE_COUNT_FALSE"
	MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnumReduceFractionTrue MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum = "REDUCE_FRACTION_TRUE"
	MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnumReducePercentile99 MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum = "REDUCE_PERCENTILE_99"
	MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnumReducePercentile95 MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum = "REDUCE_PERCENTILE_95"
	MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnumReducePercentile50 MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum = "REDUCE_PERCENTILE_50"
	MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnumReducePercentile05 MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum = "REDUCE_PERCENTILE_05"
)

type MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum string

const (
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignNone          MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_NONE"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignDelta         MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_DELTA"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignRate          MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_RATE"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignInterpolate   MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_INTERPOLATE"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignNextOlder     MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_NEXT_OLDER"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignMin           MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_MIN"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignMax           MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_MAX"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignMean          MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_MEAN"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignCount         MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_COUNT"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignSum           MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_SUM"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignStddev        MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_STDDEV"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignCountTrue     MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_COUNT_TRUE"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignCountFalse    MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_COUNT_FALSE"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignFractionTrue  MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_FRACTION_TRUE"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignPercentile99  MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_PERCENTILE_99"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignPercentile95  MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_PERCENTILE_95"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignPercentile50  MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_PERCENTILE_50"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignPercentile05  MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_PERCENTILE_05"
	MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignPercentChange MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum = "ALIGN_PERCENT_CHANGE"
)

type MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum string

const (
	MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnumReduceNone         MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum = "REDUCE_NONE"
	MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnumReduceMean         MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum = "REDUCE_MEAN"
	MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnumReduceMin          MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum = "REDUCE_MIN"
	MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnumReduceMax          MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum = "REDUCE_MAX"
	MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnumReduceSum          MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum = "REDUCE_SUM"
	MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnumReduceStddev       MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum = "REDUCE_STDDEV"
	MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnumReduceCount        MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum = "REDUCE_COUNT"
	MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnumReduceCountTrue    MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum = "REDUCE_COUNT_TRUE"
	MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnumReduceCountFalse   MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum = "REDUCE_COUNT_FALSE"
	MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnumReduceFractionTrue MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum = "REDUCE_FRACTION_TRUE"
	MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnumReducePercentile99 MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum = "REDUCE_PERCENTILE_99"
	MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnumReducePercentile95 MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum = "REDUCE_PERCENTILE_95"
	MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnumReducePercentile50 MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum = "REDUCE_PERCENTILE_50"
	MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnumReducePercentile05 MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum = "REDUCE_PERCENTILE_05"
)

type MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum string

const (
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignNone          MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_NONE"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignDelta         MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_DELTA"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignRate          MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_RATE"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignInterpolate   MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_INTERPOLATE"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignNextOlder     MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_NEXT_OLDER"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignMin           MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_MIN"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignMax           MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_MAX"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignMean          MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_MEAN"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignCount         MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_COUNT"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignSum           MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_SUM"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignStddev        MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_STDDEV"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignCountTrue     MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_COUNT_TRUE"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignCountFalse    MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_COUNT_FALSE"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignFractionTrue  MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_FRACTION_TRUE"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignPercentile99  MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_PERCENTILE_99"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignPercentile95  MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_PERCENTILE_95"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignPercentile50  MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_PERCENTILE_50"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignPercentile05  MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_PERCENTILE_05"
	MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignPercentChange MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum = "ALIGN_PERCENT_CHANGE"
)

type MonitoringProjectsTimeSeriesListViewEnum string

const (
	MonitoringProjectsTimeSeriesListViewEnumFull    MonitoringProjectsTimeSeriesListViewEnum = "FULL"
	MonitoringProjectsTimeSeriesListViewEnumHeaders MonitoringProjectsTimeSeriesListViewEnum = "HEADERS"
)

type MonitoringProjectsTimeSeriesListQueryParams struct {
	DollarXgafv                            *shared.XgafvEnum                                                           `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                            *string                                                                     `queryParam:"style=form,explode=true,name=access_token"`
	AggregationAlignmentPeriod             *string                                                                     `queryParam:"style=form,explode=true,name=aggregation.alignmentPeriod"`
	AggregationCrossSeriesReducer          *MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum          `queryParam:"style=form,explode=true,name=aggregation.crossSeriesReducer"`
	AggregationGroupByFields               []string                                                                    `queryParam:"style=form,explode=true,name=aggregation.groupByFields"`
	AggregationPerSeriesAligner            *MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum            `queryParam:"style=form,explode=true,name=aggregation.perSeriesAligner"`
	Alt                                    *shared.AltEnum                                                             `queryParam:"style=form,explode=true,name=alt"`
	Callback                               *string                                                                     `queryParam:"style=form,explode=true,name=callback"`
	Fields                                 *string                                                                     `queryParam:"style=form,explode=true,name=fields"`
	Filter                                 *string                                                                     `queryParam:"style=form,explode=true,name=filter"`
	IntervalEndTime                        *string                                                                     `queryParam:"style=form,explode=true,name=interval.endTime"`
	IntervalStartTime                      *string                                                                     `queryParam:"style=form,explode=true,name=interval.startTime"`
	Key                                    *string                                                                     `queryParam:"style=form,explode=true,name=key"`
	OauthToken                             *string                                                                     `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy                                *string                                                                     `queryParam:"style=form,explode=true,name=orderBy"`
	PageSize                               *int64                                                                      `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken                              *string                                                                     `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint                            *bool                                                                       `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                              *string                                                                     `queryParam:"style=form,explode=true,name=quotaUser"`
	SecondaryAggregationAlignmentPeriod    *string                                                                     `queryParam:"style=form,explode=true,name=secondaryAggregation.alignmentPeriod"`
	SecondaryAggregationCrossSeriesReducer *MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum `queryParam:"style=form,explode=true,name=secondaryAggregation.crossSeriesReducer"`
	SecondaryAggregationGroupByFields      []string                                                                    `queryParam:"style=form,explode=true,name=secondaryAggregation.groupByFields"`
	SecondaryAggregationPerSeriesAligner   *MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum   `queryParam:"style=form,explode=true,name=secondaryAggregation.perSeriesAligner"`
	UploadType                             *string                                                                     `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                         *string                                                                     `queryParam:"style=form,explode=true,name=upload_protocol"`
	View                                   *MonitoringProjectsTimeSeriesListViewEnum                                   `queryParam:"style=form,explode=true,name=view"`
}

type MonitoringProjectsTimeSeriesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsTimeSeriesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsTimeSeriesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsTimeSeriesListSecurity struct {
	Option1 *MonitoringProjectsTimeSeriesListSecurityOption1 `security:"option"`
	Option2 *MonitoringProjectsTimeSeriesListSecurityOption2 `security:"option"`
	Option3 *MonitoringProjectsTimeSeriesListSecurityOption3 `security:"option"`
}

type MonitoringProjectsTimeSeriesListRequest struct {
	PathParams  MonitoringProjectsTimeSeriesListPathParams
	QueryParams MonitoringProjectsTimeSeriesListQueryParams
	Security    MonitoringProjectsTimeSeriesListSecurity
}

type MonitoringProjectsTimeSeriesListResponse struct {
	ContentType            string
	ListTimeSeriesResponse *shared.ListTimeSeriesResponse
	StatusCode             int64
}
