package operations

import (
	"openapi/pkg/models/shared"
)

type CreateApplicationRequestBodyTypeEnum string

const (
	CreateApplicationRequestBodyTypeEnumVoice    CreateApplicationRequestBodyTypeEnum = "voice"
	CreateApplicationRequestBodyTypeEnumMessages CreateApplicationRequestBodyTypeEnum = "messages"
)

type CreateApplicationRequestBody struct {
	AnswerMethod  *string                              `json:"answer_method"`
	AnswerURL     *string                              `json:"answer_url"`
	APIKey        string                               `json:"api_key"`
	APISecret     string                               `json:"api_secret"`
	EventMethod   *string                              `json:"event_method"`
	EventURL      *string                              `json:"event_url"`
	InboundMethod *string                              `json:"inbound_method"`
	InboundURL    *string                              `json:"inbound_url"`
	Name          string                               `json:"name"`
	StatusMethod  *string                              `json:"status_method"`
	StatusURL     *string                              `json:"status_url"`
	Type          CreateApplicationRequestBodyTypeEnum `json:"type"`
}

type CreateApplicationRequest struct {
	Request *CreateApplicationRequestBody `request:"mediaType=application/json"`
}

type CreateApplicationResponse struct {
	ContentType        string
	StatusCode         int64
	ApplicationCreated *shared.ApplicationCreated
}
