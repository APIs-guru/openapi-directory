package shared

type GoogleCloudIntegrationsV1alphaValueType struct {
	BooleanArray *GoogleCloudIntegrationsV1alphaBooleanParameterArray `json:"booleanArray"`
	BooleanValue *bool                                                `json:"booleanValue"`
	DoubleArray  *GoogleCloudIntegrationsV1alphaDoubleParameterArray  `json:"doubleArray"`
	DoubleValue  *float64                                             `json:"doubleValue"`
	IntArray     *GoogleCloudIntegrationsV1alphaIntParameterArray     `json:"intArray"`
	IntValue     *string                                              `json:"intValue"`
	JSONValue    *string                                              `json:"jsonValue"`
	StringArray  *GoogleCloudIntegrationsV1alphaStringParameterArray  `json:"stringArray"`
	StringValue  *string                                              `json:"stringValue"`
}
