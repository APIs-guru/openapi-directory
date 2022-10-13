package operations

import (
	"openapi/pkg/models/shared"
)

type DatastoreProjectsIndexesListPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DatastoreProjectsIndexesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string           `queryParam:"style=form,explode=true,name=filter"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DatastoreProjectsIndexesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatastoreProjectsIndexesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatastoreProjectsIndexesListSecurity struct {
	Option1 *DatastoreProjectsIndexesListSecurityOption1 `security:"option"`
	Option2 *DatastoreProjectsIndexesListSecurityOption2 `security:"option"`
}

type DatastoreProjectsIndexesListRequest struct {
	PathParams  DatastoreProjectsIndexesListPathParams
	QueryParams DatastoreProjectsIndexesListQueryParams
	Security    DatastoreProjectsIndexesListSecurity
}

type DatastoreProjectsIndexesListResponse struct {
	ContentType                               string
	GoogleDatastoreAdminV1ListIndexesResponse *shared.GoogleDatastoreAdminV1ListIndexesResponse
	StatusCode                                int64
}
