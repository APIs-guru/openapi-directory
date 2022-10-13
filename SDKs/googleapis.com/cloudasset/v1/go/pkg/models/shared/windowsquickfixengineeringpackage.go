package shared

type WindowsQuickFixEngineeringPackage struct {
	Caption     *string `json:"caption"`
	Description *string `json:"description"`
	HotFixID    *string `json:"hotFixId"`
	InstallTime *string `json:"installTime"`
}
