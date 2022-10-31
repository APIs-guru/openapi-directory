package operations

import (
"openapi/pkg/models/shared")

type ResourcesettingsProjectsSettingsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type ResourcesettingsProjectsSettingsListViewEnum string

const (
    ResourcesettingsProjectsSettingsListViewEnumSettingViewUnspecified ResourcesettingsProjectsSettingsListViewEnum = "SETTING_VIEW_UNSPECIFIED"
ResourcesettingsProjectsSettingsListViewEnumSettingViewBasic ResourcesettingsProjectsSettingsListViewEnum = "SETTING_VIEW_BASIC"
ResourcesettingsProjectsSettingsListViewEnumSettingViewEffectiveValue ResourcesettingsProjectsSettingsListViewEnum = "SETTING_VIEW_EFFECTIVE_VALUE"
ResourcesettingsProjectsSettingsListViewEnumSettingViewLocalValue ResourcesettingsProjectsSettingsListViewEnum = "SETTING_VIEW_LOCAL_VALUE"
)


type ResourcesettingsProjectsSettingsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *ResourcesettingsProjectsSettingsListViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type ResourcesettingsProjectsSettingsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ResourcesettingsProjectsSettingsListRequest struct {
    PathParams ResourcesettingsProjectsSettingsListPathParams 
    QueryParams ResourcesettingsProjectsSettingsListQueryParams 
    Security ResourcesettingsProjectsSettingsListSecurity 
    
}

type ResourcesettingsProjectsSettingsListResponse struct {
    ContentType string 
    GoogleCloudResourcesettingsV1ListSettingsResponse *shared.GoogleCloudResourcesettingsV1ListSettingsResponse 
    StatusCode int64 
    
}

