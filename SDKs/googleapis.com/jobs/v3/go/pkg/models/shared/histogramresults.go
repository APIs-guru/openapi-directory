package shared

type HistogramResults struct {
	CompensationHistogramResults    []CompensationHistogramResult    `json:"compensationHistogramResults"`
	CustomAttributeHistogramResults []CustomAttributeHistogramResult `json:"customAttributeHistogramResults"`
	SimpleHistogramResults          []HistogramResult                `json:"simpleHistogramResults"`
}
