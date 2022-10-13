package shared

type ContainerUsageContextEnum string

const (
	ContainerUsageContextEnumUsageContextUnspecified ContainerUsageContextEnum = "usageContextUnspecified"
	ContainerUsageContextEnumWeb                     ContainerUsageContextEnum = "web"
	ContainerUsageContextEnumAndroid                 ContainerUsageContextEnum = "android"
	ContainerUsageContextEnumIos                     ContainerUsageContextEnum = "ios"
	ContainerUsageContextEnumAndroidSdk5             ContainerUsageContextEnum = "androidSdk5"
	ContainerUsageContextEnumIosSdk5                 ContainerUsageContextEnum = "iosSdk5"
	ContainerUsageContextEnumAmp                     ContainerUsageContextEnum = "amp"
	ContainerUsageContextEnumServer                  ContainerUsageContextEnum = "server"
)

type Container struct {
	AccountID     *string                     `json:"accountId"`
	ContainerID   *string                     `json:"containerId"`
	DomainName    []string                    `json:"domainName"`
	Fingerprint   *string                     `json:"fingerprint"`
	Name          *string                     `json:"name"`
	Notes         *string                     `json:"notes"`
	Path          *string                     `json:"path"`
	PublicID      *string                     `json:"publicId"`
	TagManagerURL *string                     `json:"tagManagerUrl"`
	UsageContext  []ContainerUsageContextEnum `json:"usageContext"`
}
