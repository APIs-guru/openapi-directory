package operations

import (
"openapi/pkg/models/shared")

type WebriskProjectsOperationsListPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type WebriskProjectsOperationsListQueryParams struct {
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
    
}

type WebriskProjectsOperationsListRequest struct {
    PathParams WebriskProjectsOperationsListPathParams 
    QueryParams WebriskProjectsOperationsListQueryParams 
    
}

type WebriskProjectsOperationsListResponse struct {
    ContentType string 
    GoogleLongrunningListOperationsResponse *shared.GoogleLongrunningListOperationsResponse 
    StatusCode int64 
    
}

