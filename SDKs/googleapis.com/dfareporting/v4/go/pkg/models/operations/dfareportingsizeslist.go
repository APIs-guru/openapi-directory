package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingSizesListPathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingSizesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Height         *int64            `queryParam:"style=form,explode=true,name=height"`
	IabStandard    *bool             `queryParam:"style=form,explode=true,name=iabStandard"`
	Ids            []string          `queryParam:"style=form,explode=true,name=ids"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	Width          *int64            `queryParam:"style=form,explode=true,name=width"`
}

type DfareportingSizesListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingSizesListRequest struct {
	PathParams  DfareportingSizesListPathParams
	QueryParams DfareportingSizesListQueryParams
	Security    DfareportingSizesListSecurity
}

type DfareportingSizesListResponse struct {
	ContentType       string
	SizesListResponse *shared.SizesListResponse
	StatusCode        int64
}
