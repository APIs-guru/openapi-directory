package operations

import (
"openapi/pkg/models/shared")

type DataplexProjectsLocationsLakesZonesEntitiesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type DataplexProjectsLocationsLakesZonesEntitiesListViewEnum string

const (
    DataplexProjectsLocationsLakesZonesEntitiesListViewEnumEntityViewUnspecified DataplexProjectsLocationsLakesZonesEntitiesListViewEnum = "ENTITY_VIEW_UNSPECIFIED"
DataplexProjectsLocationsLakesZonesEntitiesListViewEnumTables DataplexProjectsLocationsLakesZonesEntitiesListViewEnum = "TABLES"
DataplexProjectsLocationsLakesZonesEntitiesListViewEnumFilesets DataplexProjectsLocationsLakesZonesEntitiesListViewEnum = "FILESETS"
)


type DataplexProjectsLocationsLakesZonesEntitiesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *DataplexProjectsLocationsLakesZonesEntitiesListViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type DataplexProjectsLocationsLakesZonesEntitiesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataplexProjectsLocationsLakesZonesEntitiesListRequest struct {
    PathParams DataplexProjectsLocationsLakesZonesEntitiesListPathParams 
    QueryParams DataplexProjectsLocationsLakesZonesEntitiesListQueryParams 
    Security DataplexProjectsLocationsLakesZonesEntitiesListSecurity 
    
}

type DataplexProjectsLocationsLakesZonesEntitiesListResponse struct {
    ContentType string 
    GoogleCloudDataplexV1ListEntitiesResponse *shared.GoogleCloudDataplexV1ListEntitiesResponse 
    StatusCode int64 
    
}

