package operations

import (
"openapi/pkg/models/shared")

type DfareportingPlacementStrategiesListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingPlacementStrategiesListSortFieldEnum string

const (
    DfareportingPlacementStrategiesListSortFieldEnumID DfareportingPlacementStrategiesListSortFieldEnum = "ID"
DfareportingPlacementStrategiesListSortFieldEnumName DfareportingPlacementStrategiesListSortFieldEnum = "NAME"
)



type DfareportingPlacementStrategiesListSortOrderEnum string

const (
    DfareportingPlacementStrategiesListSortOrderEnumAscending DfareportingPlacementStrategiesListSortOrderEnum = "ASCENDING"
DfareportingPlacementStrategiesListSortOrderEnumDescending DfareportingPlacementStrategiesListSortOrderEnum = "DESCENDING"
)


type DfareportingPlacementStrategiesListQueryParams struct {
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
    SortField *DfareportingPlacementStrategiesListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingPlacementStrategiesListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingPlacementStrategiesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingPlacementStrategiesListRequest struct {
    PathParams DfareportingPlacementStrategiesListPathParams 
    QueryParams DfareportingPlacementStrategiesListQueryParams 
    Security DfareportingPlacementStrategiesListSecurity 
    
}

type DfareportingPlacementStrategiesListResponse struct {
    ContentType string 
    PlacementStrategiesListResponse *shared.PlacementStrategiesListResponse 
    StatusCode int64 
    
}

