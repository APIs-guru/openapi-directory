package operations

import (
	"openapi/pkg/models/shared"
)

type DatastoreProjectsAllocateIdsPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DatastoreProjectsAllocateIdsQueryParams struct {
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

type DatastoreProjectsAllocateIdsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatastoreProjectsAllocateIdsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatastoreProjectsAllocateIdsSecurity struct {
	Option1 *DatastoreProjectsAllocateIdsSecurityOption1 `security:"option"`
	Option2 *DatastoreProjectsAllocateIdsSecurityOption2 `security:"option"`
}

type DatastoreProjectsAllocateIdsRequest struct {
	PathParams  DatastoreProjectsAllocateIdsPathParams
	QueryParams DatastoreProjectsAllocateIdsQueryParams
	Request     *shared.AllocateIdsRequest `request:"mediaType=application/json"`
	Security    DatastoreProjectsAllocateIdsSecurity
}

type DatastoreProjectsAllocateIdsResponse struct {
	AllocateIdsResponse *shared.AllocateIdsResponse
	ContentType         string
	StatusCode          int64
}
