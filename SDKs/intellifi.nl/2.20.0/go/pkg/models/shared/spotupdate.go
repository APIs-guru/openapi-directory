package shared

type SpotUpdateAntennaReportLocationsInput struct {
	AntennaNumber *int64 `json:"antenna_number,omitempty"`
}

type SpotUpdateInput struct {
	AntennaReportLocations []SpotUpdateAntennaReportLocationsInput `json:"antenna_report_locations,omitempty"`
	ConfigRequest          map[string]interface{}                  `json:"config_request,omitempty"`
	GeoCoords              *GeoCoordsInput                         `json:"geo_coords,omitempty"`
	ReportLocation         *string                                 `json:"report_location,omitempty"`
	SensesRequest          map[string]interface{}                  `json:"senses_request,omitempty"`
}
