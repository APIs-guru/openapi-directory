package shared

type LithologyDescription struct {
	LithologyColour           *string `json:"lithology_colour,omitempty"`
	LithologyFrom             *string `json:"lithology_from,omitempty"`
	LithologyHardness         *string `json:"lithology_hardness,omitempty"`
	LithologyMoisture         *string `json:"lithology_moisture,omitempty"`
	LithologyRawData          *string `json:"lithology_raw_data,omitempty"`
	LithologyTo               *string `json:"lithology_to,omitempty"`
	WaterBearingEstimatedFlow *string `json:"water_bearing_estimated_flow,omitempty"`
}
