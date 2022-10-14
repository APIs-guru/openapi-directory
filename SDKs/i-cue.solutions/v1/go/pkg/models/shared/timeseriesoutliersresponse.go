package shared

type TimeSeriesOutliersResponse struct {
	Outliers     []OutlierResponse `json:"outliers,omitempty"`
	TimeSeriesID *string           `json:"timeSeriesId,omitempty"`
}
