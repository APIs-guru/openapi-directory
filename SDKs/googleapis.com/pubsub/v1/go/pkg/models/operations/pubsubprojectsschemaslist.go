package operations

import (
"openapi/pkg/models/shared")

type PubsubProjectsSchemasListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type PubsubProjectsSchemasListViewEnum string

const (
    PubsubProjectsSchemasListViewEnumSchemaViewUnspecified PubsubProjectsSchemasListViewEnum = "SCHEMA_VIEW_UNSPECIFIED"
PubsubProjectsSchemasListViewEnumBasic PubsubProjectsSchemasListViewEnum = "BASIC"
PubsubProjectsSchemasListViewEnumFull PubsubProjectsSchemasListViewEnum = "FULL"
)


type PubsubProjectsSchemasListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *PubsubProjectsSchemasListViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type PubsubProjectsSchemasListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubProjectsSchemasListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubProjectsSchemasListSecurity struct {
    Option1 *PubsubProjectsSchemasListSecurityOption1 `security:"option"`
    Option2 *PubsubProjectsSchemasListSecurityOption2 `security:"option"`
    
}

type PubsubProjectsSchemasListRequest struct {
    PathParams PubsubProjectsSchemasListPathParams 
    QueryParams PubsubProjectsSchemasListQueryParams 
    Security PubsubProjectsSchemasListSecurity 
    
}

type PubsubProjectsSchemasListResponse struct {
    ContentType string 
    ListSchemasResponse *shared.ListSchemasResponse 
    StatusCode int64 
    
}

