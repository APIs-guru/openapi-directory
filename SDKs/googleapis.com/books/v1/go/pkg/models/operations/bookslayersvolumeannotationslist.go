package operations

import (
"openapi/pkg/models/shared")

type BooksLayersVolumeAnnotationsListPathParams struct {
    LayerID string `pathParam:"style=simple,explode=false,name=layerId"`
    VolumeID string `pathParam:"style=simple,explode=false,name=volumeId"`
    
}

type BooksLayersVolumeAnnotationsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ContentVersion string `queryParam:"style=form,explode=true,name=contentVersion"`
    EndOffset *string `queryParam:"style=form,explode=true,name=endOffset"`
    EndPosition *string `queryParam:"style=form,explode=true,name=endPosition"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ShowDeleted *bool `queryParam:"style=form,explode=true,name=showDeleted"`
    Source *string `queryParam:"style=form,explode=true,name=source"`
    StartOffset *string `queryParam:"style=form,explode=true,name=startOffset"`
    StartPosition *string `queryParam:"style=form,explode=true,name=startPosition"`
    UpdatedMax *string `queryParam:"style=form,explode=true,name=updatedMax"`
    UpdatedMin *string `queryParam:"style=form,explode=true,name=updatedMin"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    VolumeAnnotationsVersion *string `queryParam:"style=form,explode=true,name=volumeAnnotationsVersion"`
    
}

type BooksLayersVolumeAnnotationsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BooksLayersVolumeAnnotationsListRequest struct {
    PathParams BooksLayersVolumeAnnotationsListPathParams 
    QueryParams BooksLayersVolumeAnnotationsListQueryParams 
    Security BooksLayersVolumeAnnotationsListSecurity 
    
}

type BooksLayersVolumeAnnotationsListResponse struct {
    ContentType string 
    StatusCode int64 
    Volumeannotations *shared.Volumeannotations 
    
}

