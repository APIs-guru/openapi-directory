package shared

type CustomEventEventTypeEnum string

const (
	CustomEventEventTypeEnumUnknown  CustomEventEventTypeEnum = "UNKNOWN"
	CustomEventEventTypeEnumInsert   CustomEventEventTypeEnum = "INSERT"
	CustomEventEventTypeEnumAnnotate CustomEventEventTypeEnum = "ANNOTATE"
)

type CustomEvent struct {
	AnnotateClickEvent        *CustomEventClickAnnotation      `json:"annotateClickEvent"`
	AnnotateImpressionEvent   *CustomEventImpressionAnnotation `json:"annotateImpressionEvent"`
	CustomVariables           []CustomVariable                 `json:"customVariables"`
	EventType                 *CustomEventEventTypeEnum        `json:"eventType"`
	FloodlightConfigurationID *string                          `json:"floodlightConfigurationId"`
	InsertEvent               *CustomEventInsert               `json:"insertEvent"`
	Kind                      *string                          `json:"kind"`
	Ordinal                   *string                          `json:"ordinal"`
	TimestampMicros           *string                          `json:"timestampMicros"`
}
