package shared




type WritableFrontPortTemplateTypeEnum string

const (
    WritableFrontPortTemplateTypeEnumEightp8c WritableFrontPortTemplateTypeEnum = "8p8c"
WritableFrontPortTemplateTypeEnumOneHundredAndTenPunch WritableFrontPortTemplateTypeEnum = "110-punch"
WritableFrontPortTemplateTypeEnumBnc WritableFrontPortTemplateTypeEnum = "bnc"
WritableFrontPortTemplateTypeEnumMrj21 WritableFrontPortTemplateTypeEnum = "mrj21"
WritableFrontPortTemplateTypeEnumFc WritableFrontPortTemplateTypeEnum = "fc"
WritableFrontPortTemplateTypeEnumLc WritableFrontPortTemplateTypeEnum = "lc"
WritableFrontPortTemplateTypeEnumLcApc WritableFrontPortTemplateTypeEnum = "lc-apc"
WritableFrontPortTemplateTypeEnumLsh WritableFrontPortTemplateTypeEnum = "lsh"
WritableFrontPortTemplateTypeEnumLshApc WritableFrontPortTemplateTypeEnum = "lsh-apc"
WritableFrontPortTemplateTypeEnumMpo WritableFrontPortTemplateTypeEnum = "mpo"
WritableFrontPortTemplateTypeEnumMtrj WritableFrontPortTemplateTypeEnum = "mtrj"
WritableFrontPortTemplateTypeEnumSc WritableFrontPortTemplateTypeEnum = "sc"
WritableFrontPortTemplateTypeEnumScApc WritableFrontPortTemplateTypeEnum = "sc-apc"
WritableFrontPortTemplateTypeEnumSt WritableFrontPortTemplateTypeEnum = "st"
)


type WritableFrontPortTemplate struct {
    DeviceType int64 `json:"device_type"`
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    RearPort int64 `json:"rear_port"`
    RearPortPosition *int64 `json:"rear_port_position,omitempty"`
    Type WritableFrontPortTemplateTypeEnum `json:"type"`
    
}

