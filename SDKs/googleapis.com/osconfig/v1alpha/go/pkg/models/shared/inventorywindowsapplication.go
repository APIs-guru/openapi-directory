package shared



type InventoryWindowsApplication struct {
    DisplayName *string `json:"displayName,omitempty"`
    DisplayVersion *string `json:"displayVersion,omitempty"`
    HelpLink *string `json:"helpLink,omitempty"`
    InstallDate *Date `json:"installDate,omitempty"`
    Publisher *string `json:"publisher,omitempty"`
    
}

