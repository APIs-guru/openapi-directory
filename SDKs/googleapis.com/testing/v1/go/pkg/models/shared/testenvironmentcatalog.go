package shared

type TestEnvironmentCatalog struct {
	AndroidDeviceCatalog        *AndroidDeviceCatalog        `json:"androidDeviceCatalog"`
	DeviceIPBlockCatalog        *DeviceIPBlockCatalog        `json:"deviceIpBlockCatalog"`
	IosDeviceCatalog            *IosDeviceCatalog            `json:"iosDeviceCatalog"`
	NetworkConfigurationCatalog *NetworkConfigurationCatalog `json:"networkConfigurationCatalog"`
	SoftwareCatalog             *ProvidedSoftwareCatalog     `json:"softwareCatalog"`
}
