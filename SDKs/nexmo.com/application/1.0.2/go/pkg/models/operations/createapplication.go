package operations

import (
"openapi/pkg/models/shared")


type CreateApplicationRequestBodyTypeEnum string

const (
    CreateApplicationRequestBodyTypeEnumVoice CreateApplicationRequestBodyTypeEnum = "voice"
CreateApplicationRequestBodyTypeEnumMessages CreateApplicationRequestBodyTypeEnum = "messages"
)


type CreateApplicationRequestBody struct {
    AnswerMethod *string `json:"answer_method,omitempty"`
    AnswerURL *string `json:"answer_url,omitempty"`
    APIKey string `json:"api_key"`
    APISecret string `json:"api_secret"`
    EventMethod *string `json:"event_method,omitempty"`
    EventURL *string `json:"event_url,omitempty"`
    InboundMethod *string `json:"inbound_method,omitempty"`
    InboundURL *string `json:"inbound_url,omitempty"`
    Name string `json:"name"`
    StatusMethod *string `json:"status_method,omitempty"`
    StatusURL *string `json:"status_url,omitempty"`
    Type CreateApplicationRequestBodyTypeEnum `json:"type"`
    
}

type CreateApplicationRequest struct {
    Request *CreateApplicationRequestBody `request:"mediaType=application/json"`
    
}

type CreateApplicationResponse struct {
    ContentType string 
    StatusCode int64 
    ApplicationCreated *shared.ApplicationCreated 
    
}

