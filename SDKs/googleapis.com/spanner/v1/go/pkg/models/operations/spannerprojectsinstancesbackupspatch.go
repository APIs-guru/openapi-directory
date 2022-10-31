package operations

import (
"openapi/pkg/models/shared")

type SpannerProjectsInstancesBackupsPatchPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type SpannerProjectsInstancesBackupsPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SpannerProjectsInstancesBackupsPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesBackupsPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesBackupsPatchSecurity struct {
    Option1 *SpannerProjectsInstancesBackupsPatchSecurityOption1 `security:"option"`
    Option2 *SpannerProjectsInstancesBackupsPatchSecurityOption2 `security:"option"`
    
}

type SpannerProjectsInstancesBackupsPatchRequest struct {
    PathParams SpannerProjectsInstancesBackupsPatchPathParams 
    QueryParams SpannerProjectsInstancesBackupsPatchQueryParams 
    Request *shared.Backup `request:"mediaType=application/json"`
    Security SpannerProjectsInstancesBackupsPatchSecurity 
    
}

type SpannerProjectsInstancesBackupsPatchResponse struct {
    Backup *shared.Backup 
    ContentType string 
    StatusCode int64 
    
}

