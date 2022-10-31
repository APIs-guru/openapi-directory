package operations

import (
"openapi/pkg/models/shared")

type DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ReadMask *string `queryParam:"style=form,explode=true,name=readMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest struct {
    PathParams DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetPathParams 
    QueryParams DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetQueryParams 
    Security DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetSecurity 
    
}

type DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse struct {
    ContentType string 
    GoogleCloudDatacatalogV1PolicyTag *shared.GoogleCloudDatacatalogV1PolicyTag 
    StatusCode int64 
    
}

