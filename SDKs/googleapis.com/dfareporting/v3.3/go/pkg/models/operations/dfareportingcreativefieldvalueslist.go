package operations

import (
"openapi/pkg/models/shared")

type DfareportingCreativeFieldValuesListPathParams struct {
    CreativeFieldID string `pathParam:"style=simple,explode=false,name=creativeFieldId"`
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingCreativeFieldValuesListSortFieldEnum string

const (
    DfareportingCreativeFieldValuesListSortFieldEnumID DfareportingCreativeFieldValuesListSortFieldEnum = "ID"
DfareportingCreativeFieldValuesListSortFieldEnumValue DfareportingCreativeFieldValuesListSortFieldEnum = "VALUE"
)



type DfareportingCreativeFieldValuesListSortOrderEnum string

const (
    DfareportingCreativeFieldValuesListSortOrderEnumAscending DfareportingCreativeFieldValuesListSortOrderEnum = "ASCENDING"
DfareportingCreativeFieldValuesListSortOrderEnumDescending DfareportingCreativeFieldValuesListSortOrderEnum = "DESCENDING"
)


type DfareportingCreativeFieldValuesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SearchString *string `queryParam:"style=form,explode=true,name=searchString"`
    SortField *DfareportingCreativeFieldValuesListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingCreativeFieldValuesListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingCreativeFieldValuesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingCreativeFieldValuesListRequest struct {
    PathParams DfareportingCreativeFieldValuesListPathParams 
    QueryParams DfareportingCreativeFieldValuesListQueryParams 
    Security DfareportingCreativeFieldValuesListSecurity 
    
}

type DfareportingCreativeFieldValuesListResponse struct {
    ContentType string 
    CreativeFieldValuesListResponse *shared.CreativeFieldValuesListResponse 
    StatusCode int64 
    
}

