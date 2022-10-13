package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateQueryParams struct {
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

type DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateRequest struct {
	PathParams  DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreatePathParams
	QueryParams DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateQueryParams
	Request     *shared.GoogleCloudDialogflowV2BatchCreateEntitiesRequest `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurity
}

type DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
