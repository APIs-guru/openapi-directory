package operations

import (
"openapi/pkg/models/shared")

type ContentOrderreportsListdisbursementsPathParams struct {
    MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
    
}

type ContentOrderreportsListdisbursementsQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DisbursementEndDate *string `queryParam:"style=form,explode=true,name=disbursementEndDate"`
    DisbursementStartDate *string `queryParam:"style=form,explode=true,name=disbursementStartDate"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ContentOrderreportsListdisbursementsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContentOrderreportsListdisbursementsRequest struct {
    PathParams ContentOrderreportsListdisbursementsPathParams 
    QueryParams ContentOrderreportsListdisbursementsQueryParams 
    Security ContentOrderreportsListdisbursementsSecurity 
    
}

type ContentOrderreportsListdisbursementsResponse struct {
    ContentType string 
    OrderreportsListDisbursementsResponse *shared.OrderreportsListDisbursementsResponse 
    StatusCode int64 
    
}

