package operations

import (
"openapi/pkg/models/shared")

type BooksLayersAnnotationDataListPathParams struct {
    LayerID string `pathParam:"style=simple,explode=false,name=layerId"`
    VolumeID string `pathParam:"style=simple,explode=false,name=volumeId"`
    
}

type BooksLayersAnnotationDataListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    AnnotationDataID []string `queryParam:"style=form,explode=true,name=annotationDataId"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ContentVersion string `queryParam:"style=form,explode=true,name=contentVersion"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    H *int64 `queryParam:"style=form,explode=true,name=h"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Scale *int64 `queryParam:"style=form,explode=true,name=scale"`
    Source *string `queryParam:"style=form,explode=true,name=source"`
    UpdatedMax *string `queryParam:"style=form,explode=true,name=updatedMax"`
    UpdatedMin *string `queryParam:"style=form,explode=true,name=updatedMin"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    W *int64 `queryParam:"style=form,explode=true,name=w"`
    
}

type BooksLayersAnnotationDataListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BooksLayersAnnotationDataListRequest struct {
    PathParams BooksLayersAnnotationDataListPathParams 
    QueryParams BooksLayersAnnotationDataListQueryParams 
    Security BooksLayersAnnotationDataListSecurity 
    
}

type BooksLayersAnnotationDataListResponse struct {
    Annotationsdata *shared.Annotationsdata 
    ContentType string 
    StatusCode int64 
    
}

