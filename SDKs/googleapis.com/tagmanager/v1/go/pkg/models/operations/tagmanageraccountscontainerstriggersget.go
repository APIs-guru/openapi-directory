package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsContainersTriggersGetPathParams struct {
	AccountID   string `pathParam:"style=simple,explode=false,name=accountId"`
	ContainerID string `pathParam:"style=simple,explode=false,name=containerId"`
	TriggerID   string `pathParam:"style=simple,explode=false,name=triggerId"`
}

type TagmanagerAccountsContainersTriggersGetQueryParams struct {
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

type TagmanagerAccountsContainersTriggersGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersTriggersGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersTriggersGetSecurity struct {
	Option1 *TagmanagerAccountsContainersTriggersGetSecurityOption1 `security:"option"`
	Option2 *TagmanagerAccountsContainersTriggersGetSecurityOption2 `security:"option"`
}

type TagmanagerAccountsContainersTriggersGetRequest struct {
	PathParams  TagmanagerAccountsContainersTriggersGetPathParams
	QueryParams TagmanagerAccountsContainersTriggersGetQueryParams
	Security    TagmanagerAccountsContainersTriggersGetSecurity
}

type TagmanagerAccountsContainersTriggersGetResponse struct {
	ContentType string
	StatusCode  int64
	Trigger     *shared.Trigger
}
