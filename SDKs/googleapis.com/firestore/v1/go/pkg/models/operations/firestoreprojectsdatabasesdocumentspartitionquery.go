package operations

import (
"openapi/pkg/models/shared")

type FirestoreProjectsDatabasesDocumentsPartitionQueryPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams struct {
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

type FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity struct {
    Option1 *FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption1 `security:"option"`
    Option2 *FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption2 `security:"option"`
    
}

type FirestoreProjectsDatabasesDocumentsPartitionQueryRequest struct {
    PathParams FirestoreProjectsDatabasesDocumentsPartitionQueryPathParams 
    QueryParams FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams 
    Request *shared.PartitionQueryRequest `request:"mediaType=application/json"`
    Security FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity 
    
}

type FirestoreProjectsDatabasesDocumentsPartitionQueryResponse struct {
    ContentType string 
    PartitionQueryResponse *shared.PartitionQueryResponse 
    StatusCode int64 
    
}

