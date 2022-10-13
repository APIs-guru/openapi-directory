package shared

type VoiceOfMerchantState struct {
	ComplyWithGuidelines     *ComplyWithGuidelines  `json:"complyWithGuidelines"`
	HasBusinessAuthority     *bool                  `json:"hasBusinessAuthority"`
	HasVoiceOfMerchant       *bool                  `json:"hasVoiceOfMerchant"`
	ResolveOwnershipConflict map[string]interface{} `json:"resolveOwnershipConflict"`
	Verify                   *Verify                `json:"verify"`
	WaitForVoiceOfMerchant   map[string]interface{} `json:"waitForVoiceOfMerchant"`
}
