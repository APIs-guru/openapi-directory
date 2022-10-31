package operations

import (
	"openapi/pkg/models/shared"
)

type FirestoreProjectsDatabasesIndexesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type FirestoreProjectsDatabasesIndexesCreateQueryParams struct {
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

type FirestoreProjectsDatabasesIndexesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesIndexesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesIndexesCreateSecurity struct {
	Option1 *FirestoreProjectsDatabasesIndexesCreateSecurityOption1 `security:"option"`
	Option2 *FirestoreProjectsDatabasesIndexesCreateSecurityOption2 `security:"option"`
}

type FirestoreProjectsDatabasesIndexesCreateRequest struct {
	PathParams  FirestoreProjectsDatabasesIndexesCreatePathParams
	QueryParams FirestoreProjectsDatabasesIndexesCreateQueryParams
	Request     *shared.GoogleFirestoreAdminV1beta1Index `request:"mediaType=application/json"`
	Security    FirestoreProjectsDatabasesIndexesCreateSecurity
}

type FirestoreProjectsDatabasesIndexesCreateResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
