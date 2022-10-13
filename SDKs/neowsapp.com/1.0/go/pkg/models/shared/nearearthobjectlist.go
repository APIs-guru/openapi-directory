package shared

type NearEarthObjectList struct {
	ElementCount     *int32                 `json:"element_count"`
	Links            map[string]interface{} `json:"links"`
	NearEarthObjects *interface{}           `json:"near_earth_objects"`
}
