package shared

import (
"time")


type LiveBroadcastContentDetailsClosedCaptionsTypeEnum string

const (
    LiveBroadcastContentDetailsClosedCaptionsTypeEnumClosedCaptionsTypeUnspecified LiveBroadcastContentDetailsClosedCaptionsTypeEnum = "closedCaptionsTypeUnspecified"
LiveBroadcastContentDetailsClosedCaptionsTypeEnumClosedCaptionsDisabled LiveBroadcastContentDetailsClosedCaptionsTypeEnum = "closedCaptionsDisabled"
LiveBroadcastContentDetailsClosedCaptionsTypeEnumClosedCaptionsHTTPPost LiveBroadcastContentDetailsClosedCaptionsTypeEnum = "closedCaptionsHttpPost"
LiveBroadcastContentDetailsClosedCaptionsTypeEnumClosedCaptionsEmbedded LiveBroadcastContentDetailsClosedCaptionsTypeEnum = "closedCaptionsEmbedded"
)



type LiveBroadcastContentDetailsLatencyPreferenceEnum string

const (
    LiveBroadcastContentDetailsLatencyPreferenceEnumLatencyPreferenceUnspecified LiveBroadcastContentDetailsLatencyPreferenceEnum = "latencyPreferenceUnspecified"
LiveBroadcastContentDetailsLatencyPreferenceEnumNormal LiveBroadcastContentDetailsLatencyPreferenceEnum = "normal"
LiveBroadcastContentDetailsLatencyPreferenceEnumLow LiveBroadcastContentDetailsLatencyPreferenceEnum = "low"
LiveBroadcastContentDetailsLatencyPreferenceEnumUltraLow LiveBroadcastContentDetailsLatencyPreferenceEnum = "ultraLow"
)



type LiveBroadcastContentDetailsProjectionEnum string

const (
    LiveBroadcastContentDetailsProjectionEnumProjectionUnspecified LiveBroadcastContentDetailsProjectionEnum = "projectionUnspecified"
LiveBroadcastContentDetailsProjectionEnumRectangular LiveBroadcastContentDetailsProjectionEnum = "rectangular"
LiveBroadcastContentDetailsProjectionEnumThreeHundredAndSixty LiveBroadcastContentDetailsProjectionEnum = "360"
LiveBroadcastContentDetailsProjectionEnumMesh LiveBroadcastContentDetailsProjectionEnum = "mesh"
)



type LiveBroadcastContentDetailsStereoLayoutEnum string

const (
    LiveBroadcastContentDetailsStereoLayoutEnumStereoLayoutUnspecified LiveBroadcastContentDetailsStereoLayoutEnum = "stereoLayoutUnspecified"
LiveBroadcastContentDetailsStereoLayoutEnumMono LiveBroadcastContentDetailsStereoLayoutEnum = "mono"
LiveBroadcastContentDetailsStereoLayoutEnumLeftRight LiveBroadcastContentDetailsStereoLayoutEnum = "leftRight"
LiveBroadcastContentDetailsStereoLayoutEnumTopBottom LiveBroadcastContentDetailsStereoLayoutEnum = "topBottom"
)


type LiveBroadcastContentDetails struct {
    BoundStreamID *string `json:"boundStreamId,omitempty"`
    BoundStreamLastUpdateTimeMs *time.Time `json:"boundStreamLastUpdateTimeMs,omitempty"`
    ClosedCaptionsType *LiveBroadcastContentDetailsClosedCaptionsTypeEnum `json:"closedCaptionsType,omitempty"`
    EnableAutoStart *bool `json:"enableAutoStart,omitempty"`
    EnableAutoStop *bool `json:"enableAutoStop,omitempty"`
    EnableClosedCaptions *bool `json:"enableClosedCaptions,omitempty"`
    EnableContentEncryption *bool `json:"enableContentEncryption,omitempty"`
    EnableDvr *bool `json:"enableDvr,omitempty"`
    EnableEmbed *bool `json:"enableEmbed,omitempty"`
    EnableLowLatency *bool `json:"enableLowLatency,omitempty"`
    LatencyPreference *LiveBroadcastContentDetailsLatencyPreferenceEnum `json:"latencyPreference,omitempty"`
    Mesh *string `json:"mesh,omitempty"`
    MonitorStream *MonitorStreamInfo `json:"monitorStream,omitempty"`
    Projection *LiveBroadcastContentDetailsProjectionEnum `json:"projection,omitempty"`
    RecordFromStart *bool `json:"recordFromStart,omitempty"`
    StartWithSlate *bool `json:"startWithSlate,omitempty"`
    StereoLayout *LiveBroadcastContentDetailsStereoLayoutEnum `json:"stereoLayout,omitempty"`
    
}

