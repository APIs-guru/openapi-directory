package operations

import (
"openapi/pkg/models/shared")

type DfareportingTargetingTemplatesListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingTargetingTemplatesListSortFieldEnum string

const (
    DfareportingTargetingTemplatesListSortFieldEnumID DfareportingTargetingTemplatesListSortFieldEnum = "ID"
DfareportingTargetingTemplatesListSortFieldEnumName DfareportingTargetingTemplatesListSortFieldEnum = "NAME"
)



type DfareportingTargetingTemplatesListSortOrderEnum string

const (
    DfareportingTargetingTemplatesListSortOrderEnumAscending DfareportingTargetingTemplatesListSortOrderEnum = "ASCENDING"
DfareportingTargetingTemplatesListSortOrderEnumDescending DfareportingTargetingTemplatesListSortOrderEnum = "DESCENDING"
)


type DfareportingTargetingTemplatesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    AdvertiserID *string `queryParam:"style=form,explode=true,name=advertiserId"`
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
    SortField *DfareportingTargetingTemplatesListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingTargetingTemplatesListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingTargetingTemplatesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingTargetingTemplatesListRequest struct {
    PathParams DfareportingTargetingTemplatesListPathParams 
    QueryParams DfareportingTargetingTemplatesListQueryParams 
    Security DfareportingTargetingTemplatesListSecurity 
    
}

type DfareportingTargetingTemplatesListResponse struct {
    ContentType string 
    StatusCode int64 
    TargetingTemplatesListResponse *shared.TargetingTemplatesListResponse 
    
}

