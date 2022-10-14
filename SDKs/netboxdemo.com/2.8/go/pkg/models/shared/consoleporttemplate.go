package shared

type ConsolePortTemplateTypeLabelEnum string

const (
	ConsolePortTemplateTypeLabelEnumDe9       ConsolePortTemplateTypeLabelEnum = "DE-9"
	ConsolePortTemplateTypeLabelEnumDb25      ConsolePortTemplateTypeLabelEnum = "DB-25"
	ConsolePortTemplateTypeLabelEnumRj11      ConsolePortTemplateTypeLabelEnum = "RJ-11"
	ConsolePortTemplateTypeLabelEnumRj12      ConsolePortTemplateTypeLabelEnum = "RJ-12"
	ConsolePortTemplateTypeLabelEnumRj45      ConsolePortTemplateTypeLabelEnum = "RJ-45"
	ConsolePortTemplateTypeLabelEnumUsbTypeA  ConsolePortTemplateTypeLabelEnum = "USB Type A"
	ConsolePortTemplateTypeLabelEnumUsbTypeB  ConsolePortTemplateTypeLabelEnum = "USB Type B"
	ConsolePortTemplateTypeLabelEnumUsbTypeC  ConsolePortTemplateTypeLabelEnum = "USB Type C"
	ConsolePortTemplateTypeLabelEnumUsbMiniA  ConsolePortTemplateTypeLabelEnum = "USB Mini A"
	ConsolePortTemplateTypeLabelEnumUsbMiniB  ConsolePortTemplateTypeLabelEnum = "USB Mini B"
	ConsolePortTemplateTypeLabelEnumUsbMicroA ConsolePortTemplateTypeLabelEnum = "USB Micro A"
	ConsolePortTemplateTypeLabelEnumUsbMicroB ConsolePortTemplateTypeLabelEnum = "USB Micro B"
	ConsolePortTemplateTypeLabelEnumOther     ConsolePortTemplateTypeLabelEnum = "Other"
)

type ConsolePortTemplateTypeValueEnum string

const (
	ConsolePortTemplateTypeValueEnumDe9       ConsolePortTemplateTypeValueEnum = "de-9"
	ConsolePortTemplateTypeValueEnumDb25      ConsolePortTemplateTypeValueEnum = "db-25"
	ConsolePortTemplateTypeValueEnumRj11      ConsolePortTemplateTypeValueEnum = "rj-11"
	ConsolePortTemplateTypeValueEnumRj12      ConsolePortTemplateTypeValueEnum = "rj-12"
	ConsolePortTemplateTypeValueEnumRj45      ConsolePortTemplateTypeValueEnum = "rj-45"
	ConsolePortTemplateTypeValueEnumUsbA      ConsolePortTemplateTypeValueEnum = "usb-a"
	ConsolePortTemplateTypeValueEnumUsbB      ConsolePortTemplateTypeValueEnum = "usb-b"
	ConsolePortTemplateTypeValueEnumUsbC      ConsolePortTemplateTypeValueEnum = "usb-c"
	ConsolePortTemplateTypeValueEnumUsbMiniA  ConsolePortTemplateTypeValueEnum = "usb-mini-a"
	ConsolePortTemplateTypeValueEnumUsbMiniB  ConsolePortTemplateTypeValueEnum = "usb-mini-b"
	ConsolePortTemplateTypeValueEnumUsbMicroA ConsolePortTemplateTypeValueEnum = "usb-micro-a"
	ConsolePortTemplateTypeValueEnumUsbMicroB ConsolePortTemplateTypeValueEnum = "usb-micro-b"
	ConsolePortTemplateTypeValueEnumOther     ConsolePortTemplateTypeValueEnum = "other"
)

type ConsolePortTemplateTypeType struct {
	Label ConsolePortTemplateTypeLabelEnum `json:"label"`
	Value ConsolePortTemplateTypeValueEnum `json:"value"`
}

type ConsolePortTemplate struct {
	DeviceType NestedDeviceType             `json:"device_type"`
	ID         *int64                       `json:"id,omitempty"`
	Name       string                       `json:"name"`
	Type       *ConsolePortTemplateTypeType `json:"type,omitempty"`
}
