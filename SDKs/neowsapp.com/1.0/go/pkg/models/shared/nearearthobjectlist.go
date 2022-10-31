package shared



type NearEarthObjectList struct {
    ElementCount *int32 `json:"element_count,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    NearEarthObjects *interface{} `json:"near_earth_objects,omitempty"`
    
}

