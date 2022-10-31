package shared

type SeqMapTask struct {
	Inputs      []SideInputInfo        `json:"inputs,omitempty"`
	Name        *string                `json:"name,omitempty"`
	OutputInfos []SeqMapTaskOutputInfo `json:"outputInfos,omitempty"`
	StageName   *string                `json:"stageName,omitempty"`
	SystemName  *string                `json:"systemName,omitempty"`
	UserFn      map[string]interface{} `json:"userFn,omitempty"`
}
