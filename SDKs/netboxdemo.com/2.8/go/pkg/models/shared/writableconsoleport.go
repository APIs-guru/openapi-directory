package shared

type WritableConsolePortTypeEnum string

const (
	WritableConsolePortTypeEnumDe9       WritableConsolePortTypeEnum = "de-9"
	WritableConsolePortTypeEnumDb25      WritableConsolePortTypeEnum = "db-25"
	WritableConsolePortTypeEnumRj11      WritableConsolePortTypeEnum = "rj-11"
	WritableConsolePortTypeEnumRj12      WritableConsolePortTypeEnum = "rj-12"
	WritableConsolePortTypeEnumRj45      WritableConsolePortTypeEnum = "rj-45"
	WritableConsolePortTypeEnumUsbA      WritableConsolePortTypeEnum = "usb-a"
	WritableConsolePortTypeEnumUsbB      WritableConsolePortTypeEnum = "usb-b"
	WritableConsolePortTypeEnumUsbC      WritableConsolePortTypeEnum = "usb-c"
	WritableConsolePortTypeEnumUsbMiniA  WritableConsolePortTypeEnum = "usb-mini-a"
	WritableConsolePortTypeEnumUsbMiniB  WritableConsolePortTypeEnum = "usb-mini-b"
	WritableConsolePortTypeEnumUsbMicroA WritableConsolePortTypeEnum = "usb-micro-a"
	WritableConsolePortTypeEnumUsbMicroB WritableConsolePortTypeEnum = "usb-micro-b"
	WritableConsolePortTypeEnumOther     WritableConsolePortTypeEnum = "other"
)

type WritableConsolePortInput struct {
	Cable            *NestedCableInput            `json:"cable,omitempty"`
	ConnectionStatus *bool                        `json:"connection_status,omitempty"`
	Description      *string                      `json:"description,omitempty"`
	Device           int64                        `json:"device"`
	Name             string                       `json:"name"`
	Tags             []string                     `json:"tags,omitempty"`
	Type             *WritableConsolePortTypeEnum `json:"type,omitempty"`
}
