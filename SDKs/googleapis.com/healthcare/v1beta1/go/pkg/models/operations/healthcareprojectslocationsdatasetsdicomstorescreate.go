package operations

import (
"openapi/pkg/models/shared")

type HealthcareProjectsLocationsDatasetsDicomStoresCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type HealthcareProjectsLocationsDatasetsDicomStoresCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DicomStoreID *string `queryParam:"style=form,explode=true,name=dicomStoreId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type HealthcareProjectsLocationsDatasetsDicomStoresCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type HealthcareProjectsLocationsDatasetsDicomStoresCreateRequest struct {
    PathParams HealthcareProjectsLocationsDatasetsDicomStoresCreatePathParams 
    QueryParams HealthcareProjectsLocationsDatasetsDicomStoresCreateQueryParams 
    Request *shared.DicomStore `request:"mediaType=application/json"`
    Security HealthcareProjectsLocationsDatasetsDicomStoresCreateSecurity 
    
}

type HealthcareProjectsLocationsDatasetsDicomStoresCreateResponse struct {
    ContentType string 
    DicomStore *shared.DicomStore 
    StatusCode int64 
    
}

