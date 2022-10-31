package operations

import (
"openapi/pkg/models/shared")

type FirestoreProjectsDatabasesDocumentsListCollectionIdsPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams struct {
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

type FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurity struct {
    Option1 *FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption1 `security:"option"`
    Option2 *FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption2 `security:"option"`
    
}

type FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest struct {
    PathParams FirestoreProjectsDatabasesDocumentsListCollectionIdsPathParams 
    QueryParams FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams 
    Request *shared.ListCollectionIdsRequest `request:"mediaType=application/json"`
    Security FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurity 
    
}

type FirestoreProjectsDatabasesDocumentsListCollectionIdsResponse struct {
    ContentType string 
    ListCollectionIdsResponse *shared.ListCollectionIdsResponse 
    StatusCode int64 
    
}

