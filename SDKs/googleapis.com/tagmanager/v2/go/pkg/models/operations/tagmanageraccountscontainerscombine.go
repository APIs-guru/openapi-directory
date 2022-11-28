package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsContainersCombinePathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type TagmanagerAccountsContainersCombineSettingSourceEnum string

const (
	TagmanagerAccountsContainersCombineSettingSourceEnumSettingSourceUnspecified TagmanagerAccountsContainersCombineSettingSourceEnum = "settingSourceUnspecified"
	TagmanagerAccountsContainersCombineSettingSourceEnumCurrent                  TagmanagerAccountsContainersCombineSettingSourceEnum = "current"
	TagmanagerAccountsContainersCombineSettingSourceEnumOther                    TagmanagerAccountsContainersCombineSettingSourceEnum = "other"
)

type TagmanagerAccountsContainersCombineQueryParams struct {
	DollarXgafv                      *shared.XgafvEnum                                     `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                      *string                                               `queryParam:"style=form,explode=true,name=access_token"`
	AllowUserPermissionFeatureUpdate *bool                                                 `queryParam:"style=form,explode=true,name=allowUserPermissionFeatureUpdate"`
	Alt                              *shared.AltEnum                                       `queryParam:"style=form,explode=true,name=alt"`
	Callback                         *string                                               `queryParam:"style=form,explode=true,name=callback"`
	ContainerID                      *string                                               `queryParam:"style=form,explode=true,name=containerId"`
	Fields                           *string                                               `queryParam:"style=form,explode=true,name=fields"`
	Key                              *string                                               `queryParam:"style=form,explode=true,name=key"`
	OauthToken                       *string                                               `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                      *bool                                                 `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                        *string                                               `queryParam:"style=form,explode=true,name=quotaUser"`
	SettingSource                    *TagmanagerAccountsContainersCombineSettingSourceEnum `queryParam:"style=form,explode=true,name=settingSource"`
	UploadType                       *string                                               `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                   *string                                               `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type TagmanagerAccountsContainersCombineSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersCombineRequest struct {
	PathParams  TagmanagerAccountsContainersCombinePathParams
	QueryParams TagmanagerAccountsContainersCombineQueryParams
	Security    TagmanagerAccountsContainersCombineSecurity
}

type TagmanagerAccountsContainersCombineResponse struct {
	Container   *shared.Container
	ContentType string
	StatusCode  int64
}
