package operations

import (
	"openapi/pkg/models/shared"
)

type ContainerProjectsZonesOperationsCancelPathParams struct {
	OperationID string `pathParam:"style=simple,explode=false,name=operationId"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=projectId"`
	Zone        string `pathParam:"style=simple,explode=false,name=zone"`
}

type ContainerProjectsZonesOperationsCancelQueryParams struct {
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

type ContainerProjectsZonesOperationsCancelSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContainerProjectsZonesOperationsCancelRequest struct {
	PathParams  ContainerProjectsZonesOperationsCancelPathParams
	QueryParams ContainerProjectsZonesOperationsCancelQueryParams
	Request     *shared.CancelOperationRequest `request:"mediaType=application/json"`
	Security    ContainerProjectsZonesOperationsCancelSecurity
}

type ContainerProjectsZonesOperationsCancelResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
