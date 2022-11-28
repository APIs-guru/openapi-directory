package shared

// GoogleCloudResourcesettingsV1ValueStringMap
// A string->string map value that can hold a map of string keys to string values. The maximum length of each string is 200 characters and there can be a maximum of 50 key-value pairs in the map.
type GoogleCloudResourcesettingsV1ValueStringMap struct {
	Mappings map[string]string `json:"mappings,omitempty"`
}
