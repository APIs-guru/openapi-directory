package shared




type SlashCommandMetadataTypeEnum string

const (
    SlashCommandMetadataTypeEnumTypeUnspecified SlashCommandMetadataTypeEnum = "TYPE_UNSPECIFIED"
SlashCommandMetadataTypeEnumAdd SlashCommandMetadataTypeEnum = "ADD"
SlashCommandMetadataTypeEnumInvoke SlashCommandMetadataTypeEnum = "INVOKE"
)


type SlashCommandMetadata struct {
    Bot *User `json:"bot,omitempty"`
    CommandID *string `json:"commandId,omitempty"`
    CommandName *string `json:"commandName,omitempty"`
    TriggersDialog *bool `json:"triggersDialog,omitempty"`
    Type *SlashCommandMetadataTypeEnum `json:"type,omitempty"`
    
}

