package operations

import (
	"openapi/pkg/models/shared"
)

type FirestoreProjectsDatabasesListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type FirestoreProjectsDatabasesListQueryParams struct {
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

type FirestoreProjectsDatabasesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesListSecurity struct {
	Option1 *FirestoreProjectsDatabasesListSecurityOption1 `security:"option"`
	Option2 *FirestoreProjectsDatabasesListSecurityOption2 `security:"option"`
}

type FirestoreProjectsDatabasesListRequest struct {
	PathParams  FirestoreProjectsDatabasesListPathParams
	QueryParams FirestoreProjectsDatabasesListQueryParams
	Security    FirestoreProjectsDatabasesListSecurity
}

type FirestoreProjectsDatabasesListResponse struct {
	ContentType                                 string
	GoogleFirestoreAdminV1ListDatabasesResponse *shared.GoogleFirestoreAdminV1ListDatabasesResponse
	StatusCode                                  int64
}
