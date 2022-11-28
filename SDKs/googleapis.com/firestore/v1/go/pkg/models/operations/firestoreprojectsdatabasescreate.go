package operations

import (
	"openapi/pkg/models/shared"
)

type FirestoreProjectsDatabasesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type FirestoreProjectsDatabasesCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	DatabaseID     *string           `queryParam:"style=form,explode=true,name=databaseId"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type FirestoreProjectsDatabasesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesCreateSecurity struct {
	Option1 *FirestoreProjectsDatabasesCreateSecurityOption1 `security:"option"`
	Option2 *FirestoreProjectsDatabasesCreateSecurityOption2 `security:"option"`
}

type FirestoreProjectsDatabasesCreateRequest struct {
	PathParams  FirestoreProjectsDatabasesCreatePathParams
	QueryParams FirestoreProjectsDatabasesCreateQueryParams
	Request     *shared.GoogleFirestoreAdminV1DatabaseInput `request:"mediaType=application/json"`
	Security    FirestoreProjectsDatabasesCreateSecurity
}

type FirestoreProjectsDatabasesCreateResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
