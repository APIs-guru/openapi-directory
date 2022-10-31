package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsContainersVersionHeadersLatestPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type TagmanagerAccountsContainersVersionHeadersLatestQueryParams struct {
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

type TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersVersionHeadersLatestSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersVersionHeadersLatestSecurity struct {
	Option1 *TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1 `security:"option"`
	Option2 *TagmanagerAccountsContainersVersionHeadersLatestSecurityOption2 `security:"option"`
}

type TagmanagerAccountsContainersVersionHeadersLatestRequest struct {
	PathParams  TagmanagerAccountsContainersVersionHeadersLatestPathParams
	QueryParams TagmanagerAccountsContainersVersionHeadersLatestQueryParams
	Security    TagmanagerAccountsContainersVersionHeadersLatestSecurity
}

type TagmanagerAccountsContainersVersionHeadersLatestResponse struct {
	ContainerVersionHeader *shared.ContainerVersionHeader
	ContentType            string
	StatusCode             int64
}
