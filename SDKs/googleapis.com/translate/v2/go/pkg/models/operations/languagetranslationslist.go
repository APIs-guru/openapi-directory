package operations

import (
	"openapi/pkg/models/shared"
)

type LanguageTranslationsListFormatEnum string

const (
	LanguageTranslationsListFormatEnumHTML LanguageTranslationsListFormatEnum = "html"
	LanguageTranslationsListFormatEnumText LanguageTranslationsListFormatEnum = "text"
)

type LanguageTranslationsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                   `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                             `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                     `queryParam:"style=form,explode=true,name=alt"`
	BearerToken    *string                             `queryParam:"style=form,explode=true,name=bearer_token"`
	Callback       *string                             `queryParam:"style=form,explode=true,name=callback"`
	Cid            []string                            `queryParam:"style=form,explode=true,name=cid"`
	Fields         *string                             `queryParam:"style=form,explode=true,name=fields"`
	Format         *LanguageTranslationsListFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Key            *string                             `queryParam:"style=form,explode=true,name=key"`
	Model          *string                             `queryParam:"style=form,explode=true,name=model"`
	OauthToken     *string                             `queryParam:"style=form,explode=true,name=oauth_token"`
	Pp             *bool                               `queryParam:"style=form,explode=true,name=pp"`
	PrettyPrint    *bool                               `queryParam:"style=form,explode=true,name=prettyPrint"`
	Q              []string                            `queryParam:"style=form,explode=true,name=q"`
	QuotaUser      *string                             `queryParam:"style=form,explode=true,name=quotaUser"`
	Source         *string                             `queryParam:"style=form,explode=true,name=source"`
	Target         string                              `queryParam:"style=form,explode=true,name=target"`
	UploadType     *string                             `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                             `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type LanguageTranslationsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LanguageTranslationsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LanguageTranslationsListSecurity struct {
	Option1 *LanguageTranslationsListSecurityOption1 `security:"option"`
	Option2 *LanguageTranslationsListSecurityOption2 `security:"option"`
}

type LanguageTranslationsListRequest struct {
	QueryParams LanguageTranslationsListQueryParams
	Security    LanguageTranslationsListSecurity
}

type LanguageTranslationsListResponse struct {
	ContentType              string
	StatusCode               int64
	TranslationsListResponse *shared.TranslationsListResponse
}
