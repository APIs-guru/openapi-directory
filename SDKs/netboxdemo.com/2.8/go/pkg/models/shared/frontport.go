package shared




type FrontPortTypeLabelEnum string

const (
    FrontPortTypeLabelEnumEightP8C FrontPortTypeLabelEnum = "8P8C"
FrontPortTypeLabelEnumOneHundredAndTenPunch FrontPortTypeLabelEnum = "110 Punch"
FrontPortTypeLabelEnumBnc FrontPortTypeLabelEnum = "BNC"
FrontPortTypeLabelEnumMrj21 FrontPortTypeLabelEnum = "MRJ21"
FrontPortTypeLabelEnumFc FrontPortTypeLabelEnum = "FC"
FrontPortTypeLabelEnumLc FrontPortTypeLabelEnum = "LC"
FrontPortTypeLabelEnumLcApc FrontPortTypeLabelEnum = "LC/APC"
FrontPortTypeLabelEnumLsh FrontPortTypeLabelEnum = "LSH"
FrontPortTypeLabelEnumLshApc FrontPortTypeLabelEnum = "LSH/APC"
FrontPortTypeLabelEnumMpo FrontPortTypeLabelEnum = "MPO"
FrontPortTypeLabelEnumMtrj FrontPortTypeLabelEnum = "MTRJ"
FrontPortTypeLabelEnumSc FrontPortTypeLabelEnum = "SC"
FrontPortTypeLabelEnumScApc FrontPortTypeLabelEnum = "SC/APC"
FrontPortTypeLabelEnumSt FrontPortTypeLabelEnum = "ST"
)



type FrontPortTypeValueEnum string

const (
    FrontPortTypeValueEnumEightp8c FrontPortTypeValueEnum = "8p8c"
FrontPortTypeValueEnumOneHundredAndTenPunch FrontPortTypeValueEnum = "110-punch"
FrontPortTypeValueEnumBnc FrontPortTypeValueEnum = "bnc"
FrontPortTypeValueEnumMrj21 FrontPortTypeValueEnum = "mrj21"
FrontPortTypeValueEnumFc FrontPortTypeValueEnum = "fc"
FrontPortTypeValueEnumLc FrontPortTypeValueEnum = "lc"
FrontPortTypeValueEnumLcApc FrontPortTypeValueEnum = "lc-apc"
FrontPortTypeValueEnumLsh FrontPortTypeValueEnum = "lsh"
FrontPortTypeValueEnumLshApc FrontPortTypeValueEnum = "lsh-apc"
FrontPortTypeValueEnumMpo FrontPortTypeValueEnum = "mpo"
FrontPortTypeValueEnumMtrj FrontPortTypeValueEnum = "mtrj"
FrontPortTypeValueEnumSc FrontPortTypeValueEnum = "sc"
FrontPortTypeValueEnumScApc FrontPortTypeValueEnum = "sc-apc"
FrontPortTypeValueEnumSt FrontPortTypeValueEnum = "st"
)


type FrontPortType struct {
    Label FrontPortTypeLabelEnum `json:"label"`
    Value FrontPortTypeValueEnum `json:"value"`
    
}

type FrontPort struct {
    Cable *NestedCable `json:"cable,omitempty"`
    Description *string `json:"description,omitempty"`
    Device NestedDevice `json:"device"`
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    RearPort FrontPortRearPort `json:"rear_port"`
    RearPortPosition *int64 `json:"rear_port_position,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Type FrontPortType `json:"type"`
    
}

