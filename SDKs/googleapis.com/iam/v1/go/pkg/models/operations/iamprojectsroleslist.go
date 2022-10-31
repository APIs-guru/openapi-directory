package operations

import (
"openapi/pkg/models/shared")

type IamProjectsRolesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type IamProjectsRolesListViewEnum string

const (
    IamProjectsRolesListViewEnumBasic IamProjectsRolesListViewEnum = "BASIC"
IamProjectsRolesListViewEnumFull IamProjectsRolesListViewEnum = "FULL"
)


type IamProjectsRolesListQueryParams struct {
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
    ShowDeleted *bool `queryParam:"style=form,explode=true,name=showDeleted"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *IamProjectsRolesListViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type IamProjectsRolesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IamProjectsRolesListRequest struct {
    PathParams IamProjectsRolesListPathParams 
    QueryParams IamProjectsRolesListQueryParams 
    Security IamProjectsRolesListSecurity 
    
}

type IamProjectsRolesListResponse struct {
    ContentType string 
    ListRolesResponse *shared.ListRolesResponse 
    StatusCode int64 
    
}

