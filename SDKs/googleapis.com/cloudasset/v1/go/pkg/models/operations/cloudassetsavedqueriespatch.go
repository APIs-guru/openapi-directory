package operations

import (
	"openapi/pkg/models/shared"
)

type CloudassetSavedQueriesPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudassetSavedQueriesPatchQueryParams struct {
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

type CloudassetSavedQueriesPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudassetSavedQueriesPatchRequest struct {
	PathParams  CloudassetSavedQueriesPatchPathParams
	QueryParams CloudassetSavedQueriesPatchQueryParams
	Request     *shared.SavedQueryInput `request:"mediaType=application/json"`
	Security    CloudassetSavedQueriesPatchSecurity
}

type CloudassetSavedQueriesPatchResponse struct {
	ContentType string
	SavedQuery  *shared.SavedQuery
	StatusCode  int64
}
