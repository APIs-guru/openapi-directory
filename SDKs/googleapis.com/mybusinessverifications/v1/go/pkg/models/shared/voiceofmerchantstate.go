package shared

// VoiceOfMerchantState
// Response message for VoiceOfMerchant.GetVoiceOfMerchantState.
type VoiceOfMerchantState struct {
	ComplyWithGuidelines     *ComplyWithGuidelines  `json:"complyWithGuidelines,omitempty"`
	HasBusinessAuthority     *bool                  `json:"hasBusinessAuthority,omitempty"`
	HasVoiceOfMerchant       *bool                  `json:"hasVoiceOfMerchant,omitempty"`
	ResolveOwnershipConflict map[string]interface{} `json:"resolveOwnershipConflict,omitempty"`
	Verify                   *Verify                `json:"verify,omitempty"`
	WaitForVoiceOfMerchant   map[string]interface{} `json:"waitForVoiceOfMerchant,omitempty"`
}
