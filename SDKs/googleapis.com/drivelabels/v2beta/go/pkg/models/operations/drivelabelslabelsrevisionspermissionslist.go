package operations

import (
"openapi/pkg/models/shared")

type DrivelabelsLabelsRevisionsPermissionsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DrivelabelsLabelsRevisionsPermissionsListQueryParams struct {
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
    UseAdminAccess *bool `queryParam:"style=form,explode=true,name=useAdminAccess"`
    
}

type DrivelabelsLabelsRevisionsPermissionsListRequest struct {
    PathParams DrivelabelsLabelsRevisionsPermissionsListPathParams 
    QueryParams DrivelabelsLabelsRevisionsPermissionsListQueryParams 
    
}

type DrivelabelsLabelsRevisionsPermissionsListResponse struct {
    ContentType string 
    GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse *shared.GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse 
    StatusCode int64 
    
}

