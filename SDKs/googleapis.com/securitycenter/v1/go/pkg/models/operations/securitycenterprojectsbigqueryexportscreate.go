package operations

import (
"openapi/pkg/models/shared")

type SecuritycenterProjectsBigQueryExportsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type SecuritycenterProjectsBigQueryExportsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    BigQueryExportID *string `queryParam:"style=form,explode=true,name=bigQueryExportId"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SecuritycenterProjectsBigQueryExportsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SecuritycenterProjectsBigQueryExportsCreateRequest struct {
    PathParams SecuritycenterProjectsBigQueryExportsCreatePathParams 
    QueryParams SecuritycenterProjectsBigQueryExportsCreateQueryParams 
    Request *shared.GoogleCloudSecuritycenterV1BigQueryExport `request:"mediaType=application/json"`
    Security SecuritycenterProjectsBigQueryExportsCreateSecurity 
    
}

type SecuritycenterProjectsBigQueryExportsCreateResponse struct {
    ContentType string 
    GoogleCloudSecuritycenterV1BigQueryExport *shared.GoogleCloudSecuritycenterV1BigQueryExport 
    StatusCode int64 
    
}

