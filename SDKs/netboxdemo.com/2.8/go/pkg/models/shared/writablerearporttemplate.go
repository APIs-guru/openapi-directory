package shared

type WritableRearPortTemplateTypeTypeEnum string

const (
	WritableRearPortTemplateTypeTypeEnumEightp8c              WritableRearPortTemplateTypeTypeEnum = "8p8c"
	WritableRearPortTemplateTypeTypeEnumOneHundredAndTenPunch WritableRearPortTemplateTypeTypeEnum = "110-punch"
	WritableRearPortTemplateTypeTypeEnumBnc                   WritableRearPortTemplateTypeTypeEnum = "bnc"
	WritableRearPortTemplateTypeTypeEnumMrj21                 WritableRearPortTemplateTypeTypeEnum = "mrj21"
	WritableRearPortTemplateTypeTypeEnumFc                    WritableRearPortTemplateTypeTypeEnum = "fc"
	WritableRearPortTemplateTypeTypeEnumLc                    WritableRearPortTemplateTypeTypeEnum = "lc"
	WritableRearPortTemplateTypeTypeEnumLcApc                 WritableRearPortTemplateTypeTypeEnum = "lc-apc"
	WritableRearPortTemplateTypeTypeEnumLsh                   WritableRearPortTemplateTypeTypeEnum = "lsh"
	WritableRearPortTemplateTypeTypeEnumLshApc                WritableRearPortTemplateTypeTypeEnum = "lsh-apc"
	WritableRearPortTemplateTypeTypeEnumMpo                   WritableRearPortTemplateTypeTypeEnum = "mpo"
	WritableRearPortTemplateTypeTypeEnumMtrj                  WritableRearPortTemplateTypeTypeEnum = "mtrj"
	WritableRearPortTemplateTypeTypeEnumSc                    WritableRearPortTemplateTypeTypeEnum = "sc"
	WritableRearPortTemplateTypeTypeEnumScApc                 WritableRearPortTemplateTypeTypeEnum = "sc-apc"
	WritableRearPortTemplateTypeTypeEnumSt                    WritableRearPortTemplateTypeTypeEnum = "st"
)

type WritableRearPortTemplate struct {
	DeviceType int64                                `json:"device_type"`
	ID         *int64                               `json:"id"`
	Name       string                               `json:"name"`
	Positions  *int64                               `json:"positions"`
	Type       WritableRearPortTemplateTypeTypeEnum `json:"type"`
}
