package shared

type ServiceDescription struct {
	Description     *string `json:"description,omitempty"`
	ImportSourceURI string  `json:"import_source_uri"`
	ServiceID       string  `json:"service_id"`
	ServiceName     string  `json:"service_name"`
}
