package operations

import (
"openapi/pkg/models/shared")

type CloudsearchStatsGetIndexQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    FromDateDay *int64 `queryParam:"style=form,explode=true,name=fromDate.day"`
    FromDateMonth *int64 `queryParam:"style=form,explode=true,name=fromDate.month"`
    FromDateYear *int64 `queryParam:"style=form,explode=true,name=fromDate.year"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ToDateDay *int64 `queryParam:"style=form,explode=true,name=toDate.day"`
    ToDateMonth *int64 `queryParam:"style=form,explode=true,name=toDate.month"`
    ToDateYear *int64 `queryParam:"style=form,explode=true,name=toDate.year"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudsearchStatsGetIndexSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchStatsGetIndexSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchStatsGetIndexSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchStatsGetIndexSecurity struct {
    Option1 *CloudsearchStatsGetIndexSecurityOption1 `security:"option"`
    Option2 *CloudsearchStatsGetIndexSecurityOption2 `security:"option"`
    Option3 *CloudsearchStatsGetIndexSecurityOption3 `security:"option"`
    
}

type CloudsearchStatsGetIndexRequest struct {
    QueryParams CloudsearchStatsGetIndexQueryParams 
    Security CloudsearchStatsGetIndexSecurity 
    
}

type CloudsearchStatsGetIndexResponse struct {
    ContentType string 
    GetCustomerIndexStatsResponse *shared.GetCustomerIndexStatsResponse 
    StatusCode int64 
    
}

