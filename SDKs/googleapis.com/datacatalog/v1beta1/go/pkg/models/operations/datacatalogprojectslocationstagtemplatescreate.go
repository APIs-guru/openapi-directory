package operations

import (
"openapi/pkg/models/shared")

type DatacatalogProjectsLocationsTagTemplatesCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DatacatalogProjectsLocationsTagTemplatesCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    TagTemplateID *string `queryParam:"style=form,explode=true,name=tagTemplateId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DatacatalogProjectsLocationsTagTemplatesCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DatacatalogProjectsLocationsTagTemplatesCreateRequest struct {
    PathParams DatacatalogProjectsLocationsTagTemplatesCreatePathParams 
    QueryParams DatacatalogProjectsLocationsTagTemplatesCreateQueryParams 
    Request *shared.GoogleCloudDatacatalogV1beta1TagTemplate `request:"mediaType=application/json"`
    Security DatacatalogProjectsLocationsTagTemplatesCreateSecurity 
    
}

type DatacatalogProjectsLocationsTagTemplatesCreateResponse struct {
    ContentType string 
    GoogleCloudDatacatalogV1beta1TagTemplate *shared.GoogleCloudDatacatalogV1beta1TagTemplate 
    StatusCode int64 
    
}

