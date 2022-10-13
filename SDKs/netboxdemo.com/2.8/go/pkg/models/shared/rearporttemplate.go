package shared

type RearPortTemplateTypeLabelEnum string

const (
	RearPortTemplateTypeLabelEnumEightP8C              RearPortTemplateTypeLabelEnum = "8P8C"
	RearPortTemplateTypeLabelEnumOneHundredAndTenPunch RearPortTemplateTypeLabelEnum = "110 Punch"
	RearPortTemplateTypeLabelEnumBnc                   RearPortTemplateTypeLabelEnum = "BNC"
	RearPortTemplateTypeLabelEnumMrj21                 RearPortTemplateTypeLabelEnum = "MRJ21"
	RearPortTemplateTypeLabelEnumFc                    RearPortTemplateTypeLabelEnum = "FC"
	RearPortTemplateTypeLabelEnumLc                    RearPortTemplateTypeLabelEnum = "LC"
	RearPortTemplateTypeLabelEnumLcApc                 RearPortTemplateTypeLabelEnum = "LC/APC"
	RearPortTemplateTypeLabelEnumLsh                   RearPortTemplateTypeLabelEnum = "LSH"
	RearPortTemplateTypeLabelEnumLshApc                RearPortTemplateTypeLabelEnum = "LSH/APC"
	RearPortTemplateTypeLabelEnumMpo                   RearPortTemplateTypeLabelEnum = "MPO"
	RearPortTemplateTypeLabelEnumMtrj                  RearPortTemplateTypeLabelEnum = "MTRJ"
	RearPortTemplateTypeLabelEnumSc                    RearPortTemplateTypeLabelEnum = "SC"
	RearPortTemplateTypeLabelEnumScApc                 RearPortTemplateTypeLabelEnum = "SC/APC"
	RearPortTemplateTypeLabelEnumSt                    RearPortTemplateTypeLabelEnum = "ST"
)

type RearPortTemplateTypeValueEnum string

const (
	RearPortTemplateTypeValueEnumEightp8c              RearPortTemplateTypeValueEnum = "8p8c"
	RearPortTemplateTypeValueEnumOneHundredAndTenPunch RearPortTemplateTypeValueEnum = "110-punch"
	RearPortTemplateTypeValueEnumBnc                   RearPortTemplateTypeValueEnum = "bnc"
	RearPortTemplateTypeValueEnumMrj21                 RearPortTemplateTypeValueEnum = "mrj21"
	RearPortTemplateTypeValueEnumFc                    RearPortTemplateTypeValueEnum = "fc"
	RearPortTemplateTypeValueEnumLc                    RearPortTemplateTypeValueEnum = "lc"
	RearPortTemplateTypeValueEnumLcApc                 RearPortTemplateTypeValueEnum = "lc-apc"
	RearPortTemplateTypeValueEnumLsh                   RearPortTemplateTypeValueEnum = "lsh"
	RearPortTemplateTypeValueEnumLshApc                RearPortTemplateTypeValueEnum = "lsh-apc"
	RearPortTemplateTypeValueEnumMpo                   RearPortTemplateTypeValueEnum = "mpo"
	RearPortTemplateTypeValueEnumMtrj                  RearPortTemplateTypeValueEnum = "mtrj"
	RearPortTemplateTypeValueEnumSc                    RearPortTemplateTypeValueEnum = "sc"
	RearPortTemplateTypeValueEnumScApc                 RearPortTemplateTypeValueEnum = "sc-apc"
	RearPortTemplateTypeValueEnumSt                    RearPortTemplateTypeValueEnum = "st"
)

type RearPortTemplateTypeType struct {
	Label RearPortTemplateTypeLabelEnum `json:"label"`
	Value RearPortTemplateTypeValueEnum `json:"value"`
}

type RearPortTemplate struct {
	DeviceType NestedDeviceType         `json:"device_type"`
	ID         *int64                   `json:"id"`
	Name       string                   `json:"name"`
	Positions  *int64                   `json:"positions"`
	Type       RearPortTemplateTypeType `json:"type"`
}
