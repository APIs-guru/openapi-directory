package operations

import (
	"openapi/pkg/models/shared"
)

type DoubleclicksearchConversionGetPathParams struct {
	AdvertiserID    string `pathParam:"style=simple,explode=false,name=advertiserId"`
	AgencyID        string `pathParam:"style=simple,explode=false,name=agencyId"`
	EngineAccountID string `pathParam:"style=simple,explode=false,name=engineAccountId"`
}

type DoubleclicksearchConversionGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	AdGroupID      *string           `queryParam:"style=form,explode=true,name=adGroupId"`
	AdID           *string           `queryParam:"style=form,explode=true,name=adId"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	CampaignID     *string           `queryParam:"style=form,explode=true,name=campaignId"`
	CriterionID    *string           `queryParam:"style=form,explode=true,name=criterionId"`
	CustomerID     *string           `queryParam:"style=form,explode=true,name=customerId"`
	EndDate        int64             `queryParam:"style=form,explode=true,name=endDate"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RowCount       int64             `queryParam:"style=form,explode=true,name=rowCount"`
	StartDate      int64             `queryParam:"style=form,explode=true,name=startDate"`
	StartRow       int64             `queryParam:"style=form,explode=true,name=startRow"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DoubleclicksearchConversionGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DoubleclicksearchConversionGetRequest struct {
	PathParams  DoubleclicksearchConversionGetPathParams
	QueryParams DoubleclicksearchConversionGetQueryParams
	Security    DoubleclicksearchConversionGetSecurity
}

type DoubleclicksearchConversionGetResponse struct {
	ContentType    string
	ConversionList *shared.ConversionList
	StatusCode     int64
}
