package shared

type WritableConsolePortTypeTypeEnum string

const (
	WritableConsolePortTypeTypeEnumDe9       WritableConsolePortTypeTypeEnum = "de-9"
	WritableConsolePortTypeTypeEnumDb25      WritableConsolePortTypeTypeEnum = "db-25"
	WritableConsolePortTypeTypeEnumRj11      WritableConsolePortTypeTypeEnum = "rj-11"
	WritableConsolePortTypeTypeEnumRj12      WritableConsolePortTypeTypeEnum = "rj-12"
	WritableConsolePortTypeTypeEnumRj45      WritableConsolePortTypeTypeEnum = "rj-45"
	WritableConsolePortTypeTypeEnumUsbA      WritableConsolePortTypeTypeEnum = "usb-a"
	WritableConsolePortTypeTypeEnumUsbB      WritableConsolePortTypeTypeEnum = "usb-b"
	WritableConsolePortTypeTypeEnumUsbC      WritableConsolePortTypeTypeEnum = "usb-c"
	WritableConsolePortTypeTypeEnumUsbMiniA  WritableConsolePortTypeTypeEnum = "usb-mini-a"
	WritableConsolePortTypeTypeEnumUsbMiniB  WritableConsolePortTypeTypeEnum = "usb-mini-b"
	WritableConsolePortTypeTypeEnumUsbMicroA WritableConsolePortTypeTypeEnum = "usb-micro-a"
	WritableConsolePortTypeTypeEnumUsbMicroB WritableConsolePortTypeTypeEnum = "usb-micro-b"
	WritableConsolePortTypeTypeEnumOther     WritableConsolePortTypeTypeEnum = "other"
)

type WritableConsolePort struct {
	Cable                 *NestedCable                     `json:"cable"`
	ConnectedEndpoint     map[string]string                `json:"connected_endpoint"`
	ConnectedEndpointType *string                          `json:"connected_endpoint_type"`
	ConnectionStatus      *bool                            `json:"connection_status"`
	Description           *string                          `json:"description"`
	Device                int64                            `json:"device"`
	ID                    *int64                           `json:"id"`
	Name                  string                           `json:"name"`
	Tags                  []string                         `json:"tags"`
	Type                  *WritableConsolePortTypeTypeEnum `json:"type"`
}
