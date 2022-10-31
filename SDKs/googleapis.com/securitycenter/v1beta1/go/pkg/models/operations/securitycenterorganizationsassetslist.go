package operations

import (
"openapi/pkg/models/shared")

type SecuritycenterOrganizationsAssetsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type SecuritycenterOrganizationsAssetsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CompareDuration *string `queryParam:"style=form,explode=true,name=compareDuration"`
    FieldMask *string `queryParam:"style=form,explode=true,name=fieldMask"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ReadTime *string `queryParam:"style=form,explode=true,name=readTime"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SecuritycenterOrganizationsAssetsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SecuritycenterOrganizationsAssetsListRequest struct {
    PathParams SecuritycenterOrganizationsAssetsListPathParams 
    QueryParams SecuritycenterOrganizationsAssetsListQueryParams 
    Security SecuritycenterOrganizationsAssetsListSecurity 
    
}

type SecuritycenterOrganizationsAssetsListResponse struct {
    ContentType string 
    ListAssetsResponse *shared.ListAssetsResponse 
    StatusCode int64 
    
}

