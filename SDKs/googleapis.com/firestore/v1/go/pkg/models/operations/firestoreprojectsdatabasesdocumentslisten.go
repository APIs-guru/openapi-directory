package operations

import (
	"openapi/pkg/models/shared"
)

type FirestoreProjectsDatabasesDocumentsListenPathParams struct {
	Database string `pathParam:"style=simple,explode=false,name=database"`
}

type FirestoreProjectsDatabasesDocumentsListenQueryParams struct {
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

type FirestoreProjectsDatabasesDocumentsListenSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesDocumentsListenSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesDocumentsListenSecurity struct {
	Option1 *FirestoreProjectsDatabasesDocumentsListenSecurityOption1 `security:"option"`
	Option2 *FirestoreProjectsDatabasesDocumentsListenSecurityOption2 `security:"option"`
}

type FirestoreProjectsDatabasesDocumentsListenRequest struct {
	PathParams  FirestoreProjectsDatabasesDocumentsListenPathParams
	QueryParams FirestoreProjectsDatabasesDocumentsListenQueryParams
	Request     *shared.ListenRequest `request:"mediaType=application/json"`
	Security    FirestoreProjectsDatabasesDocumentsListenSecurity
}

type FirestoreProjectsDatabasesDocumentsListenResponse struct {
	ContentType    string
	ListenResponse *shared.ListenResponse
	StatusCode     int64
}
