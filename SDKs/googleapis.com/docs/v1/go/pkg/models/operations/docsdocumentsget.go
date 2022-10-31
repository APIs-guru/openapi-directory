package operations

import (
	"openapi/pkg/models/shared"
)

type DocsDocumentsGetPathParams struct {
	DocumentID string `pathParam:"style=simple,explode=false,name=documentId"`
}

type DocsDocumentsGetSuggestionsViewModeEnum string

const (
	DocsDocumentsGetSuggestionsViewModeEnumDefaultForCurrentAccess    DocsDocumentsGetSuggestionsViewModeEnum = "DEFAULT_FOR_CURRENT_ACCESS"
	DocsDocumentsGetSuggestionsViewModeEnumSuggestionsInline          DocsDocumentsGetSuggestionsViewModeEnum = "SUGGESTIONS_INLINE"
	DocsDocumentsGetSuggestionsViewModeEnumPreviewSuggestionsAccepted DocsDocumentsGetSuggestionsViewModeEnum = "PREVIEW_SUGGESTIONS_ACCEPTED"
	DocsDocumentsGetSuggestionsViewModeEnumPreviewWithoutSuggestions  DocsDocumentsGetSuggestionsViewModeEnum = "PREVIEW_WITHOUT_SUGGESTIONS"
)

type DocsDocumentsGetQueryParams struct {
	DollarXgafv         *shared.XgafvEnum                        `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken         *string                                  `queryParam:"style=form,explode=true,name=access_token"`
	Alt                 *shared.AltEnum                          `queryParam:"style=form,explode=true,name=alt"`
	Callback            *string                                  `queryParam:"style=form,explode=true,name=callback"`
	Fields              *string                                  `queryParam:"style=form,explode=true,name=fields"`
	Key                 *string                                  `queryParam:"style=form,explode=true,name=key"`
	OauthToken          *string                                  `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint         *bool                                    `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser           *string                                  `queryParam:"style=form,explode=true,name=quotaUser"`
	SuggestionsViewMode *DocsDocumentsGetSuggestionsViewModeEnum `queryParam:"style=form,explode=true,name=suggestionsViewMode"`
	UploadType          *string                                  `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol      *string                                  `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DocsDocumentsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DocsDocumentsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DocsDocumentsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DocsDocumentsGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DocsDocumentsGetSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DocsDocumentsGetSecurity struct {
	Option1 *DocsDocumentsGetSecurityOption1 `security:"option"`
	Option2 *DocsDocumentsGetSecurityOption2 `security:"option"`
	Option3 *DocsDocumentsGetSecurityOption3 `security:"option"`
	Option4 *DocsDocumentsGetSecurityOption4 `security:"option"`
	Option5 *DocsDocumentsGetSecurityOption5 `security:"option"`
}

type DocsDocumentsGetRequest struct {
	PathParams  DocsDocumentsGetPathParams
	QueryParams DocsDocumentsGetQueryParams
	Security    DocsDocumentsGetSecurity
}

type DocsDocumentsGetResponse struct {
	ContentType string
	Document    *shared.Document
	StatusCode  int64
}
