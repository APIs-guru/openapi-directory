package operations

import (
"openapi/pkg/models/shared")

type CloudbuildProjectsLocationsTriggersWebhookPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CloudbuildProjectsLocationsTriggersWebhookQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    ProjectID *string `queryParam:"style=form,explode=true,name=projectId"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Secret *string `queryParam:"style=form,explode=true,name=secret"`
    Trigger *string `queryParam:"style=form,explode=true,name=trigger"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudbuildProjectsLocationsTriggersWebhookRequest struct {
    PathParams CloudbuildProjectsLocationsTriggersWebhookPathParams 
    QueryParams CloudbuildProjectsLocationsTriggersWebhookQueryParams 
    Request *shared.HTTPBody `request:"mediaType=application/json"`
    
}

type CloudbuildProjectsLocationsTriggersWebhookResponse struct {
    ContentType string 
    ReceiveTriggerWebhookResponse map[string]interface{} 
    StatusCode int64 
    
}

