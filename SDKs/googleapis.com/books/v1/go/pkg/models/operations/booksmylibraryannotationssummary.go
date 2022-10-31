package operations

import (
"openapi/pkg/models/shared")

type BooksMylibraryAnnotationsSummaryQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LayerIds []string `queryParam:"style=form,explode=true,name=layerIds"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    VolumeID string `queryParam:"style=form,explode=true,name=volumeId"`
    
}

type BooksMylibraryAnnotationsSummarySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BooksMylibraryAnnotationsSummaryRequest struct {
    QueryParams BooksMylibraryAnnotationsSummaryQueryParams 
    Security BooksMylibraryAnnotationsSummarySecurity 
    
}

type BooksMylibraryAnnotationsSummaryResponse struct {
    AnnotationsSummary *shared.AnnotationsSummary 
    ContentType string 
    StatusCode int64 
    
}

