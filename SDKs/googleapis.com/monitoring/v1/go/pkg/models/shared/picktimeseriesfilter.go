package shared




type PickTimeSeriesFilterDirectionEnum string

const (
    PickTimeSeriesFilterDirectionEnumDirectionUnspecified PickTimeSeriesFilterDirectionEnum = "DIRECTION_UNSPECIFIED"
PickTimeSeriesFilterDirectionEnumTop PickTimeSeriesFilterDirectionEnum = "TOP"
PickTimeSeriesFilterDirectionEnumBottom PickTimeSeriesFilterDirectionEnum = "BOTTOM"
)



type PickTimeSeriesFilterRankingMethodEnum string

const (
    PickTimeSeriesFilterRankingMethodEnumMethodUnspecified PickTimeSeriesFilterRankingMethodEnum = "METHOD_UNSPECIFIED"
PickTimeSeriesFilterRankingMethodEnumMethodMean PickTimeSeriesFilterRankingMethodEnum = "METHOD_MEAN"
PickTimeSeriesFilterRankingMethodEnumMethodMax PickTimeSeriesFilterRankingMethodEnum = "METHOD_MAX"
PickTimeSeriesFilterRankingMethodEnumMethodMin PickTimeSeriesFilterRankingMethodEnum = "METHOD_MIN"
PickTimeSeriesFilterRankingMethodEnumMethodSum PickTimeSeriesFilterRankingMethodEnum = "METHOD_SUM"
PickTimeSeriesFilterRankingMethodEnumMethodLatest PickTimeSeriesFilterRankingMethodEnum = "METHOD_LATEST"
)


type PickTimeSeriesFilter struct {
    Direction *PickTimeSeriesFilterDirectionEnum `json:"direction,omitempty"`
    NumTimeSeries *int32 `json:"numTimeSeries,omitempty"`
    RankingMethod *PickTimeSeriesFilterRankingMethodEnum `json:"rankingMethod,omitempty"`
    
}

