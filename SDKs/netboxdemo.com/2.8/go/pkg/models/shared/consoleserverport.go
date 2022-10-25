package shared

type ConsoleServerPortConnectionStatusLabelEnum string

const (
	ConsoleServerPortConnectionStatusLabelEnumNotConnected ConsoleServerPortConnectionStatusLabelEnum = "Not Connected"
	ConsoleServerPortConnectionStatusLabelEnumConnected    ConsoleServerPortConnectionStatusLabelEnum = "Connected"
)

type ConsoleServerPortConnectionStatus struct {
	Label ConsoleServerPortConnectionStatusLabelEnum `json:"label"`
	Value bool                                       `json:"value"`
}

type ConsoleServerPortTypeLabelEnum string

const (
	ConsoleServerPortTypeLabelEnumDe9       ConsoleServerPortTypeLabelEnum = "DE-9"
	ConsoleServerPortTypeLabelEnumDb25      ConsoleServerPortTypeLabelEnum = "DB-25"
	ConsoleServerPortTypeLabelEnumRj11      ConsoleServerPortTypeLabelEnum = "RJ-11"
	ConsoleServerPortTypeLabelEnumRj12      ConsoleServerPortTypeLabelEnum = "RJ-12"
	ConsoleServerPortTypeLabelEnumRj45      ConsoleServerPortTypeLabelEnum = "RJ-45"
	ConsoleServerPortTypeLabelEnumUsbTypeA  ConsoleServerPortTypeLabelEnum = "USB Type A"
	ConsoleServerPortTypeLabelEnumUsbTypeB  ConsoleServerPortTypeLabelEnum = "USB Type B"
	ConsoleServerPortTypeLabelEnumUsbTypeC  ConsoleServerPortTypeLabelEnum = "USB Type C"
	ConsoleServerPortTypeLabelEnumUsbMiniA  ConsoleServerPortTypeLabelEnum = "USB Mini A"
	ConsoleServerPortTypeLabelEnumUsbMiniB  ConsoleServerPortTypeLabelEnum = "USB Mini B"
	ConsoleServerPortTypeLabelEnumUsbMicroA ConsoleServerPortTypeLabelEnum = "USB Micro A"
	ConsoleServerPortTypeLabelEnumUsbMicroB ConsoleServerPortTypeLabelEnum = "USB Micro B"
	ConsoleServerPortTypeLabelEnumOther     ConsoleServerPortTypeLabelEnum = "Other"
)

type ConsoleServerPortTypeValueEnum string

const (
	ConsoleServerPortTypeValueEnumDe9       ConsoleServerPortTypeValueEnum = "de-9"
	ConsoleServerPortTypeValueEnumDb25      ConsoleServerPortTypeValueEnum = "db-25"
	ConsoleServerPortTypeValueEnumRj11      ConsoleServerPortTypeValueEnum = "rj-11"
	ConsoleServerPortTypeValueEnumRj12      ConsoleServerPortTypeValueEnum = "rj-12"
	ConsoleServerPortTypeValueEnumRj45      ConsoleServerPortTypeValueEnum = "rj-45"
	ConsoleServerPortTypeValueEnumUsbA      ConsoleServerPortTypeValueEnum = "usb-a"
	ConsoleServerPortTypeValueEnumUsbB      ConsoleServerPortTypeValueEnum = "usb-b"
	ConsoleServerPortTypeValueEnumUsbC      ConsoleServerPortTypeValueEnum = "usb-c"
	ConsoleServerPortTypeValueEnumUsbMiniA  ConsoleServerPortTypeValueEnum = "usb-mini-a"
	ConsoleServerPortTypeValueEnumUsbMiniB  ConsoleServerPortTypeValueEnum = "usb-mini-b"
	ConsoleServerPortTypeValueEnumUsbMicroA ConsoleServerPortTypeValueEnum = "usb-micro-a"
	ConsoleServerPortTypeValueEnumUsbMicroB ConsoleServerPortTypeValueEnum = "usb-micro-b"
	ConsoleServerPortTypeValueEnumOther     ConsoleServerPortTypeValueEnum = "other"
)

type ConsoleServerPortType struct {
	Label ConsoleServerPortTypeLabelEnum `json:"label"`
	Value ConsoleServerPortTypeValueEnum `json:"value"`
}

type ConsoleServerPort struct {
	Cable                 *NestedCable                       `json:"cable,omitempty"`
	ConnectedEndpoint     map[string]string                  `json:"connected_endpoint,omitempty"`
	ConnectedEndpointType *string                            `json:"connected_endpoint_type,omitempty"`
	ConnectionStatus      *ConsoleServerPortConnectionStatus `json:"connection_status,omitempty"`
	Description           *string                            `json:"description,omitempty"`
	Device                NestedDevice                       `json:"device"`
	ID                    *int64                             `json:"id,omitempty"`
	Name                  string                             `json:"name"`
	Tags                  []string                           `json:"tags,omitempty"`
	Type                  *ConsoleServerPortType             `json:"type,omitempty"`
}
