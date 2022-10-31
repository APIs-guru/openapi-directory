package operations



type PostAppsAppIDVersionsVersionStatusPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    Version int64 `pathParam:"style=simple,explode=false,name=version"`
    
}


type PostAppsAppIDVersionsVersionStatusModifiedByEnum string

const (
    PostAppsAppIDVersionsVersionStatusModifiedByEnumDeveloper PostAppsAppIDVersionsVersionStatusModifiedByEnum = "developer"
PostAppsAppIDVersionsVersionStatusModifiedByEnumAdministrator PostAppsAppIDVersionsVersionStatusModifiedByEnum = "administrator"
)



type PostAppsAppIDVersionsVersionStatusStatusEnum string

const (
    PostAppsAppIDVersionsVersionStatusStatusEnumInReview PostAppsAppIDVersionsVersionStatusStatusEnum = "inReview"
PostAppsAppIDVersionsVersionStatusStatusEnumApproved PostAppsAppIDVersionsVersionStatusStatusEnum = "approved"
PostAppsAppIDVersionsVersionStatusStatusEnumSuspended PostAppsAppIDVersionsVersionStatusStatusEnum = "suspended"
PostAppsAppIDVersionsVersionStatusStatusEnumRejected PostAppsAppIDVersionsVersionStatusStatusEnum = "rejected"
)


type PostAppsAppIDVersionsVersionStatusQueryParams struct {
    DeveloperID *string `queryParam:"style=form,explode=true,name=developerId"`
    ModifiedBy *PostAppsAppIDVersionsVersionStatusModifiedByEnum `queryParam:"style=form,explode=true,name=modifiedBy"`
    Reason *string `queryParam:"style=form,explode=true,name=reason"`
    Status *PostAppsAppIDVersionsVersionStatusStatusEnum `queryParam:"style=form,explode=true,name=status"`
    
}

type PostAppsAppIDVersionsVersionStatusRequest struct {
    PathParams PostAppsAppIDVersionsVersionStatusPathParams 
    QueryParams PostAppsAppIDVersionsVersionStatusQueryParams 
    
}

type PostAppsAppIDVersionsVersionStatusResponse struct {
    ContentType string 
    StatusCode int64 
    
}

