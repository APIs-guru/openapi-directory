package operations

import (
"openapi/pkg/models/shared")

type BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MonthlyRangeEndMonthDay *int64 `queryParam:"style=form,explode=true,name=monthlyRange.endMonth.day"`
    MonthlyRangeEndMonthMonth *int64 `queryParam:"style=form,explode=true,name=monthlyRange.endMonth.month"`
    MonthlyRangeEndMonthYear *int64 `queryParam:"style=form,explode=true,name=monthlyRange.endMonth.year"`
    MonthlyRangeStartMonthDay *int64 `queryParam:"style=form,explode=true,name=monthlyRange.startMonth.day"`
    MonthlyRangeStartMonthMonth *int64 `queryParam:"style=form,explode=true,name=monthlyRange.startMonth.month"`
    MonthlyRangeStartMonthYear *int64 `queryParam:"style=form,explode=true,name=monthlyRange.startMonth.year"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest struct {
    PathParams BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams 
    QueryParams BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams 
    
}

type BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse struct {
    ContentType string 
    ListSearchKeywordImpressionsMonthlyResponse *shared.ListSearchKeywordImpressionsMonthlyResponse 
    StatusCode int64 
    
}

