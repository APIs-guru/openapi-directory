package shared

type LithologyDescription struct {
	LithologyColour           *string `json:"lithology_colour"`
	LithologyFrom             *string `json:"lithology_from"`
	LithologyHardness         *string `json:"lithology_hardness"`
	LithologyMoisture         *string `json:"lithology_moisture"`
	LithologyRawData          *string `json:"lithology_raw_data"`
	LithologyTo               *string `json:"lithology_to"`
	WaterBearingEstimatedFlow *string `json:"water_bearing_estimated_flow"`
}
