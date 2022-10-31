package shared



type SpotUpdateAntennaReportLocations struct {
    AntennaNumber *int64 `json:"antenna_number,omitempty"`
    ReportLocation *Location `json:"report_location,omitempty"`
    ReportLocationID *string `json:"report_location_id,omitempty"`
    ReportLocationURL *string `json:"report_location_url,omitempty"`
    
}

type SpotUpdate struct {
    AntennaReportLocations []SpotUpdateAntennaReportLocations `json:"antenna_report_locations,omitempty"`
    Config map[string]interface{} `json:"config,omitempty"`
    ConfigRequest map[string]interface{} `json:"config_request,omitempty"`
    GeoCoords *GeoCoords `json:"geo_coords,omitempty"`
    ID *string `json:"id,omitempty"`
    IsOnline *bool `json:"is_online,omitempty"`
    ReportLocation *string `json:"report_location,omitempty"`
    RequestCounter *int64 `json:"request_counter,omitempty"`
    Senses map[string]interface{} `json:"senses,omitempty"`
    SensesRequest map[string]interface{} `json:"senses_request,omitempty"`
    SerialNumber *int64 `json:"serial_number,omitempty"`
    Status *interface{} `json:"status,omitempty"`
    TimeCreated *string `json:"time_created,omitempty"`
    TimeUpdated *string `json:"time_updated,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

