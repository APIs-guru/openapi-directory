package operations

import (
	"openapi/pkg/models/shared"
)

type FirestoreProjectsDatabasesDocumentsRollbackPathParams struct {
	Database string `pathParam:"style=simple,explode=false,name=database"`
}

type FirestoreProjectsDatabasesDocumentsRollbackQueryParams struct {
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

type FirestoreProjectsDatabasesDocumentsRollbackSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesDocumentsRollbackSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesDocumentsRollbackSecurity struct {
	Option1 *FirestoreProjectsDatabasesDocumentsRollbackSecurityOption1 `security:"option"`
	Option2 *FirestoreProjectsDatabasesDocumentsRollbackSecurityOption2 `security:"option"`
}

type FirestoreProjectsDatabasesDocumentsRollbackRequest struct {
	PathParams  FirestoreProjectsDatabasesDocumentsRollbackPathParams
	QueryParams FirestoreProjectsDatabasesDocumentsRollbackQueryParams
	Request     *shared.RollbackRequest `request:"mediaType=application/json"`
	Security    FirestoreProjectsDatabasesDocumentsRollbackSecurity
}

type FirestoreProjectsDatabasesDocumentsRollbackResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
