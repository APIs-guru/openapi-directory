package operations

import (
	"openapi/pkg/models/shared"
)

type DatastoreProjectsBeginTransactionPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DatastoreProjectsBeginTransactionQueryParams struct {
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

type DatastoreProjectsBeginTransactionSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatastoreProjectsBeginTransactionSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatastoreProjectsBeginTransactionSecurity struct {
	Option1 *DatastoreProjectsBeginTransactionSecurityOption1 `security:"option"`
	Option2 *DatastoreProjectsBeginTransactionSecurityOption2 `security:"option"`
}

type DatastoreProjectsBeginTransactionRequest struct {
	PathParams  DatastoreProjectsBeginTransactionPathParams
	QueryParams DatastoreProjectsBeginTransactionQueryParams
	Request     *shared.BeginTransactionRequest `request:"mediaType=application/json"`
	Security    DatastoreProjectsBeginTransactionSecurity
}

type DatastoreProjectsBeginTransactionResponse struct {
	BeginTransactionResponse *shared.BeginTransactionResponse
	ContentType              string
	StatusCode               int64
}
