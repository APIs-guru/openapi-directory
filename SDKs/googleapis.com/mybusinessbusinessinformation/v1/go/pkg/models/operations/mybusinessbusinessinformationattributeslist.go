package operations

import (
"openapi/pkg/models/shared")

type MybusinessbusinessinformationAttributesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CategoryName *string `queryParam:"style=form,explode=true,name=categoryName"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LanguageCode *string `queryParam:"style=form,explode=true,name=languageCode"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    Parent *string `queryParam:"style=form,explode=true,name=parent"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RegionCode *string `queryParam:"style=form,explode=true,name=regionCode"`
    ShowAll *bool `queryParam:"style=form,explode=true,name=showAll"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type MybusinessbusinessinformationAttributesListRequest struct {
    QueryParams MybusinessbusinessinformationAttributesListQueryParams 
    
}

type MybusinessbusinessinformationAttributesListResponse struct {
    ContentType string 
    ListAttributeMetadataResponse *shared.ListAttributeMetadataResponse 
    StatusCode int64 
    
}

