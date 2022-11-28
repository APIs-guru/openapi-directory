package shared

// HistogramResults
// Output only. Histogram results that match HistogramFacets specified in SearchJobsRequest.
type HistogramResults struct {
	CompensationHistogramResults    []CompensationHistogramResult    `json:"compensationHistogramResults,omitempty"`
	CustomAttributeHistogramResults []CustomAttributeHistogramResult `json:"customAttributeHistogramResults,omitempty"`
	SimpleHistogramResults          []HistogramResult                `json:"simpleHistogramResults,omitempty"`
}
