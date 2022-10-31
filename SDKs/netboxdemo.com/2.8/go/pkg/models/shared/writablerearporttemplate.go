package shared

type WritableRearPortTemplateTypeEnum string

const (
	WritableRearPortTemplateTypeEnumEightp8c              WritableRearPortTemplateTypeEnum = "8p8c"
	WritableRearPortTemplateTypeEnumOneHundredAndTenPunch WritableRearPortTemplateTypeEnum = "110-punch"
	WritableRearPortTemplateTypeEnumBnc                   WritableRearPortTemplateTypeEnum = "bnc"
	WritableRearPortTemplateTypeEnumMrj21                 WritableRearPortTemplateTypeEnum = "mrj21"
	WritableRearPortTemplateTypeEnumFc                    WritableRearPortTemplateTypeEnum = "fc"
	WritableRearPortTemplateTypeEnumLc                    WritableRearPortTemplateTypeEnum = "lc"
	WritableRearPortTemplateTypeEnumLcApc                 WritableRearPortTemplateTypeEnum = "lc-apc"
	WritableRearPortTemplateTypeEnumLsh                   WritableRearPortTemplateTypeEnum = "lsh"
	WritableRearPortTemplateTypeEnumLshApc                WritableRearPortTemplateTypeEnum = "lsh-apc"
	WritableRearPortTemplateTypeEnumMpo                   WritableRearPortTemplateTypeEnum = "mpo"
	WritableRearPortTemplateTypeEnumMtrj                  WritableRearPortTemplateTypeEnum = "mtrj"
	WritableRearPortTemplateTypeEnumSc                    WritableRearPortTemplateTypeEnum = "sc"
	WritableRearPortTemplateTypeEnumScApc                 WritableRearPortTemplateTypeEnum = "sc-apc"
	WritableRearPortTemplateTypeEnumSt                    WritableRearPortTemplateTypeEnum = "st"
)

type WritableRearPortTemplate struct {
	DeviceType int64                            `json:"device_type"`
	ID         *int64                           `json:"id,omitempty"`
	Name       string                           `json:"name"`
	Positions  *int64                           `json:"positions,omitempty"`
	Type       WritableRearPortTemplateTypeEnum `json:"type"`
}
