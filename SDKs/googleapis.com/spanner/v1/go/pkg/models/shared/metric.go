package shared




type MetricAggregationEnum string

const (
    MetricAggregationEnumAggregationUnspecified MetricAggregationEnum = "AGGREGATION_UNSPECIFIED"
MetricAggregationEnumMax MetricAggregationEnum = "MAX"
MetricAggregationEnumSum MetricAggregationEnum = "SUM"
)


type Metric struct {
    Aggregation *MetricAggregationEnum `json:"aggregation,omitempty"`
    Category *LocalizedString `json:"category,omitempty"`
    Derived *DerivedMetric `json:"derived,omitempty"`
    DisplayLabel *LocalizedString `json:"displayLabel,omitempty"`
    HasNonzeroData *bool `json:"hasNonzeroData,omitempty"`
    HotValue *float32 `json:"hotValue,omitempty"`
    IndexedHotKeys map[string]IndexedHotKey `json:"indexedHotKeys,omitempty"`
    IndexedKeyRangeInfos map[string]IndexedKeyRangeInfos `json:"indexedKeyRangeInfos,omitempty"`
    Info *LocalizedString `json:"info,omitempty"`
    Matrix *MetricMatrix `json:"matrix,omitempty"`
    Unit *LocalizedString `json:"unit,omitempty"`
    Visible *bool `json:"visible,omitempty"`
    
}

