package shared




type GoogleCloudFunctionsV2betaStateMessageSeverityEnum string

const (
    GoogleCloudFunctionsV2betaStateMessageSeverityEnumSeverityUnspecified GoogleCloudFunctionsV2betaStateMessageSeverityEnum = "SEVERITY_UNSPECIFIED"
GoogleCloudFunctionsV2betaStateMessageSeverityEnumError GoogleCloudFunctionsV2betaStateMessageSeverityEnum = "ERROR"
GoogleCloudFunctionsV2betaStateMessageSeverityEnumWarning GoogleCloudFunctionsV2betaStateMessageSeverityEnum = "WARNING"
GoogleCloudFunctionsV2betaStateMessageSeverityEnumInfo GoogleCloudFunctionsV2betaStateMessageSeverityEnum = "INFO"
)


type GoogleCloudFunctionsV2betaStateMessage struct {
    Message *string `json:"message,omitempty"`
    Severity *GoogleCloudFunctionsV2betaStateMessageSeverityEnum `json:"severity,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

