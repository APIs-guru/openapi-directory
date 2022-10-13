package shared

type Disk struct {
	AutoDelete      *bool            `json:"autoDelete"`
	Boot            *bool            `json:"boot"`
	DeviceName      *string          `json:"deviceName"`
	DiskSizeGb      *string          `json:"diskSizeGb"`
	GuestOsFeatures []GuestOsFeature `json:"guestOsFeatures"`
	Index           *string          `json:"index"`
	Interface       *string          `json:"interface"`
	Kind            *string          `json:"kind"`
	Licenses        []string         `json:"licenses"`
	Mode            *string          `json:"mode"`
	Source          *string          `json:"source"`
	Type            *string          `json:"type"`
}
