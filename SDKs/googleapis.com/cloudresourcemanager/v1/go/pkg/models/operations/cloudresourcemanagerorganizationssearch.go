package operations

import (
	"openapi/pkg/models/shared"
)

type CloudresourcemanagerOrganizationsSearchQueryParams struct {
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

type CloudresourcemanagerOrganizationsSearchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudresourcemanagerOrganizationsSearchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudresourcemanagerOrganizationsSearchSecurity struct {
	Option1 *CloudresourcemanagerOrganizationsSearchSecurityOption1 `security:"option"`
	Option2 *CloudresourcemanagerOrganizationsSearchSecurityOption2 `security:"option"`
}

type CloudresourcemanagerOrganizationsSearchRequest struct {
	QueryParams CloudresourcemanagerOrganizationsSearchQueryParams
	Request     *shared.SearchOrganizationsRequest `request:"mediaType=application/json"`
	Security    CloudresourcemanagerOrganizationsSearchSecurity
}

type CloudresourcemanagerOrganizationsSearchResponse struct {
	ContentType                 string
	SearchOrganizationsResponse *shared.SearchOrganizationsResponse
	StatusCode                  int64
}
