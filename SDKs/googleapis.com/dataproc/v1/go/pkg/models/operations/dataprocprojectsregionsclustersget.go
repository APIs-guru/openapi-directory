package operations

import (
"openapi/pkg/models/shared")

type DataprocProjectsRegionsClustersGetPathParams struct {
    ClusterName string `pathParam:"style=simple,explode=false,name=clusterName"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    Region string `pathParam:"style=simple,explode=false,name=region"`
    
}

type DataprocProjectsRegionsClustersGetQueryParams struct {
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

type DataprocProjectsRegionsClustersGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataprocProjectsRegionsClustersGetRequest struct {
    PathParams DataprocProjectsRegionsClustersGetPathParams 
    QueryParams DataprocProjectsRegionsClustersGetQueryParams 
    Security DataprocProjectsRegionsClustersGetSecurity 
    
}

type DataprocProjectsRegionsClustersGetResponse struct {
    Cluster *shared.Cluster 
    ContentType string 
    StatusCode int64 
    
}

