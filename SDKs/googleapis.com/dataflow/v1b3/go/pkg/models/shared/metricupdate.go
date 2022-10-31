package shared



type MetricUpdate struct {
    Cumulative *bool `json:"cumulative,omitempty"`
    Distribution *interface{} `json:"distribution,omitempty"`
    Gauge *interface{} `json:"gauge,omitempty"`
    Internal *interface{} `json:"internal,omitempty"`
    Kind *string `json:"kind,omitempty"`
    MeanCount *interface{} `json:"meanCount,omitempty"`
    MeanSum *interface{} `json:"meanSum,omitempty"`
    Name *MetricStructuredName `json:"name,omitempty"`
    Scalar *interface{} `json:"scalar,omitempty"`
    Set *interface{} `json:"set,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

