package shared




type GeneralCommandTypeEnum string

const (
    GeneralCommandTypeEnumMoveUp GeneralCommandTypeEnum = "MoveUp"
GeneralCommandTypeEnumMoveDown GeneralCommandTypeEnum = "MoveDown"
GeneralCommandTypeEnumMoveLeft GeneralCommandTypeEnum = "MoveLeft"
GeneralCommandTypeEnumMoveRight GeneralCommandTypeEnum = "MoveRight"
GeneralCommandTypeEnumPageUp GeneralCommandTypeEnum = "PageUp"
GeneralCommandTypeEnumPageDown GeneralCommandTypeEnum = "PageDown"
GeneralCommandTypeEnumPreviousLetter GeneralCommandTypeEnum = "PreviousLetter"
GeneralCommandTypeEnumNextLetter GeneralCommandTypeEnum = "NextLetter"
GeneralCommandTypeEnumToggleOsd GeneralCommandTypeEnum = "ToggleOsd"
GeneralCommandTypeEnumToggleContextMenu GeneralCommandTypeEnum = "ToggleContextMenu"
GeneralCommandTypeEnumSelect GeneralCommandTypeEnum = "Select"
GeneralCommandTypeEnumBack GeneralCommandTypeEnum = "Back"
GeneralCommandTypeEnumTakeScreenshot GeneralCommandTypeEnum = "TakeScreenshot"
GeneralCommandTypeEnumSendKey GeneralCommandTypeEnum = "SendKey"
GeneralCommandTypeEnumSendString GeneralCommandTypeEnum = "SendString"
GeneralCommandTypeEnumGoHome GeneralCommandTypeEnum = "GoHome"
GeneralCommandTypeEnumGoToSettings GeneralCommandTypeEnum = "GoToSettings"
GeneralCommandTypeEnumVolumeUp GeneralCommandTypeEnum = "VolumeUp"
GeneralCommandTypeEnumVolumeDown GeneralCommandTypeEnum = "VolumeDown"
GeneralCommandTypeEnumMute GeneralCommandTypeEnum = "Mute"
GeneralCommandTypeEnumUnmute GeneralCommandTypeEnum = "Unmute"
GeneralCommandTypeEnumToggleMute GeneralCommandTypeEnum = "ToggleMute"
GeneralCommandTypeEnumSetVolume GeneralCommandTypeEnum = "SetVolume"
GeneralCommandTypeEnumSetAudioStreamIndex GeneralCommandTypeEnum = "SetAudioStreamIndex"
GeneralCommandTypeEnumSetSubtitleStreamIndex GeneralCommandTypeEnum = "SetSubtitleStreamIndex"
GeneralCommandTypeEnumToggleFullscreen GeneralCommandTypeEnum = "ToggleFullscreen"
GeneralCommandTypeEnumDisplayContent GeneralCommandTypeEnum = "DisplayContent"
GeneralCommandTypeEnumGoToSearch GeneralCommandTypeEnum = "GoToSearch"
GeneralCommandTypeEnumDisplayMessage GeneralCommandTypeEnum = "DisplayMessage"
GeneralCommandTypeEnumSetRepeatMode GeneralCommandTypeEnum = "SetRepeatMode"
GeneralCommandTypeEnumChannelUp GeneralCommandTypeEnum = "ChannelUp"
GeneralCommandTypeEnumChannelDown GeneralCommandTypeEnum = "ChannelDown"
GeneralCommandTypeEnumGuide GeneralCommandTypeEnum = "Guide"
GeneralCommandTypeEnumToggleStats GeneralCommandTypeEnum = "ToggleStats"
GeneralCommandTypeEnumPlayMediaSource GeneralCommandTypeEnum = "PlayMediaSource"
GeneralCommandTypeEnumPlayTrailers GeneralCommandTypeEnum = "PlayTrailers"
GeneralCommandTypeEnumSetShuffleQueue GeneralCommandTypeEnum = "SetShuffleQueue"
GeneralCommandTypeEnumPlayState GeneralCommandTypeEnum = "PlayState"
GeneralCommandTypeEnumPlayNext GeneralCommandTypeEnum = "PlayNext"
GeneralCommandTypeEnumToggleOsdMenu GeneralCommandTypeEnum = "ToggleOsdMenu"
GeneralCommandTypeEnumPlay GeneralCommandTypeEnum = "Play"
)


