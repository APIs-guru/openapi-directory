package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsContainersVariablesUpdatePathParams struct {
	AccountID   string `pathParam:"style=simple,explode=false,name=accountId"`
	ContainerID string `pathParam:"style=simple,explode=false,name=containerId"`
	VariableID  string `pathParam:"style=simple,explode=false,name=variableId"`
}

type TagmanagerAccountsContainersVariablesUpdateQueryParams struct {
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

type TagmanagerAccountsContainersVariablesUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersVariablesUpdateRequest struct {
	PathParams  TagmanagerAccountsContainersVariablesUpdatePathParams
	QueryParams TagmanagerAccountsContainersVariablesUpdateQueryParams
	Request     *shared.Variable `request:"mediaType=application/json"`
	Security    TagmanagerAccountsContainersVariablesUpdateSecurity
}

type TagmanagerAccountsContainersVariablesUpdateResponse struct {
	ContentType string
	StatusCode  int64
	Variable    *shared.Variable
}
