package shared

type SeqMapTask struct {
	Inputs      []SideInputInfo        `json:"inputs"`
	Name        *string                `json:"name"`
	OutputInfos []SeqMapTaskOutputInfo `json:"outputInfos"`
	StageName   *string                `json:"stageName"`
	SystemName  *string                `json:"systemName"`
	UserFn      map[string]interface{} `json:"userFn"`
}
