package operations

import (
	"openapi/pkg/models/shared"
)

type FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity struct {
	Option1 *FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1 `security:"option"`
	Option2 *FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption2 `security:"option"`
}

type FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest struct {
	PathParams  FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams
	QueryParams FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams
	Request     *shared.GoogleFirestoreAdminV1beta2Field `request:"mediaType=application/json"`
	Security    FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity
}

type FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
