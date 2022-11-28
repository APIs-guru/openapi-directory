package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoFirstAndThirdPartyAudiencesPatchPathParams struct {
	FirstAndThirdPartyAudienceID string `pathParam:"style=simple,explode=false,name=firstAndThirdPartyAudienceId"`
}

type DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	AdvertiserID   *string           `queryParam:"style=form,explode=true,name=advertiserId"`
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

type DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoFirstAndThirdPartyAudiencesPatchRequest struct {
	PathParams  DisplayvideoFirstAndThirdPartyAudiencesPatchPathParams
	QueryParams DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams
	Request     *shared.FirstAndThirdPartyAudienceInput `request:"mediaType=application/json"`
	Security    DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity
}

type DisplayvideoFirstAndThirdPartyAudiencesPatchResponse struct {
	ContentType                string
	FirstAndThirdPartyAudience *shared.FirstAndThirdPartyAudience
	StatusCode                 int64
}
