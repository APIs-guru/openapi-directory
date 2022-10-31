package operations

import (
"openapi/pkg/models/shared")

type PolyUsersAssetsListPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type PolyUsersAssetsListVisibilityEnum string

const (
    PolyUsersAssetsListVisibilityEnumVisibilityUnspecified PolyUsersAssetsListVisibilityEnum = "VISIBILITY_UNSPECIFIED"
PolyUsersAssetsListVisibilityEnumPublished PolyUsersAssetsListVisibilityEnum = "PUBLISHED"
PolyUsersAssetsListVisibilityEnumPrivate PolyUsersAssetsListVisibilityEnum = "PRIVATE"
)


type PolyUsersAssetsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Format *string `queryParam:"style=form,explode=true,name=format"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    Visibility *PolyUsersAssetsListVisibilityEnum `queryParam:"style=form,explode=true,name=visibility"`
    
}

type PolyUsersAssetsListRequest struct {
    PathParams PolyUsersAssetsListPathParams 
    QueryParams PolyUsersAssetsListQueryParams 
    
}

type PolyUsersAssetsListResponse struct {
    ContentType string 
    ListUserAssetsResponse *shared.ListUserAssetsResponse 
    StatusCode int64 
    
}

