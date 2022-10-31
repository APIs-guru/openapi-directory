package operations

import (
	"openapi/pkg/models/shared"
)

type BooksLayersGetPathParams struct {
	SummaryID string `pathParam:"style=simple,explode=false,name=summaryId"`
	VolumeID  string `pathParam:"style=simple,explode=false,name=volumeId"`
}

type BooksLayersGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	ContentVersion *string           `queryParam:"style=form,explode=true,name=contentVersion"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Source         *string           `queryParam:"style=form,explode=true,name=source"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BooksLayersGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksLayersGetRequest struct {
	PathParams  BooksLayersGetPathParams
	QueryParams BooksLayersGetQueryParams
	Security    BooksLayersGetSecurity
}

type BooksLayersGetResponse struct {
	ContentType  string
	Layersummary *shared.Layersummary
	StatusCode   int64
}
