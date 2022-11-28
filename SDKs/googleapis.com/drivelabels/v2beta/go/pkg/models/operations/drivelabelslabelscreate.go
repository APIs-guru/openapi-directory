package operations

import (
	"openapi/pkg/models/shared"
)

type DrivelabelsLabelsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	LanguageCode   *string           `queryParam:"style=form,explode=true,name=languageCode"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	UseAdminAccess *bool             `queryParam:"style=form,explode=true,name=useAdminAccess"`
}

type DrivelabelsLabelsCreateRequest struct {
	QueryParams DrivelabelsLabelsCreateQueryParams
	Request     *shared.GoogleAppsDriveLabelsV2betaLabelInput `request:"mediaType=application/json"`
}

type DrivelabelsLabelsCreateResponse struct {
	ContentType                      string
	GoogleAppsDriveLabelsV2betaLabel *shared.GoogleAppsDriveLabelsV2betaLabel
	StatusCode                       int64
}
