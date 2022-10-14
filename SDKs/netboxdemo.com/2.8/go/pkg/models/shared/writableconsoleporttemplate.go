package shared

type WritableConsolePortTemplateTypeTypeEnum string

const (
	WritableConsolePortTemplateTypeTypeEnumDe9       WritableConsolePortTemplateTypeTypeEnum = "de-9"
	WritableConsolePortTemplateTypeTypeEnumDb25      WritableConsolePortTemplateTypeTypeEnum = "db-25"
	WritableConsolePortTemplateTypeTypeEnumRj11      WritableConsolePortTemplateTypeTypeEnum = "rj-11"
	WritableConsolePortTemplateTypeTypeEnumRj12      WritableConsolePortTemplateTypeTypeEnum = "rj-12"
	WritableConsolePortTemplateTypeTypeEnumRj45      WritableConsolePortTemplateTypeTypeEnum = "rj-45"
	WritableConsolePortTemplateTypeTypeEnumUsbA      WritableConsolePortTemplateTypeTypeEnum = "usb-a"
	WritableConsolePortTemplateTypeTypeEnumUsbB      WritableConsolePortTemplateTypeTypeEnum = "usb-b"
	WritableConsolePortTemplateTypeTypeEnumUsbC      WritableConsolePortTemplateTypeTypeEnum = "usb-c"
	WritableConsolePortTemplateTypeTypeEnumUsbMiniA  WritableConsolePortTemplateTypeTypeEnum = "usb-mini-a"
	WritableConsolePortTemplateTypeTypeEnumUsbMiniB  WritableConsolePortTemplateTypeTypeEnum = "usb-mini-b"
	WritableConsolePortTemplateTypeTypeEnumUsbMicroA WritableConsolePortTemplateTypeTypeEnum = "usb-micro-a"
	WritableConsolePortTemplateTypeTypeEnumUsbMicroB WritableConsolePortTemplateTypeTypeEnum = "usb-micro-b"
	WritableConsolePortTemplateTypeTypeEnumOther     WritableConsolePortTemplateTypeTypeEnum = "other"
)

type WritableConsolePortTemplate struct {
	DeviceType int64                                    `json:"device_type"`
	ID         *int64                                   `json:"id,omitempty"`
	Name       string                                   `json:"name"`
	Type       *WritableConsolePortTemplateTypeTypeEnum `json:"type,omitempty"`
}
