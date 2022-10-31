package operations

import (
	"openapi/pkg/models/shared"
)

type NotebooksProjectsLocationsInstancesIsUpgradeablePathParams struct {
	NotebookInstance string `pathParam:"style=simple,explode=false,name=notebookInstance"`
}

type NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum string

const (
	NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnumUpgradeTypeUnspecified NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum = "UPGRADE_TYPE_UNSPECIFIED"
	NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnumUpgradeFramework       NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum = "UPGRADE_FRAMEWORK"
	NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnumUpgradeOs              NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum = "UPGRADE_OS"
	NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnumUpgradeCuda            NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum = "UPGRADE_CUDA"
	NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnumUpgradeAll             NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum = "UPGRADE_ALL"
)

type NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                         `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                   `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                           `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                   `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                   `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                                   `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                   `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                                     `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                   `queryParam:"style=form,explode=true,name=quotaUser"`
	Type           *NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum `queryParam:"style=form,explode=true,name=type"`
	UploadType     *string                                                   `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                   `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type NotebooksProjectsLocationsInstancesIsUpgradeableSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type NotebooksProjectsLocationsInstancesIsUpgradeableRequest struct {
	PathParams  NotebooksProjectsLocationsInstancesIsUpgradeablePathParams
	QueryParams NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams
	Security    NotebooksProjectsLocationsInstancesIsUpgradeableSecurity
}

type NotebooksProjectsLocationsInstancesIsUpgradeableResponse struct {
	ContentType                   string
	IsInstanceUpgradeableResponse *shared.IsInstanceUpgradeableResponse
	StatusCode                    int64
}
