package operations

import (
	"openapi/pkg/models/shared"
)

type CloudidentityGroupsCreateInitialGroupConfigEnum string

const (
	CloudidentityGroupsCreateInitialGroupConfigEnumInitialGroupConfigUnspecified CloudidentityGroupsCreateInitialGroupConfigEnum = "INITIAL_GROUP_CONFIG_UNSPECIFIED"
	CloudidentityGroupsCreateInitialGroupConfigEnumWithInitialOwner              CloudidentityGroupsCreateInitialGroupConfigEnum = "WITH_INITIAL_OWNER"
	CloudidentityGroupsCreateInitialGroupConfigEnumEmpty                         CloudidentityGroupsCreateInitialGroupConfigEnum = "EMPTY"
)

type CloudidentityGroupsCreateQueryParams struct {
	DollarXgafv        *shared.XgafvEnum                                `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken        *string                                          `queryParam:"style=form,explode=true,name=access_token"`
	Alt                *shared.AltEnum                                  `queryParam:"style=form,explode=true,name=alt"`
	Callback           *string                                          `queryParam:"style=form,explode=true,name=callback"`
	Fields             *string                                          `queryParam:"style=form,explode=true,name=fields"`
	InitialGroupConfig *CloudidentityGroupsCreateInitialGroupConfigEnum `queryParam:"style=form,explode=true,name=initialGroupConfig"`
	Key                *string                                          `queryParam:"style=form,explode=true,name=key"`
	OauthToken         *string                                          `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint        *bool                                            `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser          *string                                          `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType         *string                                          `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol     *string                                          `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudidentityGroupsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsCreateSecurity struct {
	Option1 *CloudidentityGroupsCreateSecurityOption1 `security:"option"`
	Option2 *CloudidentityGroupsCreateSecurityOption2 `security:"option"`
}

type CloudidentityGroupsCreateRequest struct {
	QueryParams CloudidentityGroupsCreateQueryParams
	Request     *shared.Group `request:"mediaType=application/json"`
	Security    CloudidentityGroupsCreateSecurity
}

type CloudidentityGroupsCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
