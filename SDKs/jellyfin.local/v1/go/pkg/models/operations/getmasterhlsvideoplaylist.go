package operations

import (
"openapi/pkg/models/shared")

type GetMasterHlsVideoPlaylistPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type GetMasterHlsVideoPlaylistQueryParams struct {
    AllowAudioStreamCopy *bool `queryParam:"style=form,explode=true,name=allowAudioStreamCopy"`
    AllowVideoStreamCopy *bool `queryParam:"style=form,explode=true,name=allowVideoStreamCopy"`
    AudioBitRate *int32 `queryParam:"style=form,explode=true,name=audioBitRate"`
    AudioChannels *int32 `queryParam:"style=form,explode=true,name=audioChannels"`
    AudioCodec *string `queryParam:"style=form,explode=true,name=audioCodec"`
    AudioSampleRate *int32 `queryParam:"style=form,explode=true,name=audioSampleRate"`
    AudioStreamIndex *int32 `queryParam:"style=form,explode=true,name=audioStreamIndex"`
    BreakOnNonKeyFrames *bool `queryParam:"style=form,explode=true,name=breakOnNonKeyFrames"`
    Context *shared.EncodingContextEnum `queryParam:"style=form,explode=true,name=context"`
    CopyTimestamps *bool `queryParam:"style=form,explode=true,name=copyTimestamps"`
    CPUCoreLimit *int32 `queryParam:"style=form,explode=true,name=cpuCoreLimit"`
    DeInterlace *bool `queryParam:"style=form,explode=true,name=deInterlace"`
    DeviceID *string `queryParam:"style=form,explode=true,name=deviceId"`
    DeviceProfileID *string `queryParam:"style=form,explode=true,name=deviceProfileId"`
    EnableAdaptiveBitrateStreaming *bool `queryParam:"style=form,explode=true,name=enableAdaptiveBitrateStreaming"`
    EnableAutoStreamCopy *bool `queryParam:"style=form,explode=true,name=enableAutoStreamCopy"`
    EnableMpegtsM2TsMode *bool `queryParam:"style=form,explode=true,name=enableMpegtsM2TsMode"`
    Framerate *float32 `queryParam:"style=form,explode=true,name=framerate"`
    Height *int32 `queryParam:"style=form,explode=true,name=height"`
    Level *string `queryParam:"style=form,explode=true,name=level"`
    LiveStreamID *string `queryParam:"style=form,explode=true,name=liveStreamId"`
    MaxAudioBitDepth *int32 `queryParam:"style=form,explode=true,name=maxAudioBitDepth"`
    MaxAudioChannels *int32 `queryParam:"style=form,explode=true,name=maxAudioChannels"`
    MaxFramerate *float32 `queryParam:"style=form,explode=true,name=maxFramerate"`
    MaxRefFrames *int32 `queryParam:"style=form,explode=true,name=maxRefFrames"`
    MaxVideoBitDepth *int32 `queryParam:"style=form,explode=true,name=maxVideoBitDepth"`
    MediaSourceID string `queryParam:"style=form,explode=true,name=mediaSourceId"`
    MinSegments *int32 `queryParam:"style=form,explode=true,name=minSegments"`
    Params *string `queryParam:"style=form,explode=true,name=params"`
    PlaySessionID *string `queryParam:"style=form,explode=true,name=playSessionId"`
    Profile *string `queryParam:"style=form,explode=true,name=profile"`
    RequireAvc *bool `queryParam:"style=form,explode=true,name=requireAvc"`
    RequireNonAnamorphic *bool `queryParam:"style=form,explode=true,name=requireNonAnamorphic"`
    SegmentContainer *string `queryParam:"style=form,explode=true,name=segmentContainer"`
    SegmentLength *int32 `queryParam:"style=form,explode=true,name=segmentLength"`
    StartTimeTicks *int64 `queryParam:"style=form,explode=true,name=startTimeTicks"`
    Static *bool `queryParam:"style=form,explode=true,name=static"`
    StreamOptions map[string]string `queryParam:"style=form,explode=true,name=streamOptions"`
    SubtitleCodec *string `queryParam:"style=form,explode=true,name=subtitleCodec"`
    SubtitleMethod *shared.SubtitleDeliveryMethodEnum `queryParam:"style=form,explode=true,name=subtitleMethod"`
    SubtitleStreamIndex *int32 `queryParam:"style=form,explode=true,name=subtitleStreamIndex"`
    Tag *string `queryParam:"style=form,explode=true,name=tag"`
    TranscodeReasons *string `queryParam:"style=form,explode=true,name=transcodeReasons"`
    TranscodingMaxAudioChannels *int32 `queryParam:"style=form,explode=true,name=transcodingMaxAudioChannels"`
    VideoBitRate *int32 `queryParam:"style=form,explode=true,name=videoBitRate"`
    VideoCodec *string `queryParam:"style=form,explode=true,name=videoCodec"`
    VideoStreamIndex *int32 `queryParam:"style=form,explode=true,name=videoStreamIndex"`
    Width *int32 `queryParam:"style=form,explode=true,name=width"`
    
}

type GetMasterHlsVideoPlaylistSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetMasterHlsVideoPlaylistRequest struct {
    PathParams GetMasterHlsVideoPlaylistPathParams 
    QueryParams GetMasterHlsVideoPlaylistQueryParams 
    Security GetMasterHlsVideoPlaylistSecurity 
    
}

type GetMasterHlsVideoPlaylistResponse struct {
    ContentType string 
    GetMasterHlsVideoPlaylist200ApplicationXMpegurlBinaryString []byte 
    StatusCode int64 
    
}

