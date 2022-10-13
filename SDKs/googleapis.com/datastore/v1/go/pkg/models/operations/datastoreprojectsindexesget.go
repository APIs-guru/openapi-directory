package operations

import (
	"openapi/pkg/models/shared"
)

type DatastoreProjectsIndexesGetPathParams struct {
	IndexID   string `pathParam:"style=simple,explode=false,name=indexId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DatastoreProjectsIndexesGetQueryParams struct {
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

type DatastoreProjectsIndexesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatastoreProjectsIndexesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatastoreProjectsIndexesGetSecurity struct {
	Option1 *DatastoreProjectsIndexesGetSecurityOption1 `security:"option"`
	Option2 *DatastoreProjectsIndexesGetSecurityOption2 `security:"option"`
}

type DatastoreProjectsIndexesGetRequest struct {
	PathParams  DatastoreProjectsIndexesGetPathParams
	QueryParams DatastoreProjectsIndexesGetQueryParams
	Security    DatastoreProjectsIndexesGetSecurity
}

type DatastoreProjectsIndexesGetResponse struct {
	ContentType                 string
	GoogleDatastoreAdminV1Index *shared.GoogleDatastoreAdminV1Index
	StatusCode                  int64
}
