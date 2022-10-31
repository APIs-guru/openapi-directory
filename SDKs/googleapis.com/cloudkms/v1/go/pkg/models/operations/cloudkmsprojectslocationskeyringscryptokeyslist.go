package operations

import (
"openapi/pkg/models/shared")

type CloudkmsProjectsLocationsKeyRingsCryptoKeysListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum string

const (
    CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnumCryptoKeyVersionViewUnspecified CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum = "CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED"
CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnumFull CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum = "FULL"
)


type CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    VersionView *CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum `queryParam:"style=form,explode=true,name=versionView"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity struct {
    Option1 *CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1 `security:"option"`
    Option2 *CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2 `security:"option"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest struct {
    PathParams CloudkmsProjectsLocationsKeyRingsCryptoKeysListPathParams 
    QueryParams CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams 
    Security CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity 
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse struct {
    ContentType string 
    ListCryptoKeysResponse *shared.ListCryptoKeysResponse 
    StatusCode int64 
    
}

