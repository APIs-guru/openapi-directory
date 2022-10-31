package operations

import (
"openapi/pkg/models/shared")

type SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartTime *string `queryParam:"style=form,explode=true,name=startTime"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest struct {
    PathParams SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksPathParams 
    QueryParams SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams 
    Request *shared.GoogleCloudSecuritycenterV1beta1SecurityMarks `request:"mediaType=application/json"`
    Security SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity 
    
}

type SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse struct {
    ContentType string 
    GoogleCloudSecuritycenterV1beta1SecurityMarks *shared.GoogleCloudSecuritycenterV1beta1SecurityMarks 
    StatusCode int64 
    
}

