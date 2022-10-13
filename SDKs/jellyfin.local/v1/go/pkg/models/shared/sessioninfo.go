package shared

import (
	"time"
)

type SessionInfo struct {
	AdditionalUsers       []SessionUserInfo        `json:"AdditionalUsers"`
	ApplicationVersion    *string                  `json:"ApplicationVersion"`
	Capabilities          *ClientCapabilities      `json:"Capabilities"`
	Client                *string                  `json:"Client"`
	DeviceID              *string                  `json:"DeviceId"`
	DeviceName            *string                  `json:"DeviceName"`
	DeviceType            *string                  `json:"DeviceType"`
	FullNowPlayingItem    *BaseItem                `json:"FullNowPlayingItem"`
	HasCustomDeviceName   *bool                    `json:"HasCustomDeviceName"`
	ID                    *string                  `json:"Id"`
	IsActive              *bool                    `json:"IsActive"`
	LastActivityDate      *time.Time               `json:"LastActivityDate"`
	LastPlaybackCheckIn   *time.Time               `json:"LastPlaybackCheckIn"`
	NowPlayingItem        *BaseItemDto             `json:"NowPlayingItem"`
	NowPlayingQueue       []QueueItem              `json:"NowPlayingQueue"`
	NowViewingItem        *BaseItemDto             `json:"NowViewingItem"`
	PlayState             *PlayerStateInfo         `json:"PlayState"`
	PlayableMediaTypes    []string                 `json:"PlayableMediaTypes"`
	PlaylistItemID        *string                  `json:"PlaylistItemId"`
	RemoteEndPoint        *string                  `json:"RemoteEndPoint"`
	ServerID              *string                  `json:"ServerId"`
	SupportedCommands     []GeneralCommandTypeEnum `json:"SupportedCommands"`
	SupportsMediaControl  *bool                    `json:"SupportsMediaControl"`
	SupportsRemoteControl *bool                    `json:"SupportsRemoteControl"`
	TranscodingInfo       *TranscodingInfo         `json:"TranscodingInfo"`
	UserID                *string                  `json:"UserId"`
	UserName              *string                  `json:"UserName"`
	UserPrimaryImageTag   *string                  `json:"UserPrimaryImageTag"`
}
