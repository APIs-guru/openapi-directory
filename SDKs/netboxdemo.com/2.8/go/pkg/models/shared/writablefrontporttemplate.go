package shared

type WritableFrontPortTemplateTypeTypeEnum string

const (
	WritableFrontPortTemplateTypeTypeEnumEightp8c              WritableFrontPortTemplateTypeTypeEnum = "8p8c"
	WritableFrontPortTemplateTypeTypeEnumOneHundredAndTenPunch WritableFrontPortTemplateTypeTypeEnum = "110-punch"
	WritableFrontPortTemplateTypeTypeEnumBnc                   WritableFrontPortTemplateTypeTypeEnum = "bnc"
	WritableFrontPortTemplateTypeTypeEnumMrj21                 WritableFrontPortTemplateTypeTypeEnum = "mrj21"
	WritableFrontPortTemplateTypeTypeEnumFc                    WritableFrontPortTemplateTypeTypeEnum = "fc"
	WritableFrontPortTemplateTypeTypeEnumLc                    WritableFrontPortTemplateTypeTypeEnum = "lc"
	WritableFrontPortTemplateTypeTypeEnumLcApc                 WritableFrontPortTemplateTypeTypeEnum = "lc-apc"
	WritableFrontPortTemplateTypeTypeEnumLsh                   WritableFrontPortTemplateTypeTypeEnum = "lsh"
	WritableFrontPortTemplateTypeTypeEnumLshApc                WritableFrontPortTemplateTypeTypeEnum = "lsh-apc"
	WritableFrontPortTemplateTypeTypeEnumMpo                   WritableFrontPortTemplateTypeTypeEnum = "mpo"
	WritableFrontPortTemplateTypeTypeEnumMtrj                  WritableFrontPortTemplateTypeTypeEnum = "mtrj"
	WritableFrontPortTemplateTypeTypeEnumSc                    WritableFrontPortTemplateTypeTypeEnum = "sc"
	WritableFrontPortTemplateTypeTypeEnumScApc                 WritableFrontPortTemplateTypeTypeEnum = "sc-apc"
	WritableFrontPortTemplateTypeTypeEnumSt                    WritableFrontPortTemplateTypeTypeEnum = "st"
)

type WritableFrontPortTemplate struct {
	DeviceType       int64                                 `json:"device_type"`
	ID               *int64                                `json:"id"`
	Name             string                                `json:"name"`
	RearPort         int64                                 `json:"rear_port"`
	RearPortPosition *int64                                `json:"rear_port_position"`
	Type             WritableFrontPortTemplateTypeTypeEnum `json:"type"`
}
