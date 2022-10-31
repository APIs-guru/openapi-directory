package shared

type PlaystateCommandEnum string

const (
	PlaystateCommandEnumStop          PlaystateCommandEnum = "Stop"
	PlaystateCommandEnumPause         PlaystateCommandEnum = "Pause"
	PlaystateCommandEnumUnpause       PlaystateCommandEnum = "Unpause"
	PlaystateCommandEnumNextTrack     PlaystateCommandEnum = "NextTrack"
	PlaystateCommandEnumPreviousTrack PlaystateCommandEnum = "PreviousTrack"
	PlaystateCommandEnumSeek          PlaystateCommandEnum = "Seek"
	PlaystateCommandEnumRewind        PlaystateCommandEnum = "Rewind"
	PlaystateCommandEnumFastForward   PlaystateCommandEnum = "FastForward"
	PlaystateCommandEnumPlayPause     PlaystateCommandEnum = "PlayPause"
)
