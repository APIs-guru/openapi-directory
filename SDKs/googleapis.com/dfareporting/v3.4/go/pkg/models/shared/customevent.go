package shared




type CustomEventEventTypeEnum string

const (
    CustomEventEventTypeEnumUnknown CustomEventEventTypeEnum = "UNKNOWN"
CustomEventEventTypeEnumInsert CustomEventEventTypeEnum = "INSERT"
CustomEventEventTypeEnumAnnotate CustomEventEventTypeEnum = "ANNOTATE"
)


type CustomEvent struct {
    AnnotateClickEvent *CustomEventClickAnnotation `json:"annotateClickEvent,omitempty"`
    AnnotateImpressionEvent *CustomEventImpressionAnnotation `json:"annotateImpressionEvent,omitempty"`
    CustomVariables []CustomVariable `json:"customVariables,omitempty"`
    EventType *CustomEventEventTypeEnum `json:"eventType,omitempty"`
    FloodlightConfigurationID *string `json:"floodlightConfigurationId,omitempty"`
    InsertEvent *CustomEventInsert `json:"insertEvent,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Ordinal *string `json:"ordinal,omitempty"`
    TimestampMicros *string `json:"timestampMicros,omitempty"`
    
}

