package operations

import (
"openapi/pkg/models/shared")

type DocumentaiUiv1beta3ProjectsLocationsOperationsCancelPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DocumentaiUiv1beta3ProjectsLocationsOperationsCancelQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DocumentaiUiv1beta3ProjectsLocationsOperationsCancelSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DocumentaiUiv1beta3ProjectsLocationsOperationsCancelRequest struct {
    PathParams DocumentaiUiv1beta3ProjectsLocationsOperationsCancelPathParams 
    QueryParams DocumentaiUiv1beta3ProjectsLocationsOperationsCancelQueryParams 
    Security DocumentaiUiv1beta3ProjectsLocationsOperationsCancelSecurity 
    
}

type DocumentaiUiv1beta3ProjectsLocationsOperationsCancelResponse struct {
    ContentType string 
    GoogleProtobufEmpty map[string]interface{} 
    StatusCode int64 
    
}

