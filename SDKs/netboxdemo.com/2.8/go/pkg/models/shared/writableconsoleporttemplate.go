package shared

type WritableConsolePortTemplateTypeEnum string

const (
	WritableConsolePortTemplateTypeEnumDe9       WritableConsolePortTemplateTypeEnum = "de-9"
	WritableConsolePortTemplateTypeEnumDb25      WritableConsolePortTemplateTypeEnum = "db-25"
	WritableConsolePortTemplateTypeEnumRj11      WritableConsolePortTemplateTypeEnum = "rj-11"
	WritableConsolePortTemplateTypeEnumRj12      WritableConsolePortTemplateTypeEnum = "rj-12"
	WritableConsolePortTemplateTypeEnumRj45      WritableConsolePortTemplateTypeEnum = "rj-45"
	WritableConsolePortTemplateTypeEnumUsbA      WritableConsolePortTemplateTypeEnum = "usb-a"
	WritableConsolePortTemplateTypeEnumUsbB      WritableConsolePortTemplateTypeEnum = "usb-b"
	WritableConsolePortTemplateTypeEnumUsbC      WritableConsolePortTemplateTypeEnum = "usb-c"
	WritableConsolePortTemplateTypeEnumUsbMiniA  WritableConsolePortTemplateTypeEnum = "usb-mini-a"
	WritableConsolePortTemplateTypeEnumUsbMiniB  WritableConsolePortTemplateTypeEnum = "usb-mini-b"
	WritableConsolePortTemplateTypeEnumUsbMicroA WritableConsolePortTemplateTypeEnum = "usb-micro-a"
	WritableConsolePortTemplateTypeEnumUsbMicroB WritableConsolePortTemplateTypeEnum = "usb-micro-b"
	WritableConsolePortTemplateTypeEnumOther     WritableConsolePortTemplateTypeEnum = "other"
)

type WritableConsolePortTemplateInput struct {
	DeviceType int64                                `json:"device_type"`
	Name       string                               `json:"name"`
	Type       *WritableConsolePortTemplateTypeEnum `json:"type,omitempty"`
}
