package shared

type InventorySoftwarePackage struct {
	AptPackage         *InventoryVersionedPackage                  `json:"aptPackage,omitempty"`
	CosPackage         *InventoryVersionedPackage                  `json:"cosPackage,omitempty"`
	GoogetPackage      *InventoryVersionedPackage                  `json:"googetPackage,omitempty"`
	QfePackage         *InventoryWindowsQuickFixEngineeringPackage `json:"qfePackage,omitempty"`
	WindowsApplication *InventoryWindowsApplication                `json:"windowsApplication,omitempty"`
	WuaPackage         *InventoryWindowsUpdatePackage              `json:"wuaPackage,omitempty"`
	YumPackage         *InventoryVersionedPackage                  `json:"yumPackage,omitempty"`
	ZypperPackage      *InventoryVersionedPackage                  `json:"zypperPackage,omitempty"`
	ZypperPatch        *InventoryZypperPatch                       `json:"zypperPatch,omitempty"`
}
