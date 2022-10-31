package operations

import (
	"openapi/pkg/models/shared"
)

type TranslateProjectsLocationsGlossariesGlossaryEntriesPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams struct {
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

type TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity struct {
	Option1 *TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1 `security:"option"`
	Option2 *TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption2 `security:"option"`
}

type TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest struct {
	PathParams  TranslateProjectsLocationsGlossariesGlossaryEntriesPatchPathParams
	QueryParams TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams
	Request     *shared.GlossaryEntry `request:"mediaType=application/json"`
	Security    TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity
}

type TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse struct {
	ContentType   string
	GlossaryEntry *shared.GlossaryEntry
	StatusCode    int64
}
