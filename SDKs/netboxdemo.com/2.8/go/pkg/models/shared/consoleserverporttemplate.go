package shared

type ConsoleServerPortTemplateTypeLabelEnum string

const (
	ConsoleServerPortTemplateTypeLabelEnumDe9       ConsoleServerPortTemplateTypeLabelEnum = "DE-9"
	ConsoleServerPortTemplateTypeLabelEnumDb25      ConsoleServerPortTemplateTypeLabelEnum = "DB-25"
	ConsoleServerPortTemplateTypeLabelEnumRj11      ConsoleServerPortTemplateTypeLabelEnum = "RJ-11"
	ConsoleServerPortTemplateTypeLabelEnumRj12      ConsoleServerPortTemplateTypeLabelEnum = "RJ-12"
	ConsoleServerPortTemplateTypeLabelEnumRj45      ConsoleServerPortTemplateTypeLabelEnum = "RJ-45"
	ConsoleServerPortTemplateTypeLabelEnumUsbTypeA  ConsoleServerPortTemplateTypeLabelEnum = "USB Type A"
	ConsoleServerPortTemplateTypeLabelEnumUsbTypeB  ConsoleServerPortTemplateTypeLabelEnum = "USB Type B"
	ConsoleServerPortTemplateTypeLabelEnumUsbTypeC  ConsoleServerPortTemplateTypeLabelEnum = "USB Type C"
	ConsoleServerPortTemplateTypeLabelEnumUsbMiniA  ConsoleServerPortTemplateTypeLabelEnum = "USB Mini A"
	ConsoleServerPortTemplateTypeLabelEnumUsbMiniB  ConsoleServerPortTemplateTypeLabelEnum = "USB Mini B"
	ConsoleServerPortTemplateTypeLabelEnumUsbMicroA ConsoleServerPortTemplateTypeLabelEnum = "USB Micro A"
	ConsoleServerPortTemplateTypeLabelEnumUsbMicroB ConsoleServerPortTemplateTypeLabelEnum = "USB Micro B"
	ConsoleServerPortTemplateTypeLabelEnumOther     ConsoleServerPortTemplateTypeLabelEnum = "Other"
)

type ConsoleServerPortTemplateTypeValueEnum string

const (
	ConsoleServerPortTemplateTypeValueEnumDe9       ConsoleServerPortTemplateTypeValueEnum = "de-9"
	ConsoleServerPortTemplateTypeValueEnumDb25      ConsoleServerPortTemplateTypeValueEnum = "db-25"
	ConsoleServerPortTemplateTypeValueEnumRj11      ConsoleServerPortTemplateTypeValueEnum = "rj-11"
	ConsoleServerPortTemplateTypeValueEnumRj12      ConsoleServerPortTemplateTypeValueEnum = "rj-12"
	ConsoleServerPortTemplateTypeValueEnumRj45      ConsoleServerPortTemplateTypeValueEnum = "rj-45"
	ConsoleServerPortTemplateTypeValueEnumUsbA      ConsoleServerPortTemplateTypeValueEnum = "usb-a"
	ConsoleServerPortTemplateTypeValueEnumUsbB      ConsoleServerPortTemplateTypeValueEnum = "usb-b"
	ConsoleServerPortTemplateTypeValueEnumUsbC      ConsoleServerPortTemplateTypeValueEnum = "usb-c"
	ConsoleServerPortTemplateTypeValueEnumUsbMiniA  ConsoleServerPortTemplateTypeValueEnum = "usb-mini-a"
	ConsoleServerPortTemplateTypeValueEnumUsbMiniB  ConsoleServerPortTemplateTypeValueEnum = "usb-mini-b"
	ConsoleServerPortTemplateTypeValueEnumUsbMicroA ConsoleServerPortTemplateTypeValueEnum = "usb-micro-a"
	ConsoleServerPortTemplateTypeValueEnumUsbMicroB ConsoleServerPortTemplateTypeValueEnum = "usb-micro-b"
	ConsoleServerPortTemplateTypeValueEnumOther     ConsoleServerPortTemplateTypeValueEnum = "other"
)

type ConsoleServerPortTemplateTypeType struct {
	Label ConsoleServerPortTemplateTypeLabelEnum `json:"label"`
	Value ConsoleServerPortTemplateTypeValueEnum `json:"value"`
}

type ConsoleServerPortTemplate struct {
	DeviceType NestedDeviceType                   `json:"device_type"`
	ID         *int64                             `json:"id,omitempty"`
	Name       string                             `json:"name"`
	Type       *ConsoleServerPortTemplateTypeType `json:"type,omitempty"`
}
