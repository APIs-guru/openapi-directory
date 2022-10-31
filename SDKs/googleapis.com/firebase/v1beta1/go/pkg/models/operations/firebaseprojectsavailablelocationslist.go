package operations

import (
	"openapi/pkg/models/shared"
)

type FirebaseProjectsAvailableLocationsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type FirebaseProjectsAvailableLocationsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type FirebaseProjectsAvailableLocationsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseProjectsAvailableLocationsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseProjectsAvailableLocationsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseProjectsAvailableLocationsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseProjectsAvailableLocationsListSecurity struct {
	Option1 *FirebaseProjectsAvailableLocationsListSecurityOption1 `security:"option"`
	Option2 *FirebaseProjectsAvailableLocationsListSecurityOption2 `security:"option"`
	Option3 *FirebaseProjectsAvailableLocationsListSecurityOption3 `security:"option"`
	Option4 *FirebaseProjectsAvailableLocationsListSecurityOption4 `security:"option"`
}

type FirebaseProjectsAvailableLocationsListRequest struct {
	PathParams  FirebaseProjectsAvailableLocationsListPathParams
	QueryParams FirebaseProjectsAvailableLocationsListQueryParams
	Security    FirebaseProjectsAvailableLocationsListSecurity
}

type FirebaseProjectsAvailableLocationsListResponse struct {
	ContentType                    string
	ListAvailableLocationsResponse *shared.ListAvailableLocationsResponse
	StatusCode                     int64
}
