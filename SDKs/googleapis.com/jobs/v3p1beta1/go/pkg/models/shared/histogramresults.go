package shared

type HistogramResults struct {
	CompensationHistogramResults    []CompensationHistogramResult    `json:"compensationHistogramResults,omitempty"`
	CustomAttributeHistogramResults []CustomAttributeHistogramResult `json:"customAttributeHistogramResults,omitempty"`
	SimpleHistogramResults          []HistogramResult                `json:"simpleHistogramResults,omitempty"`
}
