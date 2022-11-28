package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsContainersDestinationsLinkPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type TagmanagerAccountsContainersDestinationsLinkQueryParams struct {
	DollarXgafv                      *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                      *string           `queryParam:"style=form,explode=true,name=access_token"`
	AllowUserPermissionFeatureUpdate *bool             `queryParam:"style=form,explode=true,name=allowUserPermissionFeatureUpdate"`
	Alt                              *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                         *string           `queryParam:"style=form,explode=true,name=callback"`
	DestinationID                    *string           `queryParam:"style=form,explode=true,name=destinationId"`
	Fields                           *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                              *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                       *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                      *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                        *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                       *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                   *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type TagmanagerAccountsContainersDestinationsLinkSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersDestinationsLinkRequest struct {
	PathParams  TagmanagerAccountsContainersDestinationsLinkPathParams
	QueryParams TagmanagerAccountsContainersDestinationsLinkQueryParams
	Security    TagmanagerAccountsContainersDestinationsLinkSecurity
}

type TagmanagerAccountsContainersDestinationsLinkResponse struct {
	ContentType string
	Destination *shared.Destination
	StatusCode  int64
}
