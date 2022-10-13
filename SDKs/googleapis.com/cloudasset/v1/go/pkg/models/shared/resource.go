package shared

type Resource struct {
	Data                 map[string]interface{} `json:"data"`
	DiscoveryDocumentURI *string                `json:"discoveryDocumentUri"`
	DiscoveryName        *string                `json:"discoveryName"`
	Location             *string                `json:"location"`
	Parent               *string                `json:"parent"`
	ResourceURL          *string                `json:"resourceUrl"`
	Version              *string                `json:"version"`
}
