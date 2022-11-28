package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsContainersMoveTagIDPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type TagmanagerAccountsContainersMoveTagIDQueryParams struct {
	DollarXgafv                      *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                      *string           `queryParam:"style=form,explode=true,name=access_token"`
	AllowUserPermissionFeatureUpdate *bool             `queryParam:"style=form,explode=true,name=allowUserPermissionFeatureUpdate"`
	Alt                              *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                         *string           `queryParam:"style=form,explode=true,name=callback"`
	CopySettings                     *bool             `queryParam:"style=form,explode=true,name=copySettings"`
	CopyTermsOfService               *bool             `queryParam:"style=form,explode=true,name=copyTermsOfService"`
	CopyUsers                        *bool             `queryParam:"style=form,explode=true,name=copyUsers"`
	Fields                           *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                              *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                       *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                      *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                        *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	TagID                            *string           `queryParam:"style=form,explode=true,name=tagId"`
	TagName                          *string           `queryParam:"style=form,explode=true,name=tagName"`
	UploadType                       *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                   *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type TagmanagerAccountsContainersMoveTagIDSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersMoveTagIDRequest struct {
	PathParams  TagmanagerAccountsContainersMoveTagIDPathParams
	QueryParams TagmanagerAccountsContainersMoveTagIDQueryParams
	Security    TagmanagerAccountsContainersMoveTagIDSecurity
}

type TagmanagerAccountsContainersMoveTagIDResponse struct {
	Container   *shared.Container
	ContentType string
	StatusCode  int64
}
