package operations

import (
	"openapi/pkg/models/shared"
)

type FirestoreProjectsDatabasesCollectionGroupsIndexesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams struct {
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

type FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity struct {
	Option1 *FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1 `security:"option"`
	Option2 *FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption2 `security:"option"`
}

type FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest struct {
	PathParams  FirestoreProjectsDatabasesCollectionGroupsIndexesCreatePathParams
	QueryParams FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams
	Request     *shared.GoogleFirestoreAdminV1Index `request:"mediaType=application/json"`
	Security    FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity
}

type FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
