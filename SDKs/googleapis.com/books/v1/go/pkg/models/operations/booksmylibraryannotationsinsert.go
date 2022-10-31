package operations

import (
"openapi/pkg/models/shared")

type BooksMylibraryAnnotationsInsertQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    AnnotationID *string `queryParam:"style=form,explode=true,name=annotationId"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Country *string `queryParam:"style=form,explode=true,name=country"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ShowOnlySummaryInResponse *bool `queryParam:"style=form,explode=true,name=showOnlySummaryInResponse"`
    Source *string `queryParam:"style=form,explode=true,name=source"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BooksMylibraryAnnotationsInsertSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BooksMylibraryAnnotationsInsertRequest struct {
    QueryParams BooksMylibraryAnnotationsInsertQueryParams 
    Request *shared.Annotation `request:"mediaType=application/json"`
    Security BooksMylibraryAnnotationsInsertSecurity 
    
}

type BooksMylibraryAnnotationsInsertResponse struct {
    Annotation *shared.Annotation 
    ContentType string 
    StatusCode int64 
    
}

