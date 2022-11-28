package shared

// GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo
// ProfileInfo defines the profile information for each schema field type.
type GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo struct {
	DistinctRatio  *float64                                                                       `json:"distinctRatio,omitempty"`
	DoubleProfile  *GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo  `json:"doubleProfile,omitempty"`
	IntegerProfile *GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo `json:"integerProfile,omitempty"`
	NullRatio      *float64                                                                       `json:"nullRatio,omitempty"`
	StringProfile  *GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo  `json:"stringProfile,omitempty"`
	TopNValues     []GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue       `json:"topNValues,omitempty"`
}
