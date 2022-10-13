package shared

type MetricAggregationEnum string

const (
	MetricAggregationEnumAggregationUnspecified MetricAggregationEnum = "AGGREGATION_UNSPECIFIED"
	MetricAggregationEnumMax                    MetricAggregationEnum = "MAX"
	MetricAggregationEnumSum                    MetricAggregationEnum = "SUM"
)

type Metric struct {
	Aggregation          *MetricAggregationEnum          `json:"aggregation"`
	Category             *LocalizedString                `json:"category"`
	Derived              *DerivedMetric                  `json:"derived"`
	DisplayLabel         *LocalizedString                `json:"displayLabel"`
	HasNonzeroData       *bool                           `json:"hasNonzeroData"`
	HotValue             *float32                        `json:"hotValue"`
	IndexedHotKeys       map[string]IndexedHotKey        `json:"indexedHotKeys"`
	IndexedKeyRangeInfos map[string]IndexedKeyRangeInfos `json:"indexedKeyRangeInfos"`
	Info                 *LocalizedString                `json:"info"`
	Matrix               *MetricMatrix                   `json:"matrix"`
	Unit                 *LocalizedString                `json:"unit"`
	Visible              *bool                           `json:"visible"`
}
