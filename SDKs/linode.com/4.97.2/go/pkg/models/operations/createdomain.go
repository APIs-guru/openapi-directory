package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomainRequestBodyStatusEnum string

const (
	CreateDomainRequestBodyStatusEnumDisabled CreateDomainRequestBodyStatusEnum = "disabled"
	CreateDomainRequestBodyStatusEnumActive   CreateDomainRequestBodyStatusEnum = "active"
)

type CreateDomainRequestBodyTypeEnum string

const (
	CreateDomainRequestBodyTypeEnumMaster CreateDomainRequestBodyTypeEnum = "master"
	CreateDomainRequestBodyTypeEnumSlave  CreateDomainRequestBodyTypeEnum = "slave"
)

type CreateDomainRequestBodyInput struct {
	AxfrIps     []string                           `json:"axfr_ips,omitempty"`
	Description *string                            `json:"description,omitempty"`
	Domain      string                             `json:"domain"`
	ExpireSec   *int64                             `json:"expire_sec,omitempty"`
	Group       *string                            `json:"group,omitempty"`
	MasterIps   []string                           `json:"master_ips,omitempty"`
	RefreshSec  *int64                             `json:"refresh_sec,omitempty"`
	RetrySec    *int64                             `json:"retry_sec,omitempty"`
	SoaEmail    *string                            `json:"soa_email,omitempty"`
	Status      *CreateDomainRequestBodyStatusEnum `json:"status,omitempty"`
	Tags        []string                           `json:"tags,omitempty"`
	TTLSec      *int64                             `json:"ttl_sec,omitempty"`
	Type        CreateDomainRequestBodyTypeEnum    `json:"type"`
}

type CreateDomainSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateDomainDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateDomainRequest struct {
	Request  CreateDomainRequestBodyInput `request:"mediaType=application/json"`
	Security CreateDomainSecurity
}

type CreateDomainResponse struct {
	ContentType                              string
	Domain                                   *shared.Domain
	StatusCode                               int64
	CreateDomainDefaultApplicationJSONObject *CreateDomainDefaultApplicationJSON
}
