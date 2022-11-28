package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsContainersDestinationsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type TagmanagerAccountsContainersDestinationsListQueryParams struct {
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

type TagmanagerAccountsContainersDestinationsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersDestinationsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersDestinationsListSecurity struct {
	Option1 *TagmanagerAccountsContainersDestinationsListSecurityOption1 `security:"option"`
	Option2 *TagmanagerAccountsContainersDestinationsListSecurityOption2 `security:"option"`
}

type TagmanagerAccountsContainersDestinationsListRequest struct {
	PathParams  TagmanagerAccountsContainersDestinationsListPathParams
	QueryParams TagmanagerAccountsContainersDestinationsListQueryParams
	Security    TagmanagerAccountsContainersDestinationsListSecurity
}

type TagmanagerAccountsContainersDestinationsListResponse struct {
	ContentType              string
	ListDestinationsResponse *shared.ListDestinationsResponse
	StatusCode               int64
}
