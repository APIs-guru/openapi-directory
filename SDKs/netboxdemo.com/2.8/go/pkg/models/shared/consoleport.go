package shared

type ConsolePortConnectionStatusLabelEnum string

const (
	ConsolePortConnectionStatusLabelEnumNotConnected ConsolePortConnectionStatusLabelEnum = "Not Connected"
	ConsolePortConnectionStatusLabelEnumConnected    ConsolePortConnectionStatusLabelEnum = "Connected"
)

type ConsolePortConnectionStatus struct {
	Label ConsolePortConnectionStatusLabelEnum `json:"label"`
	Value bool                                 `json:"value"`
}

type ConsolePortTypeLabelEnum string

const (
	ConsolePortTypeLabelEnumDe9       ConsolePortTypeLabelEnum = "DE-9"
	ConsolePortTypeLabelEnumDb25      ConsolePortTypeLabelEnum = "DB-25"
	ConsolePortTypeLabelEnumRj11      ConsolePortTypeLabelEnum = "RJ-11"
	ConsolePortTypeLabelEnumRj12      ConsolePortTypeLabelEnum = "RJ-12"
	ConsolePortTypeLabelEnumRj45      ConsolePortTypeLabelEnum = "RJ-45"
	ConsolePortTypeLabelEnumUsbTypeA  ConsolePortTypeLabelEnum = "USB Type A"
	ConsolePortTypeLabelEnumUsbTypeB  ConsolePortTypeLabelEnum = "USB Type B"
	ConsolePortTypeLabelEnumUsbTypeC  ConsolePortTypeLabelEnum = "USB Type C"
	ConsolePortTypeLabelEnumUsbMiniA  ConsolePortTypeLabelEnum = "USB Mini A"
	ConsolePortTypeLabelEnumUsbMiniB  ConsolePortTypeLabelEnum = "USB Mini B"
	ConsolePortTypeLabelEnumUsbMicroA ConsolePortTypeLabelEnum = "USB Micro A"
	ConsolePortTypeLabelEnumUsbMicroB ConsolePortTypeLabelEnum = "USB Micro B"
	ConsolePortTypeLabelEnumOther     ConsolePortTypeLabelEnum = "Other"
)

type ConsolePortTypeValueEnum string

const (
	ConsolePortTypeValueEnumDe9       ConsolePortTypeValueEnum = "de-9"
	ConsolePortTypeValueEnumDb25      ConsolePortTypeValueEnum = "db-25"
	ConsolePortTypeValueEnumRj11      ConsolePortTypeValueEnum = "rj-11"
	ConsolePortTypeValueEnumRj12      ConsolePortTypeValueEnum = "rj-12"
	ConsolePortTypeValueEnumRj45      ConsolePortTypeValueEnum = "rj-45"
	ConsolePortTypeValueEnumUsbA      ConsolePortTypeValueEnum = "usb-a"
	ConsolePortTypeValueEnumUsbB      ConsolePortTypeValueEnum = "usb-b"
	ConsolePortTypeValueEnumUsbC      ConsolePortTypeValueEnum = "usb-c"
	ConsolePortTypeValueEnumUsbMiniA  ConsolePortTypeValueEnum = "usb-mini-a"
	ConsolePortTypeValueEnumUsbMiniB  ConsolePortTypeValueEnum = "usb-mini-b"
	ConsolePortTypeValueEnumUsbMicroA ConsolePortTypeValueEnum = "usb-micro-a"
	ConsolePortTypeValueEnumUsbMicroB ConsolePortTypeValueEnum = "usb-micro-b"
	ConsolePortTypeValueEnumOther     ConsolePortTypeValueEnum = "other"
)

type ConsolePortType struct {
	Label ConsolePortTypeLabelEnum `json:"label"`
	Value ConsolePortTypeValueEnum `json:"value"`
}

type ConsolePort struct {
	Cable                 *NestedCable                 `json:"cable,omitempty"`
	ConnectedEndpoint     map[string]string            `json:"connected_endpoint,omitempty"`
	ConnectedEndpointType *string                      `json:"connected_endpoint_type,omitempty"`
	ConnectionStatus      *ConsolePortConnectionStatus `json:"connection_status,omitempty"`
	Description           *string                      `json:"description,omitempty"`
	Device                NestedDevice                 `json:"device"`
	ID                    *int64                       `json:"id,omitempty"`
	Name                  string                       `json:"name"`
	Tags                  []string                     `json:"tags,omitempty"`
	Type                  *ConsolePortType             `json:"type,omitempty"`
}
