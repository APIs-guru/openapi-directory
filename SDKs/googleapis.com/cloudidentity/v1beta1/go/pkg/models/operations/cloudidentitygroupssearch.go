package operations

import (
"openapi/pkg/models/shared")


type CloudidentityGroupsSearchViewEnum string

const (
    CloudidentityGroupsSearchViewEnumBasic CloudidentityGroupsSearchViewEnum = "BASIC"
CloudidentityGroupsSearchViewEnumFull CloudidentityGroupsSearchViewEnum = "FULL"
)


type CloudidentityGroupsSearchQueryParams struct {
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
    Query *string `queryParam:"style=form,explode=true,name=query"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *CloudidentityGroupsSearchViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type CloudidentityGroupsSearchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityGroupsSearchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityGroupsSearchSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityGroupsSearchSecurity struct {
    Option1 *CloudidentityGroupsSearchSecurityOption1 `security:"option"`
    Option2 *CloudidentityGroupsSearchSecurityOption2 `security:"option"`
    Option3 *CloudidentityGroupsSearchSecurityOption3 `security:"option"`
    
}

type CloudidentityGroupsSearchRequest struct {
    QueryParams CloudidentityGroupsSearchQueryParams 
    Security CloudidentityGroupsSearchSecurity 
    
}

type CloudidentityGroupsSearchResponse struct {
    ContentType string 
    SearchGroupsResponse *shared.SearchGroupsResponse 
    StatusCode int64 
    
}

