package operations

import (
	"openapi/pkg/models/shared"
)

type CloudidentityGroupsLookupQueryParams struct {
	DollarXgafv       *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields            *string           `queryParam:"style=form,explode=true,name=fields"`
	GroupKeyID        *string           `queryParam:"style=form,explode=true,name=groupKey.id"`
	GroupKeyNamespace *string           `queryParam:"style=form,explode=true,name=groupKey.namespace"`
	Key               *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint       *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType        *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudidentityGroupsLookupSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsLookupSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsLookupSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsLookupSecurity struct {
	Option1 *CloudidentityGroupsLookupSecurityOption1 `security:"option"`
	Option2 *CloudidentityGroupsLookupSecurityOption2 `security:"option"`
	Option3 *CloudidentityGroupsLookupSecurityOption3 `security:"option"`
}

type CloudidentityGroupsLookupRequest struct {
	QueryParams CloudidentityGroupsLookupQueryParams
	Security    CloudidentityGroupsLookupSecurity
}

type CloudidentityGroupsLookupResponse struct {
	ContentType             string
	LookupGroupNameResponse *shared.LookupGroupNameResponse
	StatusCode              int64
}
