package operations

import (
	"openapi/pkg/models/shared"
)

type FirestoreProjectsDatabasesCollectionGroupsIndexesGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams struct {
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

type FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity struct {
	Option1 *FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1 `security:"option"`
	Option2 *FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption2 `security:"option"`
}

type FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest struct {
	PathParams  FirestoreProjectsDatabasesCollectionGroupsIndexesGetPathParams
	QueryParams FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams
	Security    FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity
}

type FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse struct {
	ContentType                      string
	GoogleFirestoreAdminV1beta2Index *shared.GoogleFirestoreAdminV1beta2Index
	StatusCode                       int64
}
