package shared

type MetricUpdate struct {
	Cumulative   *bool                 `json:"cumulative"`
	Distribution *interface{}          `json:"distribution"`
	Gauge        *interface{}          `json:"gauge"`
	Internal     *interface{}          `json:"internal"`
	Kind         *string               `json:"kind"`
	MeanCount    *interface{}          `json:"meanCount"`
	MeanSum      *interface{}          `json:"meanSum"`
	Name         *MetricStructuredName `json:"name"`
	Scalar       *interface{}          `json:"scalar"`
	Set          *interface{}          `json:"set"`
	UpdateTime   *string               `json:"updateTime"`
}
