package shared

type WritableConsoleServerPortTypeEnum string

const (
	WritableConsoleServerPortTypeEnumDe9       WritableConsoleServerPortTypeEnum = "de-9"
	WritableConsoleServerPortTypeEnumDb25      WritableConsoleServerPortTypeEnum = "db-25"
	WritableConsoleServerPortTypeEnumRj11      WritableConsoleServerPortTypeEnum = "rj-11"
	WritableConsoleServerPortTypeEnumRj12      WritableConsoleServerPortTypeEnum = "rj-12"
	WritableConsoleServerPortTypeEnumRj45      WritableConsoleServerPortTypeEnum = "rj-45"
	WritableConsoleServerPortTypeEnumUsbA      WritableConsoleServerPortTypeEnum = "usb-a"
	WritableConsoleServerPortTypeEnumUsbB      WritableConsoleServerPortTypeEnum = "usb-b"
	WritableConsoleServerPortTypeEnumUsbC      WritableConsoleServerPortTypeEnum = "usb-c"
	WritableConsoleServerPortTypeEnumUsbMiniA  WritableConsoleServerPortTypeEnum = "usb-mini-a"
	WritableConsoleServerPortTypeEnumUsbMiniB  WritableConsoleServerPortTypeEnum = "usb-mini-b"
	WritableConsoleServerPortTypeEnumUsbMicroA WritableConsoleServerPortTypeEnum = "usb-micro-a"
	WritableConsoleServerPortTypeEnumUsbMicroB WritableConsoleServerPortTypeEnum = "usb-micro-b"
	WritableConsoleServerPortTypeEnumOther     WritableConsoleServerPortTypeEnum = "other"
)

type WritableConsoleServerPort struct {
	Cable                 *NestedCable                       `json:"cable,omitempty"`
	ConnectedEndpoint     map[string]string                  `json:"connected_endpoint,omitempty"`
	ConnectedEndpointType *string                            `json:"connected_endpoint_type,omitempty"`
	ConnectionStatus      *bool                              `json:"connection_status,omitempty"`
	Description           *string                            `json:"description,omitempty"`
	Device                int64                              `json:"device"`
	ID                    *int64                             `json:"id,omitempty"`
	Name                  string                             `json:"name"`
	Tags                  []string                           `json:"tags,omitempty"`
	Type                  *WritableConsoleServerPortTypeEnum `json:"type,omitempty"`
}
