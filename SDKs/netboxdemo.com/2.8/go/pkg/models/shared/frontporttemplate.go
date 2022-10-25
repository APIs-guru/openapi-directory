package shared

type FrontPortTemplateTypeLabelEnum string

const (
	FrontPortTemplateTypeLabelEnumEightP8C              FrontPortTemplateTypeLabelEnum = "8P8C"
	FrontPortTemplateTypeLabelEnumOneHundredAndTenPunch FrontPortTemplateTypeLabelEnum = "110 Punch"
	FrontPortTemplateTypeLabelEnumBnc                   FrontPortTemplateTypeLabelEnum = "BNC"
	FrontPortTemplateTypeLabelEnumMrj21                 FrontPortTemplateTypeLabelEnum = "MRJ21"
	FrontPortTemplateTypeLabelEnumFc                    FrontPortTemplateTypeLabelEnum = "FC"
	FrontPortTemplateTypeLabelEnumLc                    FrontPortTemplateTypeLabelEnum = "LC"
	FrontPortTemplateTypeLabelEnumLcApc                 FrontPortTemplateTypeLabelEnum = "LC/APC"
	FrontPortTemplateTypeLabelEnumLsh                   FrontPortTemplateTypeLabelEnum = "LSH"
	FrontPortTemplateTypeLabelEnumLshApc                FrontPortTemplateTypeLabelEnum = "LSH/APC"
	FrontPortTemplateTypeLabelEnumMpo                   FrontPortTemplateTypeLabelEnum = "MPO"
	FrontPortTemplateTypeLabelEnumMtrj                  FrontPortTemplateTypeLabelEnum = "MTRJ"
	FrontPortTemplateTypeLabelEnumSc                    FrontPortTemplateTypeLabelEnum = "SC"
	FrontPortTemplateTypeLabelEnumScApc                 FrontPortTemplateTypeLabelEnum = "SC/APC"
	FrontPortTemplateTypeLabelEnumSt                    FrontPortTemplateTypeLabelEnum = "ST"
)

type FrontPortTemplateTypeValueEnum string

const (
	FrontPortTemplateTypeValueEnumEightp8c              FrontPortTemplateTypeValueEnum = "8p8c"
	FrontPortTemplateTypeValueEnumOneHundredAndTenPunch FrontPortTemplateTypeValueEnum = "110-punch"
	FrontPortTemplateTypeValueEnumBnc                   FrontPortTemplateTypeValueEnum = "bnc"
	FrontPortTemplateTypeValueEnumMrj21                 FrontPortTemplateTypeValueEnum = "mrj21"
	FrontPortTemplateTypeValueEnumFc                    FrontPortTemplateTypeValueEnum = "fc"
	FrontPortTemplateTypeValueEnumLc                    FrontPortTemplateTypeValueEnum = "lc"
	FrontPortTemplateTypeValueEnumLcApc                 FrontPortTemplateTypeValueEnum = "lc-apc"
	FrontPortTemplateTypeValueEnumLsh                   FrontPortTemplateTypeValueEnum = "lsh"
	FrontPortTemplateTypeValueEnumLshApc                FrontPortTemplateTypeValueEnum = "lsh-apc"
	FrontPortTemplateTypeValueEnumMpo                   FrontPortTemplateTypeValueEnum = "mpo"
	FrontPortTemplateTypeValueEnumMtrj                  FrontPortTemplateTypeValueEnum = "mtrj"
	FrontPortTemplateTypeValueEnumSc                    FrontPortTemplateTypeValueEnum = "sc"
	FrontPortTemplateTypeValueEnumScApc                 FrontPortTemplateTypeValueEnum = "sc-apc"
	FrontPortTemplateTypeValueEnumSt                    FrontPortTemplateTypeValueEnum = "st"
)

type FrontPortTemplateType struct {
	Label FrontPortTemplateTypeLabelEnum `json:"label"`
	Value FrontPortTemplateTypeValueEnum `json:"value"`
}

type FrontPortTemplate struct {
	DeviceType       NestedDeviceType       `json:"device_type"`
	ID               *int64                 `json:"id,omitempty"`
	Name             string                 `json:"name"`
	RearPort         NestedRearPortTemplate `json:"rear_port"`
	RearPortPosition *int64                 `json:"rear_port_position,omitempty"`
	Type             FrontPortTemplateType  `json:"type"`
}
