package operations

import (
"openapi/pkg/models/shared")

type ContainerProjectsZonesClustersGetPathParams struct {
    ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    Zone string `pathParam:"style=simple,explode=false,name=zone"`
    
}

type ContainerProjectsZonesClustersGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ContainerProjectsZonesClustersGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContainerProjectsZonesClustersGetRequest struct {
    PathParams ContainerProjectsZonesClustersGetPathParams 
    QueryParams ContainerProjectsZonesClustersGetQueryParams 
    Security ContainerProjectsZonesClustersGetSecurity 
    
}

type ContainerProjectsZonesClustersGetResponse struct {
    Cluster *shared.Cluster 
    ContentType string 
    StatusCode int64 
    
}

