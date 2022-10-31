package operations

import (
"openapi/pkg/models/shared")

type DfareportingMobileAppsListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingMobileAppsListDirectoriesEnum string

const (
    DfareportingMobileAppsListDirectoriesEnumUnknown DfareportingMobileAppsListDirectoriesEnum = "UNKNOWN"
DfareportingMobileAppsListDirectoriesEnumAppleAppStore DfareportingMobileAppsListDirectoriesEnum = "APPLE_APP_STORE"
DfareportingMobileAppsListDirectoriesEnumGooglePlayStore DfareportingMobileAppsListDirectoriesEnum = "GOOGLE_PLAY_STORE"
DfareportingMobileAppsListDirectoriesEnumRokuAppStore DfareportingMobileAppsListDirectoriesEnum = "ROKU_APP_STORE"
DfareportingMobileAppsListDirectoriesEnumAmazonFiretvAppStore DfareportingMobileAppsListDirectoriesEnum = "AMAZON_FIRETV_APP_STORE"
DfareportingMobileAppsListDirectoriesEnumPlaystationAppStore DfareportingMobileAppsListDirectoriesEnum = "PLAYSTATION_APP_STORE"
DfareportingMobileAppsListDirectoriesEnumAppleTvAppStore DfareportingMobileAppsListDirectoriesEnum = "APPLE_TV_APP_STORE"
DfareportingMobileAppsListDirectoriesEnumXboxAppStore DfareportingMobileAppsListDirectoriesEnum = "XBOX_APP_STORE"
DfareportingMobileAppsListDirectoriesEnumSamsungTvAppStore DfareportingMobileAppsListDirectoriesEnum = "SAMSUNG_TV_APP_STORE"
DfareportingMobileAppsListDirectoriesEnumAndroidTvAppStore DfareportingMobileAppsListDirectoriesEnum = "ANDROID_TV_APP_STORE"
DfareportingMobileAppsListDirectoriesEnumGenericCtvAppStore DfareportingMobileAppsListDirectoriesEnum = "GENERIC_CTV_APP_STORE"
)


type DfareportingMobileAppsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Directories []DfareportingMobileAppsListDirectoriesEnum `queryParam:"style=form,explode=true,name=directories"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SearchString *string `queryParam:"style=form,explode=true,name=searchString"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingMobileAppsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingMobileAppsListRequest struct {
    PathParams DfareportingMobileAppsListPathParams 
    QueryParams DfareportingMobileAppsListQueryParams 
    Security DfareportingMobileAppsListSecurity 
    
}

type DfareportingMobileAppsListResponse struct {
    ContentType string 
    MobileAppsListResponse *shared.MobileAppsListResponse 
    StatusCode int64 
    
}

