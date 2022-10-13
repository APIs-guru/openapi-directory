package shared

type WritableCableLengthUnitLengthUnitEnum string

const (
	WritableCableLengthUnitLengthUnitEnumM  WritableCableLengthUnitLengthUnitEnum = "m"
	WritableCableLengthUnitLengthUnitEnumCm WritableCableLengthUnitLengthUnitEnum = "cm"
	WritableCableLengthUnitLengthUnitEnumFt WritableCableLengthUnitLengthUnitEnum = "ft"
	WritableCableLengthUnitLengthUnitEnumIn WritableCableLengthUnitLengthUnitEnum = "in"
)

type WritableCableStatusStatusEnum string

const (
	WritableCableStatusStatusEnumConnected       WritableCableStatusStatusEnum = "connected"
	WritableCableStatusStatusEnumPlanned         WritableCableStatusStatusEnum = "planned"
	WritableCableStatusStatusEnumDecommissioning WritableCableStatusStatusEnum = "decommissioning"
)

type WritableCableTypeTypeEnum string

const (
	WritableCableTypeTypeEnumCat3       WritableCableTypeTypeEnum = "cat3"
	WritableCableTypeTypeEnumCat5       WritableCableTypeTypeEnum = "cat5"
	WritableCableTypeTypeEnumCat5e      WritableCableTypeTypeEnum = "cat5e"
	WritableCableTypeTypeEnumCat6       WritableCableTypeTypeEnum = "cat6"
	WritableCableTypeTypeEnumCat6a      WritableCableTypeTypeEnum = "cat6a"
	WritableCableTypeTypeEnumCat7       WritableCableTypeTypeEnum = "cat7"
	WritableCableTypeTypeEnumDacActive  WritableCableTypeTypeEnum = "dac-active"
	WritableCableTypeTypeEnumDacPassive WritableCableTypeTypeEnum = "dac-passive"
	WritableCableTypeTypeEnumMrj21Trunk WritableCableTypeTypeEnum = "mrj21-trunk"
	WritableCableTypeTypeEnumCoaxial    WritableCableTypeTypeEnum = "coaxial"
	WritableCableTypeTypeEnumMmf        WritableCableTypeTypeEnum = "mmf"
	WritableCableTypeTypeEnumMmfOm1     WritableCableTypeTypeEnum = "mmf-om1"
	WritableCableTypeTypeEnumMmfOm2     WritableCableTypeTypeEnum = "mmf-om2"
	WritableCableTypeTypeEnumMmfOm3     WritableCableTypeTypeEnum = "mmf-om3"
	WritableCableTypeTypeEnumMmfOm4     WritableCableTypeTypeEnum = "mmf-om4"
	WritableCableTypeTypeEnumSmf        WritableCableTypeTypeEnum = "smf"
	WritableCableTypeTypeEnumSmfOs1     WritableCableTypeTypeEnum = "smf-os1"
	WritableCableTypeTypeEnumSmfOs2     WritableCableTypeTypeEnum = "smf-os2"
	WritableCableTypeTypeEnumAoc        WritableCableTypeTypeEnum = "aoc"
	WritableCableTypeTypeEnumPower      WritableCableTypeTypeEnum = "power"
)

type WritableCable struct {
	Color            *string                                `json:"color"`
	ID               *int64                                 `json:"id"`
	Label            *string                                `json:"label"`
	Length           *int64                                 `json:"length"`
	LengthUnit       *WritableCableLengthUnitLengthUnitEnum `json:"length_unit"`
	Status           *WritableCableStatusStatusEnum         `json:"status"`
	TerminationA     map[string]string                      `json:"termination_a"`
	TerminationAID   int64                                  `json:"termination_a_id"`
	TerminationAType string                                 `json:"termination_a_type"`
	TerminationB     map[string]string                      `json:"termination_b"`
	TerminationBID   int64                                  `json:"termination_b_id"`
	TerminationBType string                                 `json:"termination_b_type"`
	Type             *WritableCableTypeTypeEnum             `json:"type"`
}
