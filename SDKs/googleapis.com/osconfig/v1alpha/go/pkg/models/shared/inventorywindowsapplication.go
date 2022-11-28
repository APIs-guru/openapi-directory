package shared

// InventoryWindowsApplication
// Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key
type InventoryWindowsApplication struct {
	DisplayName    *string `json:"displayName,omitempty"`
	DisplayVersion *string `json:"displayVersion,omitempty"`
	HelpLink       *string `json:"helpLink,omitempty"`
	InstallDate    *Date   `json:"installDate,omitempty"`
	Publisher      *string `json:"publisher,omitempty"`
}
