package shared

type InventorySoftwarePackage struct {
	AptPackage         *InventoryVersionedPackage                  `json:"aptPackage"`
	CosPackage         *InventoryVersionedPackage                  `json:"cosPackage"`
	GoogetPackage      *InventoryVersionedPackage                  `json:"googetPackage"`
	QfePackage         *InventoryWindowsQuickFixEngineeringPackage `json:"qfePackage"`
	WindowsApplication *InventoryWindowsApplication                `json:"windowsApplication"`
	WuaPackage         *InventoryWindowsUpdatePackage              `json:"wuaPackage"`
	YumPackage         *InventoryVersionedPackage                  `json:"yumPackage"`
	ZypperPackage      *InventoryVersionedPackage                  `json:"zypperPackage"`
	ZypperPatch        *InventoryZypperPatch                       `json:"zypperPatch"`
}
