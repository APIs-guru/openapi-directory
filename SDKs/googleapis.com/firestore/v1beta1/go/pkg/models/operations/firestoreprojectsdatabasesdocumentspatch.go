package operations

import (
"openapi/pkg/models/shared")

type FirestoreProjectsDatabasesDocumentsPatchPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type FirestoreProjectsDatabasesDocumentsPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CurrentDocumentExists *bool `queryParam:"style=form,explode=true,name=currentDocument.exists"`
    CurrentDocumentUpdateTime *string `queryParam:"style=form,explode=true,name=currentDocument.updateTime"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaskFieldPaths []string `queryParam:"style=form,explode=true,name=mask.fieldPaths"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UpdateMaskFieldPaths []string `queryParam:"style=form,explode=true,name=updateMask.fieldPaths"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirestoreProjectsDatabasesDocumentsPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsPatchSecurity struct {
    Option1 *FirestoreProjectsDatabasesDocumentsPatchSecurityOption1 `security:"option"`
    Option2 *FirestoreProjectsDatabasesDocumentsPatchSecurityOption2 `security:"option"`
    
}

type FirestoreProjectsDatabasesDocumentsPatchRequest struct {
    PathParams FirestoreProjectsDatabasesDocumentsPatchPathParams 
    QueryParams FirestoreProjectsDatabasesDocumentsPatchQueryParams 
    Request *shared.Document `request:"mediaType=application/json"`
    Security FirestoreProjectsDatabasesDocumentsPatchSecurity 
    
}

type FirestoreProjectsDatabasesDocumentsPatchResponse struct {
    ContentType string 
    Document *shared.Document 
    StatusCode int64 
    
}

