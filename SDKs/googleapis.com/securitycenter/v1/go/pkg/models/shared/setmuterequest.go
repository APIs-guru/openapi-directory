package shared

type SetMuteRequestMuteEnum string

const (
	SetMuteRequestMuteEnumMuteUnspecified SetMuteRequestMuteEnum = "MUTE_UNSPECIFIED"
	SetMuteRequestMuteEnumMuted           SetMuteRequestMuteEnum = "MUTED"
	SetMuteRequestMuteEnumUnmuted         SetMuteRequestMuteEnum = "UNMUTED"
	SetMuteRequestMuteEnumUndefined       SetMuteRequestMuteEnum = "UNDEFINED"
)

// SetMuteRequest
// Request message for updating a finding's mute status.
type SetMuteRequest struct {
	Mute *SetMuteRequestMuteEnum `json:"mute,omitempty"`
}
