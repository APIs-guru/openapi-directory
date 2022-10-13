package operations

import (
	"openapi/pkg/models/shared"
)

type DocsDocumentsBatchUpdatePathParams struct {
	DocumentID string `pathParam:"style=simple,explode=false,name=documentId"`
}

type DocsDocumentsBatchUpdateQueryParams struct {
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

type DocsDocumentsBatchUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DocsDocumentsBatchUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DocsDocumentsBatchUpdateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DocsDocumentsBatchUpdateSecurity struct {
	Option1 *DocsDocumentsBatchUpdateSecurityOption1 `security:"option"`
	Option2 *DocsDocumentsBatchUpdateSecurityOption2 `security:"option"`
	Option3 *DocsDocumentsBatchUpdateSecurityOption3 `security:"option"`
}

type DocsDocumentsBatchUpdateRequest struct {
	PathParams  DocsDocumentsBatchUpdatePathParams
	QueryParams DocsDocumentsBatchUpdateQueryParams
	Request     *shared.BatchUpdateDocumentRequest `request:"mediaType=application/json"`
	Security    DocsDocumentsBatchUpdateSecurity
}

type DocsDocumentsBatchUpdateResponse struct {
	BatchUpdateDocumentResponse *shared.BatchUpdateDocumentResponse
	ContentType                 string
	StatusCode                  int64
}
