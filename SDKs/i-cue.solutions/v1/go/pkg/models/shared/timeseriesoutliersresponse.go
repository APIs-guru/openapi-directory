package shared

type TimeSeriesOutliersResponse struct {
	Outliers     []OutlierResponse `json:"outliers"`
	TimeSeriesID *string           `json:"timeSeriesId"`
}
