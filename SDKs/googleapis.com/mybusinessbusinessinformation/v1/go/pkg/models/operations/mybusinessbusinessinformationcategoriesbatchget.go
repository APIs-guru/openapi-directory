package operations

import (
"openapi/pkg/models/shared")


type MybusinessbusinessinformationCategoriesBatchGetViewEnum string

const (
    MybusinessbusinessinformationCategoriesBatchGetViewEnumCategoryViewUnspecified MybusinessbusinessinformationCategoriesBatchGetViewEnum = "CATEGORY_VIEW_UNSPECIFIED"
MybusinessbusinessinformationCategoriesBatchGetViewEnumBasic MybusinessbusinessinformationCategoriesBatchGetViewEnum = "BASIC"
MybusinessbusinessinformationCategoriesBatchGetViewEnumFull MybusinessbusinessinformationCategoriesBatchGetViewEnum = "FULL"
)


type MybusinessbusinessinformationCategoriesBatchGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LanguageCode *string `queryParam:"style=form,explode=true,name=languageCode"`
    Names []string `queryParam:"style=form,explode=true,name=names"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RegionCode *string `queryParam:"style=form,explode=true,name=regionCode"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *MybusinessbusinessinformationCategoriesBatchGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type MybusinessbusinessinformationCategoriesBatchGetRequest struct {
    QueryParams MybusinessbusinessinformationCategoriesBatchGetQueryParams 
    
}

type MybusinessbusinessinformationCategoriesBatchGetResponse struct {
    BatchGetCategoriesResponse *shared.BatchGetCategoriesResponse 
    ContentType string 
    StatusCode int64 
    
}

