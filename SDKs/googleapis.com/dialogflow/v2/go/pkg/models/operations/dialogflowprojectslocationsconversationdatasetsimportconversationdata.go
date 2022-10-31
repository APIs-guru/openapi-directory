package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsConversationDatasetsImportConversationDataPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams struct {
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

type DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity struct {
    Option1 *DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest struct {
    PathParams DialogflowProjectsLocationsConversationDatasetsImportConversationDataPathParams 
    QueryParams DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams 
    Request *shared.GoogleCloudDialogflowV2ImportConversationDataRequest `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity 
    
}

type DialogflowProjectsLocationsConversationDatasetsImportConversationDataResponse struct {
    ContentType string 
    GoogleLongrunningOperation *shared.GoogleLongrunningOperation 
    StatusCode int64 
    
}

