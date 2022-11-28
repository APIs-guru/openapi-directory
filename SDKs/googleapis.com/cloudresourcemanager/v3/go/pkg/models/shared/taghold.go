package shared

// TagHold
// A TagHold represents the use of a TagValue that is not captured by TagBindings. If a TagValue has any TagHolds, deletion will be blocked. This resource is intended to be created in the same cloud location as the `holder`.
type TagHold struct {
	CreateTime *string `json:"createTime,omitempty"`
	HelpLink   *string `json:"helpLink,omitempty"`
	Holder     *string `json:"holder,omitempty"`
	Name       *string `json:"name,omitempty"`
	Origin     *string `json:"origin,omitempty"`
}

// TagHoldInput
// A TagHold represents the use of a TagValue that is not captured by TagBindings. If a TagValue has any TagHolds, deletion will be blocked. This resource is intended to be created in the same cloud location as the `holder`.
type TagHoldInput struct {
	HelpLink *string `json:"helpLink,omitempty"`
	Holder   *string `json:"holder,omitempty"`
	Origin   *string `json:"origin,omitempty"`
}
