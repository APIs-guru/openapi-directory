package shared

type CableLengthUnitLabelEnum string

const (
	CableLengthUnitLabelEnumMeters      CableLengthUnitLabelEnum = "Meters"
	CableLengthUnitLabelEnumCentimeters CableLengthUnitLabelEnum = "Centimeters"
	CableLengthUnitLabelEnumFeet        CableLengthUnitLabelEnum = "Feet"
	CableLengthUnitLabelEnumInches      CableLengthUnitLabelEnum = "Inches"
)

type CableLengthUnitValueEnum string

const (
	CableLengthUnitValueEnumM  CableLengthUnitValueEnum = "m"
	CableLengthUnitValueEnumCm CableLengthUnitValueEnum = "cm"
	CableLengthUnitValueEnumFt CableLengthUnitValueEnum = "ft"
	CableLengthUnitValueEnumIn CableLengthUnitValueEnum = "in"
)

type CableLengthUnitLengthUnit struct {
	Label CableLengthUnitLabelEnum `json:"label"`
	Value CableLengthUnitValueEnum `json:"value"`
}

type CableStatusLabelEnum string

const (
	CableStatusLabelEnumConnected       CableStatusLabelEnum = "Connected"
	CableStatusLabelEnumPlanned         CableStatusLabelEnum = "Planned"
	CableStatusLabelEnumDecommissioning CableStatusLabelEnum = "Decommissioning"
)

type CableStatusValueEnum string

const (
	CableStatusValueEnumConnected       CableStatusValueEnum = "connected"
	CableStatusValueEnumPlanned         CableStatusValueEnum = "planned"
	CableStatusValueEnumDecommissioning CableStatusValueEnum = "decommissioning"
)

type CableStatusStatus struct {
	Label CableStatusLabelEnum `json:"label"`
	Value CableStatusValueEnum `json:"value"`
}

type CableTypeTypeEnum string

const (
	CableTypeTypeEnumCat3       CableTypeTypeEnum = "cat3"
	CableTypeTypeEnumCat5       CableTypeTypeEnum = "cat5"
	CableTypeTypeEnumCat5e      CableTypeTypeEnum = "cat5e"
	CableTypeTypeEnumCat6       CableTypeTypeEnum = "cat6"
	CableTypeTypeEnumCat6a      CableTypeTypeEnum = "cat6a"
	CableTypeTypeEnumCat7       CableTypeTypeEnum = "cat7"
	CableTypeTypeEnumDacActive  CableTypeTypeEnum = "dac-active"
	CableTypeTypeEnumDacPassive CableTypeTypeEnum = "dac-passive"
	CableTypeTypeEnumMrj21Trunk CableTypeTypeEnum = "mrj21-trunk"
	CableTypeTypeEnumCoaxial    CableTypeTypeEnum = "coaxial"
	CableTypeTypeEnumMmf        CableTypeTypeEnum = "mmf"
	CableTypeTypeEnumMmfOm1     CableTypeTypeEnum = "mmf-om1"
	CableTypeTypeEnumMmfOm2     CableTypeTypeEnum = "mmf-om2"
	CableTypeTypeEnumMmfOm3     CableTypeTypeEnum = "mmf-om3"
	CableTypeTypeEnumMmfOm4     CableTypeTypeEnum = "mmf-om4"
	CableTypeTypeEnumSmf        CableTypeTypeEnum = "smf"
	CableTypeTypeEnumSmfOs1     CableTypeTypeEnum = "smf-os1"
	CableTypeTypeEnumSmfOs2     CableTypeTypeEnum = "smf-os2"
	CableTypeTypeEnumAoc        CableTypeTypeEnum = "aoc"
	CableTypeTypeEnumPower      CableTypeTypeEnum = "power"
)

type Cable struct {
	Color            *string                    `json:"color"`
	ID               *int64                     `json:"id"`
	Label            *string                    `json:"label"`
	Length           *int64                     `json:"length"`
	LengthUnit       *CableLengthUnitLengthUnit `json:"length_unit"`
	Status           *CableStatusStatus         `json:"status"`
	TerminationA     map[string]string          `json:"termination_a"`
	TerminationAID   int64                      `json:"termination_a_id"`
	TerminationAType string                     `json:"termination_a_type"`
	TerminationB     map[string]string          `json:"termination_b"`
	TerminationBID   int64                      `json:"termination_b_id"`
	TerminationBType string                     `json:"termination_b_type"`
	Type             *CableTypeTypeEnum         `json:"type"`
}
