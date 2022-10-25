package shared

type WritableConsoleServerPortTemplateTypeEnum string

const (
	WritableConsoleServerPortTemplateTypeEnumDe9       WritableConsoleServerPortTemplateTypeEnum = "de-9"
	WritableConsoleServerPortTemplateTypeEnumDb25      WritableConsoleServerPortTemplateTypeEnum = "db-25"
	WritableConsoleServerPortTemplateTypeEnumRj11      WritableConsoleServerPortTemplateTypeEnum = "rj-11"
	WritableConsoleServerPortTemplateTypeEnumRj12      WritableConsoleServerPortTemplateTypeEnum = "rj-12"
	WritableConsoleServerPortTemplateTypeEnumRj45      WritableConsoleServerPortTemplateTypeEnum = "rj-45"
	WritableConsoleServerPortTemplateTypeEnumUsbA      WritableConsoleServerPortTemplateTypeEnum = "usb-a"
	WritableConsoleServerPortTemplateTypeEnumUsbB      WritableConsoleServerPortTemplateTypeEnum = "usb-b"
	WritableConsoleServerPortTemplateTypeEnumUsbC      WritableConsoleServerPortTemplateTypeEnum = "usb-c"
	WritableConsoleServerPortTemplateTypeEnumUsbMiniA  WritableConsoleServerPortTemplateTypeEnum = "usb-mini-a"
	WritableConsoleServerPortTemplateTypeEnumUsbMiniB  WritableConsoleServerPortTemplateTypeEnum = "usb-mini-b"
	WritableConsoleServerPortTemplateTypeEnumUsbMicroA WritableConsoleServerPortTemplateTypeEnum = "usb-micro-a"
	WritableConsoleServerPortTemplateTypeEnumUsbMicroB WritableConsoleServerPortTemplateTypeEnum = "usb-micro-b"
	WritableConsoleServerPortTemplateTypeEnumOther     WritableConsoleServerPortTemplateTypeEnum = "other"
)

type WritableConsoleServerPortTemplate struct {
	DeviceType int64                                      `json:"device_type"`
	ID         *int64                                     `json:"id,omitempty"`
	Name       string                                     `json:"name"`
	Type       *WritableConsoleServerPortTemplateTypeEnum `json:"type,omitempty"`
}
