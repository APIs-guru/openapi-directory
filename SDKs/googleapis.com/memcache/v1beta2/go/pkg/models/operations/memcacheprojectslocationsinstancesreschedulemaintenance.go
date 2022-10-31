package operations

import (
"openapi/pkg/models/shared")

type MemcacheProjectsLocationsInstancesRescheduleMaintenancePathParams struct {
    Instance string `pathParam:"style=simple,explode=false,name=instance"`
    
}

type MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest struct {
    PathParams MemcacheProjectsLocationsInstancesRescheduleMaintenancePathParams 
    QueryParams MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams 
    Request *shared.RescheduleMaintenanceRequest `request:"mediaType=application/json"`
    Security MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity 
    
}

type MemcacheProjectsLocationsInstancesRescheduleMaintenanceResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

