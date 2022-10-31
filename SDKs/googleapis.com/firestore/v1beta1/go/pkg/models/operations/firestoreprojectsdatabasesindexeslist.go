package operations

import (
	"openapi/pkg/models/shared"
)

type FirestoreProjectsDatabasesIndexesListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type FirestoreProjectsDatabasesIndexesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string           `queryParam:"style=form,explode=true,name=filter"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type FirestoreProjectsDatabasesIndexesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesIndexesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesIndexesListSecurity struct {
	Option1 *FirestoreProjectsDatabasesIndexesListSecurityOption1 `security:"option"`
	Option2 *FirestoreProjectsDatabasesIndexesListSecurityOption2 `security:"option"`
}

type FirestoreProjectsDatabasesIndexesListRequest struct {
	PathParams  FirestoreProjectsDatabasesIndexesListPathParams
	QueryParams FirestoreProjectsDatabasesIndexesListQueryParams
	Security    FirestoreProjectsDatabasesIndexesListSecurity
}

type FirestoreProjectsDatabasesIndexesListResponse struct {
	ContentType                                    string
	GoogleFirestoreAdminV1beta1ListIndexesResponse *shared.GoogleFirestoreAdminV1beta1ListIndexesResponse
	StatusCode                                     int64
}
