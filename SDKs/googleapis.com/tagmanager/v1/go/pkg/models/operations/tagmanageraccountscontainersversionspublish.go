package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsContainersVersionsPublishPathParams struct {
	AccountID          string `pathParam:"style=simple,explode=false,name=accountId"`
	ContainerID        string `pathParam:"style=simple,explode=false,name=containerId"`
	ContainerVersionID string `pathParam:"style=simple,explode=false,name=containerVersionId"`
}

type TagmanagerAccountsContainersVersionsPublishQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Fingerprint    *string           `queryParam:"style=form,explode=true,name=fingerprint"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type TagmanagerAccountsContainersVersionsPublishSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersVersionsPublishRequest struct {
	PathParams  TagmanagerAccountsContainersVersionsPublishPathParams
	QueryParams TagmanagerAccountsContainersVersionsPublishQueryParams
	Security    TagmanagerAccountsContainersVersionsPublishSecurity
}

type TagmanagerAccountsContainersVersionsPublishResponse struct {
	ContentType                     string
	PublishContainerVersionResponse *shared.PublishContainerVersionResponse
	StatusCode                      int64
}
