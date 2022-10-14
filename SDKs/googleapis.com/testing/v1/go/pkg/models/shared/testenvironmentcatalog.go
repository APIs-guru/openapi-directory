package shared

type TestEnvironmentCatalog struct {
	AndroidDeviceCatalog        *AndroidDeviceCatalog        `json:"androidDeviceCatalog,omitempty"`
	DeviceIPBlockCatalog        *DeviceIPBlockCatalog        `json:"deviceIpBlockCatalog,omitempty"`
	IosDeviceCatalog            *IosDeviceCatalog            `json:"iosDeviceCatalog,omitempty"`
	NetworkConfigurationCatalog *NetworkConfigurationCatalog `json:"networkConfigurationCatalog,omitempty"`
	SoftwareCatalog             *ProvidedSoftwareCatalog     `json:"softwareCatalog,omitempty"`
}
