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

// Container
// Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions.
type Container struct {
	AccountID         *string                     `json:"accountId,omitempty"`
	ContainerID       *string                     `json:"containerId,omitempty"`
	DomainName        []string                    `json:"domainName,omitempty"`
	Features          *ContainerFeatures          `json:"features,omitempty"`
	Fingerprint       *string                     `json:"fingerprint,omitempty"`
	Name              *string                     `json:"name,omitempty"`
	Notes             *string                     `json:"notes,omitempty"`
	Path              *string                     `json:"path,omitempty"`
	PublicID          *string                     `json:"publicId,omitempty"`
	TagIds            []string                    `json:"tagIds,omitempty"`
	TagManagerURL     *string                     `json:"tagManagerUrl,omitempty"`
	TaggingServerUrls []string                    `json:"taggingServerUrls,omitempty"`
	UsageContext      []ContainerUsageContextEnum `json:"usageContext,omitempty"`
}
