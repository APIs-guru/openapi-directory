package shared

type InventoryWindowsApplication struct {
	DisplayName    *string `json:"displayName"`
	DisplayVersion *string `json:"displayVersion"`
	HelpLink       *string `json:"helpLink"`
	InstallDate    *Date   `json:"installDate"`
	Publisher      *string `json:"publisher"`
}
