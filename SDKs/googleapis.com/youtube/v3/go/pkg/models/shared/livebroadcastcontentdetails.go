package shared

import (
	"time"
)

type LiveBroadcastContentDetailsClosedCaptionsTypeEnum string

const (
	LiveBroadcastContentDetailsClosedCaptionsTypeEnumClosedCaptionsTypeUnspecified LiveBroadcastContentDetailsClosedCaptionsTypeEnum = "closedCaptionsTypeUnspecified"
	LiveBroadcastContentDetailsClosedCaptionsTypeEnumClosedCaptionsDisabled        LiveBroadcastContentDetailsClosedCaptionsTypeEnum = "closedCaptionsDisabled"
	LiveBroadcastContentDetailsClosedCaptionsTypeEnumClosedCaptionsHTTPPost        LiveBroadcastContentDetailsClosedCaptionsTypeEnum = "closedCaptionsHttpPost"
	LiveBroadcastContentDetailsClosedCaptionsTypeEnumClosedCaptionsEmbedded        LiveBroadcastContentDetailsClosedCaptionsTypeEnum = "closedCaptionsEmbedded"
)

type LiveBroadcastContentDetailsLatencyPreferenceEnum string

const (
	LiveBroadcastContentDetailsLatencyPreferenceEnumLatencyPreferenceUnspecified LiveBroadcastContentDetailsLatencyPreferenceEnum = "latencyPreferenceUnspecified"
	LiveBroadcastContentDetailsLatencyPreferenceEnumNormal                       LiveBroadcastContentDetailsLatencyPreferenceEnum = "normal"
	LiveBroadcastContentDetailsLatencyPreferenceEnumLow                          LiveBroadcastContentDetailsLatencyPreferenceEnum = "low"
	LiveBroadcastContentDetailsLatencyPreferenceEnumUltraLow                     LiveBroadcastContentDetailsLatencyPreferenceEnum = "ultraLow"
)

type LiveBroadcastContentDetailsProjectionEnum string

const (
	LiveBroadcastContentDetailsProjectionEnumProjectionUnspecified LiveBroadcastContentDetailsProjectionEnum = "projectionUnspecified"
	LiveBroadcastContentDetailsProjectionEnumRectangular           LiveBroadcastContentDetailsProjectionEnum = "rectangular"
	LiveBroadcastContentDetailsProjectionEnumThreeHundredAndSixty  LiveBroadcastContentDetailsProjectionEnum = "360"
	LiveBroadcastContentDetailsProjectionEnumMesh                  LiveBroadcastContentDetailsProjectionEnum = "mesh"
)

type LiveBroadcastContentDetailsStereoLayoutEnum string

const (
	LiveBroadcastContentDetailsStereoLayoutEnumStereoLayoutUnspecified LiveBroadcastContentDetailsStereoLayoutEnum = "stereoLayoutUnspecified"
	LiveBroadcastContentDetailsStereoLayoutEnumMono                    LiveBroadcastContentDetailsStereoLayoutEnum = "mono"
	LiveBroadcastContentDetailsStereoLayoutEnumLeftRight               LiveBroadcastContentDetailsStereoLayoutEnum = "leftRight"
	LiveBroadcastContentDetailsStereoLayoutEnumTopBottom               LiveBroadcastContentDetailsStereoLayoutEnum = "topBottom"
)

type LiveBroadcastContentDetails struct {
	BoundStreamID               *string                                            `json:"boundStreamId"`
	BoundStreamLastUpdateTimeMs *time.Time                                         `json:"boundStreamLastUpdateTimeMs"`
	ClosedCaptionsType          *LiveBroadcastContentDetailsClosedCaptionsTypeEnum `json:"closedCaptionsType"`
	EnableAutoStart             *bool                                              `json:"enableAutoStart"`
	EnableAutoStop              *bool                                              `json:"enableAutoStop"`
	EnableClosedCaptions        *bool                                              `json:"enableClosedCaptions"`
	EnableContentEncryption     *bool                                              `json:"enableContentEncryption"`
	EnableDvr                   *bool                                              `json:"enableDvr"`
	EnableEmbed                 *bool                                              `json:"enableEmbed"`
	EnableLowLatency            *bool                                              `json:"enableLowLatency"`
	LatencyPreference           *LiveBroadcastContentDetailsLatencyPreferenceEnum  `json:"latencyPreference"`
	Mesh                        *string                                            `json:"mesh"`
	MonitorStream               *MonitorStreamInfo                                 `json:"monitorStream"`
	Projection                  *LiveBroadcastContentDetailsProjectionEnum         `json:"projection"`
	RecordFromStart             *bool                                              `json:"recordFromStart"`
	StartWithSlate              *bool                                              `json:"startWithSlate"`
	StereoLayout                *LiveBroadcastContentDetailsStereoLayoutEnum       `json:"stereoLayout"`
}
