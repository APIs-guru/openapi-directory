package operations

import (
"openapi/pkg/models/shared")

type GetUniversalAudioStreamPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type GetUniversalAudioStreamQueryParams struct {
    AudioBitRate *int32 `queryParam:"style=form,explode=true,name=audioBitRate"`
    AudioCodec *string `queryParam:"style=form,explode=true,name=audioCodec"`
    BreakOnNonKeyFrames *bool `queryParam:"style=form,explode=true,name=breakOnNonKeyFrames"`
    Container []string `queryParam:"style=form,explode=true,name=container"`
    DeviceID *string `queryParam:"style=form,explode=true,name=deviceId"`
    EnableRedirection *bool `queryParam:"style=form,explode=true,name=enableRedirection"`
    EnableRemoteMedia *bool `queryParam:"style=form,explode=true,name=enableRemoteMedia"`
    MaxAudioBitDepth *int32 `queryParam:"style=form,explode=true,name=maxAudioBitDepth"`
    MaxAudioChannels *int32 `queryParam:"style=form,explode=true,name=maxAudioChannels"`
    MaxAudioSampleRate *int32 `queryParam:"style=form,explode=true,name=maxAudioSampleRate"`
    MaxStreamingBitrate *int32 `queryParam:"style=form,explode=true,name=maxStreamingBitrate"`
    MediaSourceID *string `queryParam:"style=form,explode=true,name=mediaSourceId"`
    StartTimeTicks *int64 `queryParam:"style=form,explode=true,name=startTimeTicks"`
    TranscodingAudioChannels *int32 `queryParam:"style=form,explode=true,name=transcodingAudioChannels"`
    TranscodingContainer *string `queryParam:"style=form,explode=true,name=transcodingContainer"`
    TranscodingProtocol *string `queryParam:"style=form,explode=true,name=transcodingProtocol"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetUniversalAudioStreamSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetUniversalAudioStreamRequest struct {
    PathParams GetUniversalAudioStreamPathParams 
    QueryParams GetUniversalAudioStreamQueryParams 
    Security GetUniversalAudioStreamSecurity 
    
}

type GetUniversalAudioStreamResponse struct {
    ContentType string 
    GetUniversalAudioStream200AudioWildcardBinaryString []byte 
    StatusCode int64 
    
}

