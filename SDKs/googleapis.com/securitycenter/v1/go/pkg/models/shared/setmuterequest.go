package shared

type SetMuteRequestMuteEnum string

const (
	SetMuteRequestMuteEnumMuteUnspecified SetMuteRequestMuteEnum = "MUTE_UNSPECIFIED"
	SetMuteRequestMuteEnumMuted           SetMuteRequestMuteEnum = "MUTED"
	SetMuteRequestMuteEnumUnmuted         SetMuteRequestMuteEnum = "UNMUTED"
	SetMuteRequestMuteEnumUndefined       SetMuteRequestMuteEnum = "UNDEFINED"
)

type SetMuteRequest struct {
	Mute *SetMuteRequestMuteEnum `json:"mute"`
}
