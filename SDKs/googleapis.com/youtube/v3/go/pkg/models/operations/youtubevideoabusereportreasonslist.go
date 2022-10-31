package operations

import (
"openapi/pkg/models/shared")

type YoutubeVideoAbuseReportReasonsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Hl *string `queryParam:"style=form,explode=true,name=hl"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    Part []string `queryParam:"style=form,explode=true,name=part"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeVideoAbuseReportReasonsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeVideoAbuseReportReasonsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeVideoAbuseReportReasonsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeVideoAbuseReportReasonsListSecurity struct {
    Option1 *YoutubeVideoAbuseReportReasonsListSecurityOption1 `security:"option"`
    Option2 *YoutubeVideoAbuseReportReasonsListSecurityOption2 `security:"option"`
    Option3 *YoutubeVideoAbuseReportReasonsListSecurityOption3 `security:"option"`
    
}

type YoutubeVideoAbuseReportReasonsListRequest struct {
    QueryParams YoutubeVideoAbuseReportReasonsListQueryParams 
    Security YoutubeVideoAbuseReportReasonsListSecurity 
    
}

type YoutubeVideoAbuseReportReasonsListResponse struct {
    ContentType string 
    StatusCode int64 
    VideoAbuseReportReasonListResponse *shared.VideoAbuseReportReasonListResponse 
    
}

