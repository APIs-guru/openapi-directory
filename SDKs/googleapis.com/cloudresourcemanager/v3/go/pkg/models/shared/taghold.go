package shared

type TagHold struct {
	CreateTime *string `json:"createTime,omitempty"`
	HelpLink   *string `json:"helpLink,omitempty"`
	Holder     *string `json:"holder,omitempty"`
	Name       *string `json:"name,omitempty"`
	Origin     *string `json:"origin,omitempty"`
}
