package shared

type SlashCommandMetadataTypeEnum string

const (
	SlashCommandMetadataTypeEnumTypeUnspecified SlashCommandMetadataTypeEnum = "TYPE_UNSPECIFIED"
	SlashCommandMetadataTypeEnumAdd             SlashCommandMetadataTypeEnum = "ADD"
	SlashCommandMetadataTypeEnumInvoke          SlashCommandMetadataTypeEnum = "INVOKE"
)

type SlashCommandMetadata struct {
	Bot            *User                         `json:"bot"`
	CommandID      *string                       `json:"commandId"`
	CommandName    *string                       `json:"commandName"`
	TriggersDialog *bool                         `json:"triggersDialog"`
	Type           *SlashCommandMetadataTypeEnum `json:"type"`
}
