package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsLocationsTemplatesGetPathParams struct {
    Location string `pathParam:"style=simple,explode=false,name=location"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}


type DataflowProjectsLocationsTemplatesGetViewEnum string

const (
    DataflowProjectsLocationsTemplatesGetViewEnumMetadataOnly DataflowProjectsLocationsTemplatesGetViewEnum = "METADATA_ONLY"
)


type DataflowProjectsLocationsTemplatesGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    GcsPath *string `queryParam:"style=form,explode=true,name=gcsPath"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *DataflowProjectsLocationsTemplatesGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type DataflowProjectsLocationsTemplatesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsTemplatesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsTemplatesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsTemplatesGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsTemplatesGetSecurity struct {
    Option1 *DataflowProjectsLocationsTemplatesGetSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsLocationsTemplatesGetSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsLocationsTemplatesGetSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsLocationsTemplatesGetSecurityOption4 `security:"option"`
    
}

type DataflowProjectsLocationsTemplatesGetRequest struct {
    PathParams DataflowProjectsLocationsTemplatesGetPathParams 
    QueryParams DataflowProjectsLocationsTemplatesGetQueryParams 
    Security DataflowProjectsLocationsTemplatesGetSecurity 
    
}

type DataflowProjectsLocationsTemplatesGetResponse struct {
    ContentType string 
    GetTemplateResponse *shared.GetTemplateResponse 
    StatusCode int64 
    
}

