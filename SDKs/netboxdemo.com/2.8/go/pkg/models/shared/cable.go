package shared




type CableLengthUnitLabelEnum string

const (
    CableLengthUnitLabelEnumMeters CableLengthUnitLabelEnum = "Meters"
CableLengthUnitLabelEnumCentimeters CableLengthUnitLabelEnum = "Centimeters"
CableLengthUnitLabelEnumFeet CableLengthUnitLabelEnum = "Feet"
CableLengthUnitLabelEnumInches CableLengthUnitLabelEnum = "Inches"
)



type CableLengthUnitValueEnum string

const (
    CableLengthUnitValueEnumM CableLengthUnitValueEnum = "m"
CableLengthUnitValueEnumCm CableLengthUnitValueEnum = "cm"
CableLengthUnitValueEnumFt CableLengthUnitValueEnum = "ft"
CableLengthUnitValueEnumIn CableLengthUnitValueEnum = "in"
)


type CableLengthUnit struct {
    Label CableLengthUnitLabelEnum `json:"label"`
    Value CableLengthUnitValueEnum `json:"value"`
    
}


type CableStatusLabelEnum string

const (
    CableStatusLabelEnumConnected CableStatusLabelEnum = "Connected"
CableStatusLabelEnumPlanned CableStatusLabelEnum = "Planned"
CableStatusLabelEnumDecommissioning CableStatusLabelEnum = "Decommissioning"
)



type CableStatusValueEnum string

const (
    CableStatusValueEnumConnected CableStatusValueEnum = "connected"
CableStatusValueEnumPlanned CableStatusValueEnum = "planned"
CableStatusValueEnumDecommissioning CableStatusValueEnum = "decommissioning"
)


type CableStatus struct {
    Label CableStatusLabelEnum `json:"label"`
    Value CableStatusValueEnum `json:"value"`
    
}


type CableTypeEnum string

const (
    CableTypeEnumCat3 CableTypeEnum = "cat3"
CableTypeEnumCat5 CableTypeEnum = "cat5"
CableTypeEnumCat5e CableTypeEnum = "cat5e"
CableTypeEnumCat6 CableTypeEnum = "cat6"
CableTypeEnumCat6a CableTypeEnum = "cat6a"
CableTypeEnumCat7 CableTypeEnum = "cat7"
CableTypeEnumDacActive CableTypeEnum = "dac-active"
CableTypeEnumDacPassive CableTypeEnum = "dac-passive"
CableTypeEnumMrj21Trunk CableTypeEnum = "mrj21-trunk"
CableTypeEnumCoaxial CableTypeEnum = "coaxial"
CableTypeEnumMmf CableTypeEnum = "mmf"
CableTypeEnumMmfOm1 CableTypeEnum = "mmf-om1"
CableTypeEnumMmfOm2 CableTypeEnum = "mmf-om2"
CableTypeEnumMmfOm3 CableTypeEnum = "mmf-om3"
CableTypeEnumMmfOm4 CableTypeEnum = "mmf-om4"
CableTypeEnumSmf CableTypeEnum = "smf"
CableTypeEnumSmfOs1 CableTypeEnum = "smf-os1"
CableTypeEnumSmfOs2 CableTypeEnum = "smf-os2"
CableTypeEnumAoc CableTypeEnum = "aoc"
CableTypeEnumPower CableTypeEnum = "power"
)


type Cable struct {
    Color *string `json:"color,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Label *string `json:"label,omitempty"`
    Length *int64 `json:"length,omitempty"`
    LengthUnit *CableLengthUnit `json:"length_unit,omitempty"`
    Status *CableStatus `json:"status,omitempty"`
    TerminationA map[string]string `json:"termination_a,omitempty"`
    TerminationAID int64 `json:"termination_a_id"`
    TerminationAType string `json:"termination_a_type"`
    TerminationB map[string]string `json:"termination_b,omitempty"`
    TerminationBID int64 `json:"termination_b_id"`
    TerminationBType string `json:"termination_b_type"`
    Type *CableTypeEnum `json:"type,omitempty"`
    
}

