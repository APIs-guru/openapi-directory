package shared

// InventoryWindowsQuickFixEngineeringPackage
// Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering
type InventoryWindowsQuickFixEngineeringPackage struct {
	Caption     *string `json:"caption,omitempty"`
	Description *string `json:"description,omitempty"`
	HotFixID    *string `json:"hotFixId,omitempty"`
	InstallTime *string `json:"installTime,omitempty"`
}
