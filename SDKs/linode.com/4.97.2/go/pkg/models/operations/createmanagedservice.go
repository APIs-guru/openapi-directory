package operations

import (
	"openapi/pkg/models/shared"
)

type CreateManagedServiceRequestBodyServiceTypeEnum string

const (
	CreateManagedServiceRequestBodyServiceTypeEnumURL CreateManagedServiceRequestBodyServiceTypeEnum = "url"
	CreateManagedServiceRequestBodyServiceTypeEnumTCP CreateManagedServiceRequestBodyServiceTypeEnum = "tcp"
)

type CreateManagedServiceRequestBodyInput struct {
	Address           string                                         `json:"address"`
	Body              *string                                        `json:"body,omitempty"`
	ConsultationGroup *string                                        `json:"consultation_group,omitempty"`
	Credentials       []int64                                        `json:"credentials,omitempty"`
	Label             string                                         `json:"label"`
	Notes             *string                                        `json:"notes,omitempty"`
	Region            *string                                        `json:"region,omitempty"`
	ServiceType       CreateManagedServiceRequestBodyServiceTypeEnum `json:"service_type"`
	Timeout           int64                                          `json:"timeout"`
}

type CreateManagedServiceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateManagedServiceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateManagedServiceRequest struct {
	Request  *CreateManagedServiceRequestBodyInput `request:"mediaType=application/json"`
	Security CreateManagedServiceSecurity
}

type CreateManagedServiceResponse struct {
	ContentType                                      string
	ManagedService                                   *shared.ManagedService
	StatusCode                                       int64
	CreateManagedServiceDefaultApplicationJSONObject *CreateManagedServiceDefaultApplicationJSON
}
