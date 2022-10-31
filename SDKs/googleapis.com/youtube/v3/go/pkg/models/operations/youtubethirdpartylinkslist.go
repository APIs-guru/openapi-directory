package operations

import (
"openapi/pkg/models/shared")


type YoutubeThirdPartyLinksListTypeEnum string

const (
    YoutubeThirdPartyLinksListTypeEnumLinkUnspecified YoutubeThirdPartyLinksListTypeEnum = "linkUnspecified"
YoutubeThirdPartyLinksListTypeEnumChannelToStoreLink YoutubeThirdPartyLinksListTypeEnum = "channelToStoreLink"
)


type YoutubeThirdPartyLinksListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ExternalChannelID *string `queryParam:"style=form,explode=true,name=externalChannelId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LinkingToken *string `queryParam:"style=form,explode=true,name=linkingToken"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    Part []string `queryParam:"style=form,explode=true,name=part"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Type *YoutubeThirdPartyLinksListTypeEnum `queryParam:"style=form,explode=true,name=type"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeThirdPartyLinksListRequest struct {
    QueryParams YoutubeThirdPartyLinksListQueryParams 
    
}

type YoutubeThirdPartyLinksListResponse struct {
    ContentType string 
    StatusCode int64 
    ThirdPartyLinkListResponse *shared.ThirdPartyLinkListResponse 
    
}

