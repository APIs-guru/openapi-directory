package operations

import (
"openapi/pkg/models/shared")

type FirestoreProjectsDatabasesDocumentsListDocumentsPathParams struct {
    CollectionID string `pathParam:"style=simple,explode=false,name=collectionId"`
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaskFieldPaths []string `queryParam:"style=form,explode=true,name=mask.fieldPaths"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ReadTime *string `queryParam:"style=form,explode=true,name=readTime"`
    ShowMissing *bool `queryParam:"style=form,explode=true,name=showMissing"`
    Transaction *string `queryParam:"style=form,explode=true,name=transaction"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsListDocumentsSecurity struct {
    Option1 *FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption1 `security:"option"`
    Option2 *FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption2 `security:"option"`
    
}

type FirestoreProjectsDatabasesDocumentsListDocumentsRequest struct {
    PathParams FirestoreProjectsDatabasesDocumentsListDocumentsPathParams 
    QueryParams FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams 
    Security FirestoreProjectsDatabasesDocumentsListDocumentsSecurity 
    
}

type FirestoreProjectsDatabasesDocumentsListDocumentsResponse struct {
    ContentType string 
    ListDocumentsResponse *shared.ListDocumentsResponse 
    StatusCode int64 
    
}

