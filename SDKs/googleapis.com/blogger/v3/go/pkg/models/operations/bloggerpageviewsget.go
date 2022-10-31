package operations

import (
"openapi/pkg/models/shared")

type BloggerPageViewsGetPathParams struct {
    BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
    
}


type BloggerPageViewsGetRangeEnum string

const (
    BloggerPageViewsGetRangeEnumAll BloggerPageViewsGetRangeEnum = "all"
BloggerPageViewsGetRangeEnumThirtyDays BloggerPageViewsGetRangeEnum = "30DAYS"
BloggerPageViewsGetRangeEnumSevenDays BloggerPageViewsGetRangeEnum = "7DAYS"
)


type BloggerPageViewsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Range []BloggerPageViewsGetRangeEnum `queryParam:"style=form,explode=true,name=range"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BloggerPageViewsGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerPageViewsGetRequest struct {
    PathParams BloggerPageViewsGetPathParams 
    QueryParams BloggerPageViewsGetQueryParams 
    Security BloggerPageViewsGetSecurity 
    
}

type BloggerPageViewsGetResponse struct {
    ContentType string 
    Pageviews *shared.Pageviews 
    StatusCode int64 
    
}

