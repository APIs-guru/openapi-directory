package shared




type WritableCableLengthUnitEnum string

const (
    WritableCableLengthUnitEnumM WritableCableLengthUnitEnum = "m"
WritableCableLengthUnitEnumCm WritableCableLengthUnitEnum = "cm"
WritableCableLengthUnitEnumFt WritableCableLengthUnitEnum = "ft"
WritableCableLengthUnitEnumIn WritableCableLengthUnitEnum = "in"
)



type WritableCableStatusEnum string

const (
    WritableCableStatusEnumConnected WritableCableStatusEnum = "connected"
WritableCableStatusEnumPlanned WritableCableStatusEnum = "planned"
WritableCableStatusEnumDecommissioning WritableCableStatusEnum = "decommissioning"
)



type WritableCableTypeEnum string

const (
    WritableCableTypeEnumCat3 WritableCableTypeEnum = "cat3"
WritableCableTypeEnumCat5 WritableCableTypeEnum = "cat5"
WritableCableTypeEnumCat5e WritableCableTypeEnum = "cat5e"
WritableCableTypeEnumCat6 WritableCableTypeEnum = "cat6"
WritableCableTypeEnumCat6a WritableCableTypeEnum = "cat6a"
WritableCableTypeEnumCat7 WritableCableTypeEnum = "cat7"
WritableCableTypeEnumDacActive WritableCableTypeEnum = "dac-active"
WritableCableTypeEnumDacPassive WritableCableTypeEnum = "dac-passive"
WritableCableTypeEnumMrj21Trunk WritableCableTypeEnum = "mrj21-trunk"
WritableCableTypeEnumCoaxial WritableCableTypeEnum = "coaxial"
WritableCableTypeEnumMmf WritableCableTypeEnum = "mmf"
WritableCableTypeEnumMmfOm1 WritableCableTypeEnum = "mmf-om1"
WritableCableTypeEnumMmfOm2 WritableCableTypeEnum = "mmf-om2"
WritableCableTypeEnumMmfOm3 WritableCableTypeEnum = "mmf-om3"
WritableCableTypeEnumMmfOm4 WritableCableTypeEnum = "mmf-om4"
WritableCableTypeEnumSmf WritableCableTypeEnum = "smf"
WritableCableTypeEnumSmfOs1 WritableCableTypeEnum = "smf-os1"
WritableCableTypeEnumSmfOs2 WritableCableTypeEnum = "smf-os2"
WritableCableTypeEnumAoc WritableCableTypeEnum = "aoc"
WritableCableTypeEnumPower WritableCableTypeEnum = "power"
)


type WritableCable struct {
    Color *string `json:"color,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Label *string `json:"label,omitempty"`
    Length *int64 `json:"length,omitempty"`
    LengthUnit *WritableCableLengthUnitEnum `json:"length_unit,omitempty"`
    Status *WritableCableStatusEnum `json:"status,omitempty"`
    TerminationA map[string]string `json:"termination_a,omitempty"`
    TerminationAID int64 `json:"termination_a_id"`
    TerminationAType string `json:"termination_a_type"`
    TerminationB map[string]string `json:"termination_b,omitempty"`
    TerminationBID int64 `json:"termination_b_id"`
    TerminationBType string `json:"termination_b_type"`
    Type *WritableCableTypeEnum `json:"type,omitempty"`
    
}

