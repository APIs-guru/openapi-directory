package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsContainersLookupQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	DestinationID  *string           `queryParam:"style=form,explode=true,name=destinationId"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type TagmanagerAccountsContainersLookupSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersLookupSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersLookupSecurity struct {
	Option1 *TagmanagerAccountsContainersLookupSecurityOption1 `security:"option"`
	Option2 *TagmanagerAccountsContainersLookupSecurityOption2 `security:"option"`
}

type TagmanagerAccountsContainersLookupRequest struct {
	QueryParams TagmanagerAccountsContainersLookupQueryParams
	Security    TagmanagerAccountsContainersLookupSecurity
}

type TagmanagerAccountsContainersLookupResponse struct {
	Container   *shared.Container
	ContentType string
	StatusCode  int64
}
