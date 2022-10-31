package operations

import (
"openapi/pkg/models/shared")

type MirrorTimelineAttachmentsDeletePathParams struct {
    AttachmentID string `pathParam:"style=simple,explode=false,name=attachmentId"`
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type MirrorTimelineAttachmentsDeleteQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type MirrorTimelineAttachmentsDeleteSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MirrorTimelineAttachmentsDeleteRequest struct {
    PathParams MirrorTimelineAttachmentsDeletePathParams 
    QueryParams MirrorTimelineAttachmentsDeleteQueryParams 
    Security MirrorTimelineAttachmentsDeleteSecurity 
    
}

type MirrorTimelineAttachmentsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

