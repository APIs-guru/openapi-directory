package operations

import (
"openapi/pkg/models/shared")

type DatacatalogProjectsLocationsEntryGroupsEntriesCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    EntryID *string `queryParam:"style=form,explode=true,name=entryId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest struct {
    PathParams DatacatalogProjectsLocationsEntryGroupsEntriesCreatePathParams 
    QueryParams DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams 
    Request *shared.GoogleCloudDatacatalogV1beta1Entry `request:"mediaType=application/json"`
    Security DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity 
    
}

type DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse struct {
    ContentType string 
    GoogleCloudDatacatalogV1beta1Entry *shared.GoogleCloudDatacatalogV1beta1Entry 
    StatusCode int64 
    
}

