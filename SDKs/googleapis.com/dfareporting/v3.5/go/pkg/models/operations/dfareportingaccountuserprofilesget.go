package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingAccountUserProfilesGetPathParams struct {
	ID        string `pathParam:"style=simple,explode=false,name=id"`
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingAccountUserProfilesGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingAccountUserProfilesGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingAccountUserProfilesGetRequest struct {
	PathParams  DfareportingAccountUserProfilesGetPathParams
	QueryParams DfareportingAccountUserProfilesGetQueryParams
	Security    DfareportingAccountUserProfilesGetSecurity
}

type DfareportingAccountUserProfilesGetResponse struct {
	AccountUserProfile *shared.AccountUserProfile
	ContentType        string
	StatusCode         int64
}
