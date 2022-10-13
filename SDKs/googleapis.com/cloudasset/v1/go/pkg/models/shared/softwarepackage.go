package shared

type SoftwarePackage struct {
	AptPackage         *VersionedPackage                  `json:"aptPackage"`
	CosPackage         *VersionedPackage                  `json:"cosPackage"`
	GoogetPackage      *VersionedPackage                  `json:"googetPackage"`
	QfePackage         *WindowsQuickFixEngineeringPackage `json:"qfePackage"`
	WindowsApplication *WindowsApplication                `json:"windowsApplication"`
	WuaPackage         *WindowsUpdatePackage              `json:"wuaPackage"`
	YumPackage         *VersionedPackage                  `json:"yumPackage"`
	ZypperPackage      *VersionedPackage                  `json:"zypperPackage"`
	ZypperPatch        *ZypperPatch                       `json:"zypperPatch"`
}
