package shared

type WritableConsoleServerPortTypeTypeEnum string

const (
	WritableConsoleServerPortTypeTypeEnumDe9       WritableConsoleServerPortTypeTypeEnum = "de-9"
	WritableConsoleServerPortTypeTypeEnumDb25      WritableConsoleServerPortTypeTypeEnum = "db-25"
	WritableConsoleServerPortTypeTypeEnumRj11      WritableConsoleServerPortTypeTypeEnum = "rj-11"
	WritableConsoleServerPortTypeTypeEnumRj12      WritableConsoleServerPortTypeTypeEnum = "rj-12"
	WritableConsoleServerPortTypeTypeEnumRj45      WritableConsoleServerPortTypeTypeEnum = "rj-45"
	WritableConsoleServerPortTypeTypeEnumUsbA      WritableConsoleServerPortTypeTypeEnum = "usb-a"
	WritableConsoleServerPortTypeTypeEnumUsbB      WritableConsoleServerPortTypeTypeEnum = "usb-b"
	WritableConsoleServerPortTypeTypeEnumUsbC      WritableConsoleServerPortTypeTypeEnum = "usb-c"
	WritableConsoleServerPortTypeTypeEnumUsbMiniA  WritableConsoleServerPortTypeTypeEnum = "usb-mini-a"
	WritableConsoleServerPortTypeTypeEnumUsbMiniB  WritableConsoleServerPortTypeTypeEnum = "usb-mini-b"
	WritableConsoleServerPortTypeTypeEnumUsbMicroA WritableConsoleServerPortTypeTypeEnum = "usb-micro-a"
	WritableConsoleServerPortTypeTypeEnumUsbMicroB WritableConsoleServerPortTypeTypeEnum = "usb-micro-b"
	WritableConsoleServerPortTypeTypeEnumOther     WritableConsoleServerPortTypeTypeEnum = "other"
)

type WritableConsoleServerPort struct {
	Cable                 *NestedCable                           `json:"cable,omitempty"`
	ConnectedEndpoint     map[string]string                      `json:"connected_endpoint,omitempty"`
	ConnectedEndpointType *string                                `json:"connected_endpoint_type,omitempty"`
	ConnectionStatus      *bool                                  `json:"connection_status,omitempty"`
	Description           *string                                `json:"description,omitempty"`
	Device                int64                                  `json:"device"`
	ID                    *int64                                 `json:"id,omitempty"`
	Name                  string                                 `json:"name"`
	Tags                  []string                               `json:"tags,omitempty"`
	Type                  *WritableConsoleServerPortTypeTypeEnum `json:"type,omitempty"`
}
