package operations

import (
"openapi/pkg/models/shared")

type RetailProjectsLocationsCatalogsServingConfigsAddControlPathParams struct {
    ServingConfig string `pathParam:"style=simple,explode=false,name=servingConfig"`
    
}

type RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams struct {
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

type RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RetailProjectsLocationsCatalogsServingConfigsAddControlRequest struct {
    PathParams RetailProjectsLocationsCatalogsServingConfigsAddControlPathParams 
    QueryParams RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams 
    Request *shared.GoogleCloudRetailV2AddControlRequest `request:"mediaType=application/json"`
    Security RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity 
    
}

type RetailProjectsLocationsCatalogsServingConfigsAddControlResponse struct {
    ContentType string 
    GoogleCloudRetailV2ServingConfig *shared.GoogleCloudRetailV2ServingConfig 
    StatusCode int64 
    
}

