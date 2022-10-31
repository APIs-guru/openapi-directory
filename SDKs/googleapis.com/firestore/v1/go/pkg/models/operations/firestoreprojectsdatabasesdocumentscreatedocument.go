package operations

import (
"openapi/pkg/models/shared")

type FirestoreProjectsDatabasesDocumentsCreateDocumentPathParams struct {
    CollectionID string `pathParam:"style=simple,explode=false,name=collectionId"`
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DocumentID *string `queryParam:"style=form,explode=true,name=documentId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaskFieldPaths []string `queryParam:"style=form,explode=true,name=mask.fieldPaths"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity struct {
    Option1 *FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption1 `security:"option"`
    Option2 *FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption2 `security:"option"`
    
}

type FirestoreProjectsDatabasesDocumentsCreateDocumentRequest struct {
    PathParams FirestoreProjectsDatabasesDocumentsCreateDocumentPathParams 
    QueryParams FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams 
    Request *shared.Document `request:"mediaType=application/json"`
    Security FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity 
    
}

type FirestoreProjectsDatabasesDocumentsCreateDocumentResponse struct {
    ContentType string 
    Document *shared.Document 
    StatusCode int64 
    
}

