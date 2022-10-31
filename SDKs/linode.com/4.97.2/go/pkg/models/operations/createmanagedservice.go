package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateManagedServiceRequestBodyServiceTypeEnum string

const (
	CreateManagedServiceRequestBodyServiceTypeEnumURL CreateManagedServiceRequestBodyServiceTypeEnum = "url"
	CreateManagedServiceRequestBodyServiceTypeEnumTCP CreateManagedServiceRequestBodyServiceTypeEnum = "tcp"
)

type CreateManagedServiceRequestBodyStatusEnum string

const (
	CreateManagedServiceRequestBodyStatusEnumDisabled CreateManagedServiceRequestBodyStatusEnum = "disabled"
	CreateManagedServiceRequestBodyStatusEnumPending  CreateManagedServiceRequestBodyStatusEnum = "pending"
	CreateManagedServiceRequestBodyStatusEnumOk       CreateManagedServiceRequestBodyStatusEnum = "ok"
	CreateManagedServiceRequestBodyStatusEnumProblem  CreateManagedServiceRequestBodyStatusEnum = "problem"
)

type CreateManagedServiceRequestBody struct {
	Address           string                                         `json:"address"`
	Body              *string                                        `json:"body,omitempty"`
	ConsultationGroup *string                                        `json:"consultation_group,omitempty"`
	Created           *time.Time                                     `json:"created,omitempty"`
	Credentials       []int64                                        `json:"credentials,omitempty"`
	ID                *int64                                         `json:"id,omitempty"`
	Label             string                                         `json:"label"`
	Notes             *string                                        `json:"notes,omitempty"`
	Region            *string                                        `json:"region,omitempty"`
	ServiceType       CreateManagedServiceRequestBodyServiceTypeEnum `json:"service_type"`
	Status            *CreateManagedServiceRequestBodyStatusEnum     `json:"status,omitempty"`
	Timeout           int64                                          `json:"timeout"`
	Updated           *time.Time                                     `json:"updated,omitempty"`
}

type CreateManagedServiceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateManagedServiceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateManagedServiceSecurity struct {
	Option1 *CreateManagedServiceSecurityOption1 `security:"option"`
	Option2 *CreateManagedServiceSecurityOption2 `security:"option"`
}

type CreateManagedServiceRequest struct {
	Request  *CreateManagedServiceRequestBody `request:"mediaType=application/json"`
	Security CreateManagedServiceSecurity
}

type CreateManagedServiceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateManagedServiceResponse struct {
	ContentType                                      string
	ManagedService                                   *shared.ManagedService
	StatusCode                                       int64
	CreateManagedServiceDefaultApplicationJSONObject *CreateManagedServiceDefaultApplicationJSON
}
