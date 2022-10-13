package operations

import (
	"openapi/pkg/models/shared"
)

type FirestoreProjectsDatabasesExportDocumentsPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type FirestoreProjectsDatabasesExportDocumentsQueryParams struct {
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

type FirestoreProjectsDatabasesExportDocumentsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesExportDocumentsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirestoreProjectsDatabasesExportDocumentsSecurity struct {
	Option1 *FirestoreProjectsDatabasesExportDocumentsSecurityOption1 `security:"option"`
	Option2 *FirestoreProjectsDatabasesExportDocumentsSecurityOption2 `security:"option"`
}

type FirestoreProjectsDatabasesExportDocumentsRequest struct {
	PathParams  FirestoreProjectsDatabasesExportDocumentsPathParams
	QueryParams FirestoreProjectsDatabasesExportDocumentsQueryParams
	Request     *shared.GoogleFirestoreAdminV1ExportDocumentsRequest `request:"mediaType=application/json"`
	Security    FirestoreProjectsDatabasesExportDocumentsSecurity
}

type FirestoreProjectsDatabasesExportDocumentsResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
