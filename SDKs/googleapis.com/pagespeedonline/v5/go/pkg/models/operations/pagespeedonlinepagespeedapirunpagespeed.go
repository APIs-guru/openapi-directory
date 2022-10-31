package operations

import (
"openapi/pkg/models/shared")


type PagespeedonlinePagespeedapiRunpagespeedCategoryEnum string

const (
    PagespeedonlinePagespeedapiRunpagespeedCategoryEnumCategoryUnspecified PagespeedonlinePagespeedapiRunpagespeedCategoryEnum = "CATEGORY_UNSPECIFIED"
PagespeedonlinePagespeedapiRunpagespeedCategoryEnumAccessibility PagespeedonlinePagespeedapiRunpagespeedCategoryEnum = "ACCESSIBILITY"
PagespeedonlinePagespeedapiRunpagespeedCategoryEnumBestPractices PagespeedonlinePagespeedapiRunpagespeedCategoryEnum = "BEST_PRACTICES"
PagespeedonlinePagespeedapiRunpagespeedCategoryEnumPerformance PagespeedonlinePagespeedapiRunpagespeedCategoryEnum = "PERFORMANCE"
PagespeedonlinePagespeedapiRunpagespeedCategoryEnumPwa PagespeedonlinePagespeedapiRunpagespeedCategoryEnum = "PWA"
PagespeedonlinePagespeedapiRunpagespeedCategoryEnumSeo PagespeedonlinePagespeedapiRunpagespeedCategoryEnum = "SEO"
)



type PagespeedonlinePagespeedapiRunpagespeedStrategyEnum string

const (
    PagespeedonlinePagespeedapiRunpagespeedStrategyEnumStrategyUnspecified PagespeedonlinePagespeedapiRunpagespeedStrategyEnum = "STRATEGY_UNSPECIFIED"
PagespeedonlinePagespeedapiRunpagespeedStrategyEnumDesktop PagespeedonlinePagespeedapiRunpagespeedStrategyEnum = "DESKTOP"
PagespeedonlinePagespeedapiRunpagespeedStrategyEnumMobile PagespeedonlinePagespeedapiRunpagespeedStrategyEnum = "MOBILE"
)


type PagespeedonlinePagespeedapiRunpagespeedQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CaptchaToken *string `queryParam:"style=form,explode=true,name=captchaToken"`
    Category []PagespeedonlinePagespeedapiRunpagespeedCategoryEnum `queryParam:"style=form,explode=true,name=category"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Strategy *PagespeedonlinePagespeedapiRunpagespeedStrategyEnum `queryParam:"style=form,explode=true,name=strategy"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    URL string `queryParam:"style=form,explode=true,name=url"`
    UtmCampaign *string `queryParam:"style=form,explode=true,name=utm_campaign"`
    UtmSource *string `queryParam:"style=form,explode=true,name=utm_source"`
    
}

type PagespeedonlinePagespeedapiRunpagespeedSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PagespeedonlinePagespeedapiRunpagespeedRequest struct {
    QueryParams PagespeedonlinePagespeedapiRunpagespeedQueryParams 
    Security PagespeedonlinePagespeedapiRunpagespeedSecurity 
    
}

type PagespeedonlinePagespeedapiRunpagespeedResponse struct {
    ContentType string 
    PagespeedAPIPagespeedResponseV5 *shared.PagespeedAPIPagespeedResponseV5 
    StatusCode int64 
    
}

