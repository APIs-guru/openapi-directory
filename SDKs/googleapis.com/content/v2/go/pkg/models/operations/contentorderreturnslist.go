package operations

import (
"openapi/pkg/models/shared")

type ContentOrderreturnsListPathParams struct {
    MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
    
}


type ContentOrderreturnsListOrderByEnum string

const (
    ContentOrderreturnsListOrderByEnumReturnCreationTimeDesc ContentOrderreturnsListOrderByEnum = "RETURN_CREATION_TIME_DESC"
ContentOrderreturnsListOrderByEnumReturnCreationTimeAsc ContentOrderreturnsListOrderByEnum = "RETURN_CREATION_TIME_ASC"
)


type ContentOrderreturnsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CreatedEndDate *string `queryParam:"style=form,explode=true,name=createdEndDate"`
    CreatedStartDate *string `queryParam:"style=form,explode=true,name=createdStartDate"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *ContentOrderreturnsListOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ContentOrderreturnsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContentOrderreturnsListRequest struct {
    PathParams ContentOrderreturnsListPathParams 
    QueryParams ContentOrderreturnsListQueryParams 
    Security ContentOrderreturnsListSecurity 
    
}

type ContentOrderreturnsListResponse struct {
    ContentType string 
    OrderreturnsListResponse *shared.OrderreturnsListResponse 
    StatusCode int64 
    
}

