package shared

// SoftwarePackage
// Software package information of the operating system.
type SoftwarePackage struct {
	AptPackage         *VersionedPackage                  `json:"aptPackage,omitempty"`
	CosPackage         *VersionedPackage                  `json:"cosPackage,omitempty"`
	GoogetPackage      *VersionedPackage                  `json:"googetPackage,omitempty"`
	QfePackage         *WindowsQuickFixEngineeringPackage `json:"qfePackage,omitempty"`
	WindowsApplication *WindowsApplication                `json:"windowsApplication,omitempty"`
	WuaPackage         *WindowsUpdatePackage              `json:"wuaPackage,omitempty"`
	YumPackage         *VersionedPackage                  `json:"yumPackage,omitempty"`
	ZypperPackage      *VersionedPackage                  `json:"zypperPackage,omitempty"`
	ZypperPatch        *ZypperPatch                       `json:"zypperPatch,omitempty"`
}
