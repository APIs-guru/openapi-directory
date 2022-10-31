package shared




type RearPortTypeLabelEnum string

const (
    RearPortTypeLabelEnumEightP8C RearPortTypeLabelEnum = "8P8C"
RearPortTypeLabelEnumOneHundredAndTenPunch RearPortTypeLabelEnum = "110 Punch"
RearPortTypeLabelEnumBnc RearPortTypeLabelEnum = "BNC"
RearPortTypeLabelEnumMrj21 RearPortTypeLabelEnum = "MRJ21"
RearPortTypeLabelEnumFc RearPortTypeLabelEnum = "FC"
RearPortTypeLabelEnumLc RearPortTypeLabelEnum = "LC"
RearPortTypeLabelEnumLcApc RearPortTypeLabelEnum = "LC/APC"
RearPortTypeLabelEnumLsh RearPortTypeLabelEnum = "LSH"
RearPortTypeLabelEnumLshApc RearPortTypeLabelEnum = "LSH/APC"
RearPortTypeLabelEnumMpo RearPortTypeLabelEnum = "MPO"
RearPortTypeLabelEnumMtrj RearPortTypeLabelEnum = "MTRJ"
RearPortTypeLabelEnumSc RearPortTypeLabelEnum = "SC"
RearPortTypeLabelEnumScApc RearPortTypeLabelEnum = "SC/APC"
RearPortTypeLabelEnumSt RearPortTypeLabelEnum = "ST"
)



type RearPortTypeValueEnum string

const (
    RearPortTypeValueEnumEightp8c RearPortTypeValueEnum = "8p8c"
RearPortTypeValueEnumOneHundredAndTenPunch RearPortTypeValueEnum = "110-punch"
RearPortTypeValueEnumBnc RearPortTypeValueEnum = "bnc"
RearPortTypeValueEnumMrj21 RearPortTypeValueEnum = "mrj21"
RearPortTypeValueEnumFc RearPortTypeValueEnum = "fc"
RearPortTypeValueEnumLc RearPortTypeValueEnum = "lc"
RearPortTypeValueEnumLcApc RearPortTypeValueEnum = "lc-apc"
RearPortTypeValueEnumLsh RearPortTypeValueEnum = "lsh"
RearPortTypeValueEnumLshApc RearPortTypeValueEnum = "lsh-apc"
RearPortTypeValueEnumMpo RearPortTypeValueEnum = "mpo"
RearPortTypeValueEnumMtrj RearPortTypeValueEnum = "mtrj"
RearPortTypeValueEnumSc RearPortTypeValueEnum = "sc"
RearPortTypeValueEnumScApc RearPortTypeValueEnum = "sc-apc"
RearPortTypeValueEnumSt RearPortTypeValueEnum = "st"
)


type RearPortType struct {
    Label RearPortTypeLabelEnum `json:"label"`
    Value RearPortTypeValueEnum `json:"value"`
    
}

type RearPort struct {
    Cable *NestedCable `json:"cable,omitempty"`
    Description *string `json:"description,omitempty"`
    Device NestedDevice `json:"device"`
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    Positions *int64 `json:"positions,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Type RearPortType `json:"type"`
    
}

