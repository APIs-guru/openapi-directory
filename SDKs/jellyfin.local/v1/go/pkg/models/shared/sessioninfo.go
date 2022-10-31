package shared

import (
"time")

type SessionInfo struct {
    AdditionalUsers []SessionUserInfo `json:"AdditionalUsers,omitempty"`
    ApplicationVersion *string `json:"ApplicationVersion,omitempty"`
    Capabilities *ClientCapabilities `json:"Capabilities,omitempty"`
    Client *string `json:"Client,omitempty"`
    DeviceID *string `json:"DeviceId,omitempty"`
    DeviceName *string `json:"DeviceName,omitempty"`
    DeviceType *string `json:"DeviceType,omitempty"`
    FullNowPlayingItem *BaseItem `json:"FullNowPlayingItem,omitempty"`
    HasCustomDeviceName *bool `json:"HasCustomDeviceName,omitempty"`
    ID *string `json:"Id,omitempty"`
    IsActive *bool `json:"IsActive,omitempty"`
    LastActivityDate *time.Time `json:"LastActivityDate,omitempty"`
    LastPlaybackCheckIn *time.Time `json:"LastPlaybackCheckIn,omitempty"`
    NowPlayingItem *BaseItemDto `json:"NowPlayingItem,omitempty"`
    NowPlayingQueue []QueueItem `json:"NowPlayingQueue,omitempty"`
    NowViewingItem *BaseItemDto `json:"NowViewingItem,omitempty"`
    PlayState *PlayerStateInfo `json:"PlayState,omitempty"`
    PlayableMediaTypes []string `json:"PlayableMediaTypes,omitempty"`
    PlaylistItemID *string `json:"PlaylistItemId,omitempty"`
    RemoteEndPoint *string `json:"RemoteEndPoint,omitempty"`
    ServerID *string `json:"ServerId,omitempty"`
    SupportedCommands []GeneralCommandTypeEnum `json:"SupportedCommands,omitempty"`
    SupportsMediaControl *bool `json:"SupportsMediaControl,omitempty"`
    SupportsRemoteControl *bool `json:"SupportsRemoteControl,omitempty"`
    TranscodingInfo *TranscodingInfo `json:"TranscodingInfo,omitempty"`
    UserID *string `json:"UserId,omitempty"`
    UserName *string `json:"UserName,omitempty"`
    UserPrimaryImageTag *string `json:"UserPrimaryImageTag,omitempty"`
    
}

