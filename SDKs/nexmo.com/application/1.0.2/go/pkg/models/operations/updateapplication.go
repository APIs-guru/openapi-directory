package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateApplicationPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=app_id"`
}

type UpdateApplicationRequestBodyTypeEnum string

const (
	UpdateApplicationRequestBodyTypeEnumVoice    UpdateApplicationRequestBodyTypeEnum = "voice"
	UpdateApplicationRequestBodyTypeEnumMessages UpdateApplicationRequestBodyTypeEnum = "messages"
)

type UpdateApplicationRequestBody struct {
	AnswerMethod *string                              `json:"answer_method,omitempty"`
	AnswerURL    *string                              `json:"answer_url,omitempty"`
	APIKey       string                               `json:"api_key"`
	APISecret    string                               `json:"api_secret"`
	EventMethod  *string                              `json:"event_method,omitempty"`
	EventURL     *string                              `json:"event_url,omitempty"`
	Name         string                               `json:"name"`
	Type         UpdateApplicationRequestBodyTypeEnum `json:"type"`
}

type UpdateApplicationRequest struct {
	PathParams UpdateApplicationPathParams
	Request    *UpdateApplicationRequestBody `request:"mediaType=application/json"`
}

type UpdateApplicationResponse struct {
	ContentType string
	StatusCode  int64
	Application *shared.Application
}
