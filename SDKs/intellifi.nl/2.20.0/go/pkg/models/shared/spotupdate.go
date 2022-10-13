package shared

type SpotUpdateAntennaReportLocations struct {
	AntennaNumber     *int64    `json:"antenna_number"`
	ReportLocation    *Location `json:"report_location"`
	ReportLocationID  *string   `json:"report_location_id"`
	ReportLocationURL *string   `json:"report_location_url"`
}

type SpotUpdate struct {
	AntennaReportLocations []SpotUpdateAntennaReportLocations `json:"antenna_report_locations"`
	Config                 map[string]interface{}             `json:"config"`
	ConfigRequest          map[string]interface{}             `json:"config_request"`
	GeoCoords              *GeoCoords                         `json:"geo_coords"`
	ID                     *string                            `json:"id"`
	IsOnline               *bool                              `json:"is_online"`
	ReportLocation         *string                            `json:"report_location"`
	RequestCounter         *int64                             `json:"request_counter"`
	Senses                 map[string]interface{}             `json:"senses"`
	SensesRequest          map[string]interface{}             `json:"senses_request"`
	SerialNumber           *int64                             `json:"serial_number"`
	Status                 *interface{}                       `json:"status"`
	TimeCreated            *string                            `json:"time_created"`
	TimeUpdated            *string                            `json:"time_updated"`
	URL                    *string                            `json:"url"`
}
