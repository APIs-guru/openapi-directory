package shared

type WritableConsoleServerPortTemplateTypeTypeEnum string

const (
	WritableConsoleServerPortTemplateTypeTypeEnumDe9       WritableConsoleServerPortTemplateTypeTypeEnum = "de-9"
	WritableConsoleServerPortTemplateTypeTypeEnumDb25      WritableConsoleServerPortTemplateTypeTypeEnum = "db-25"
	WritableConsoleServerPortTemplateTypeTypeEnumRj11      WritableConsoleServerPortTemplateTypeTypeEnum = "rj-11"
	WritableConsoleServerPortTemplateTypeTypeEnumRj12      WritableConsoleServerPortTemplateTypeTypeEnum = "rj-12"
	WritableConsoleServerPortTemplateTypeTypeEnumRj45      WritableConsoleServerPortTemplateTypeTypeEnum = "rj-45"
	WritableConsoleServerPortTemplateTypeTypeEnumUsbA      WritableConsoleServerPortTemplateTypeTypeEnum = "usb-a"
	WritableConsoleServerPortTemplateTypeTypeEnumUsbB      WritableConsoleServerPortTemplateTypeTypeEnum = "usb-b"
	WritableConsoleServerPortTemplateTypeTypeEnumUsbC      WritableConsoleServerPortTemplateTypeTypeEnum = "usb-c"
	WritableConsoleServerPortTemplateTypeTypeEnumUsbMiniA  WritableConsoleServerPortTemplateTypeTypeEnum = "usb-mini-a"
	WritableConsoleServerPortTemplateTypeTypeEnumUsbMiniB  WritableConsoleServerPortTemplateTypeTypeEnum = "usb-mini-b"
	WritableConsoleServerPortTemplateTypeTypeEnumUsbMicroA WritableConsoleServerPortTemplateTypeTypeEnum = "usb-micro-a"
	WritableConsoleServerPortTemplateTypeTypeEnumUsbMicroB WritableConsoleServerPortTemplateTypeTypeEnum = "usb-micro-b"
	WritableConsoleServerPortTemplateTypeTypeEnumOther     WritableConsoleServerPortTemplateTypeTypeEnum = "other"
)

type WritableConsoleServerPortTemplate struct {
	DeviceType int64                                          `json:"device_type"`
	ID         *int64                                         `json:"id"`
	Name       string                                         `json:"name"`
	Type       *WritableConsoleServerPortTemplateTypeTypeEnum `json:"type"`
}
