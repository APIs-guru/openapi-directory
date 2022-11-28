package operations

import (
	"openapi/pkg/models/shared"
)

type DoubleclicksearchConversionGetByCustomerIDPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
}

type DoubleclicksearchConversionGetByCustomerIDQueryParams struct {
	DollarXgafv     *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken     *string           `queryParam:"style=form,explode=true,name=access_token"`
	AdGroupID       *string           `queryParam:"style=form,explode=true,name=adGroupId"`
	AdID            *string           `queryParam:"style=form,explode=true,name=adId"`
	AdvertiserID    *string           `queryParam:"style=form,explode=true,name=advertiserId"`
	AgencyID        *string           `queryParam:"style=form,explode=true,name=agencyId"`
	Alt             *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback        *string           `queryParam:"style=form,explode=true,name=callback"`
	CampaignID      *string           `queryParam:"style=form,explode=true,name=campaignId"`
	CriterionID     *string           `queryParam:"style=form,explode=true,name=criterionId"`
	EndDate         int64             `queryParam:"style=form,explode=true,name=endDate"`
	EngineAccountID *string           `queryParam:"style=form,explode=true,name=engineAccountId"`
	Fields          *string           `queryParam:"style=form,explode=true,name=fields"`
	Key             *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken      *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint     *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser       *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RowCount        int64             `queryParam:"style=form,explode=true,name=rowCount"`
	StartDate       int64             `queryParam:"style=form,explode=true,name=startDate"`
	StartRow        int64             `queryParam:"style=form,explode=true,name=startRow"`
	UploadType      *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol  *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DoubleclicksearchConversionGetByCustomerIDSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DoubleclicksearchConversionGetByCustomerIDRequest struct {
	PathParams  DoubleclicksearchConversionGetByCustomerIDPathParams
	QueryParams DoubleclicksearchConversionGetByCustomerIDQueryParams
	Security    DoubleclicksearchConversionGetByCustomerIDSecurity
}

type DoubleclicksearchConversionGetByCustomerIDResponse struct {
	ContentType    string
	ConversionList *shared.ConversionList
	StatusCode     int64
}
