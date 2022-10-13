package operations

import (
	"openapi/pkg/models/shared"
)

type DatastoreProjectsIndexesCreatePathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DatastoreProjectsIndexesCreateQueryParams struct {
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

type DatastoreProjectsIndexesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatastoreProjectsIndexesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatastoreProjectsIndexesCreateSecurity struct {
	Option1 *DatastoreProjectsIndexesCreateSecurityOption1 `security:"option"`
	Option2 *DatastoreProjectsIndexesCreateSecurityOption2 `security:"option"`
}

type DatastoreProjectsIndexesCreateRequest struct {
	PathParams  DatastoreProjectsIndexesCreatePathParams
	QueryParams DatastoreProjectsIndexesCreateQueryParams
	Request     *shared.GoogleDatastoreAdminV1Index `request:"mediaType=application/json"`
	Security    DatastoreProjectsIndexesCreateSecurity
}

type DatastoreProjectsIndexesCreateResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
