package shared

type WritablePowerOutletFeedLegEnum string

const (
	WritablePowerOutletFeedLegEnumA WritablePowerOutletFeedLegEnum = "A"
	WritablePowerOutletFeedLegEnumB WritablePowerOutletFeedLegEnum = "B"
	WritablePowerOutletFeedLegEnumC WritablePowerOutletFeedLegEnum = "C"
)

type WritablePowerOutletTypeEnum string

const (
	WritablePowerOutletTypeEnumIec60320C5     WritablePowerOutletTypeEnum = "iec-60320-c5"
	WritablePowerOutletTypeEnumIec60320C7     WritablePowerOutletTypeEnum = "iec-60320-c7"
	WritablePowerOutletTypeEnumIec60320C13    WritablePowerOutletTypeEnum = "iec-60320-c13"
	WritablePowerOutletTypeEnumIec60320C15    WritablePowerOutletTypeEnum = "iec-60320-c15"
	WritablePowerOutletTypeEnumIec60320C19    WritablePowerOutletTypeEnum = "iec-60320-c19"
	WritablePowerOutletTypeEnumIec60309Pne4h  WritablePowerOutletTypeEnum = "iec-60309-p-n-e-4h"
	WritablePowerOutletTypeEnumIec60309Pne6h  WritablePowerOutletTypeEnum = "iec-60309-p-n-e-6h"
	WritablePowerOutletTypeEnumIec60309Pne9h  WritablePowerOutletTypeEnum = "iec-60309-p-n-e-9h"
	WritablePowerOutletTypeEnumIec603092pE4h  WritablePowerOutletTypeEnum = "iec-60309-2p-e-4h"
	WritablePowerOutletTypeEnumIec603092pE6h  WritablePowerOutletTypeEnum = "iec-60309-2p-e-6h"
	WritablePowerOutletTypeEnumIec603092pE9h  WritablePowerOutletTypeEnum = "iec-60309-2p-e-9h"
	WritablePowerOutletTypeEnumIec603093pE4h  WritablePowerOutletTypeEnum = "iec-60309-3p-e-4h"
	WritablePowerOutletTypeEnumIec603093pE6h  WritablePowerOutletTypeEnum = "iec-60309-3p-e-6h"
	WritablePowerOutletTypeEnumIec603093pE9h  WritablePowerOutletTypeEnum = "iec-60309-3p-e-9h"
	WritablePowerOutletTypeEnumIec603093pNe4h WritablePowerOutletTypeEnum = "iec-60309-3p-n-e-4h"
	WritablePowerOutletTypeEnumIec603093pNe6h WritablePowerOutletTypeEnum = "iec-60309-3p-n-e-6h"
	WritablePowerOutletTypeEnumIec603093pNe9h WritablePowerOutletTypeEnum = "iec-60309-3p-n-e-9h"
	WritablePowerOutletTypeEnumNema115r       WritablePowerOutletTypeEnum = "nema-1-15r"
	WritablePowerOutletTypeEnumNema515r       WritablePowerOutletTypeEnum = "nema-5-15r"
	WritablePowerOutletTypeEnumNema520r       WritablePowerOutletTypeEnum = "nema-5-20r"
	WritablePowerOutletTypeEnumNema530r       WritablePowerOutletTypeEnum = "nema-5-30r"
	WritablePowerOutletTypeEnumNema550r       WritablePowerOutletTypeEnum = "nema-5-50r"
	WritablePowerOutletTypeEnumNema615r       WritablePowerOutletTypeEnum = "nema-6-15r"
	WritablePowerOutletTypeEnumNema620r       WritablePowerOutletTypeEnum = "nema-6-20r"
	WritablePowerOutletTypeEnumNema630r       WritablePowerOutletTypeEnum = "nema-6-30r"
	WritablePowerOutletTypeEnumNema650r       WritablePowerOutletTypeEnum = "nema-6-50r"
	WritablePowerOutletTypeEnumNema1030r      WritablePowerOutletTypeEnum = "nema-10-30r"
	WritablePowerOutletTypeEnumNema1050r      WritablePowerOutletTypeEnum = "nema-10-50r"
	WritablePowerOutletTypeEnumNema1420r      WritablePowerOutletTypeEnum = "nema-14-20r"
	WritablePowerOutletTypeEnumNema1430r      WritablePowerOutletTypeEnum = "nema-14-30r"
	WritablePowerOutletTypeEnumNema1450r      WritablePowerOutletTypeEnum = "nema-14-50r"
	WritablePowerOutletTypeEnumNema1460r      WritablePowerOutletTypeEnum = "nema-14-60r"
	WritablePowerOutletTypeEnumNemaL115r      WritablePowerOutletTypeEnum = "nema-l1-15r"
	WritablePowerOutletTypeEnumNemaL515r      WritablePowerOutletTypeEnum = "nema-l5-15r"
	WritablePowerOutletTypeEnumNemaL520r      WritablePowerOutletTypeEnum = "nema-l5-20r"
	WritablePowerOutletTypeEnumNemaL530r      WritablePowerOutletTypeEnum = "nema-l5-30r"
	WritablePowerOutletTypeEnumNemaL550r      WritablePowerOutletTypeEnum = "nema-l5-50r"
	WritablePowerOutletTypeEnumNemaL615r      WritablePowerOutletTypeEnum = "nema-l6-15r"
	WritablePowerOutletTypeEnumNemaL620r      WritablePowerOutletTypeEnum = "nema-l6-20r"
	WritablePowerOutletTypeEnumNemaL630r      WritablePowerOutletTypeEnum = "nema-l6-30r"
	WritablePowerOutletTypeEnumNemaL650r      WritablePowerOutletTypeEnum = "nema-l6-50r"
	WritablePowerOutletTypeEnumNemaL1030r     WritablePowerOutletTypeEnum = "nema-l10-30r"
	WritablePowerOutletTypeEnumNemaL1420r     WritablePowerOutletTypeEnum = "nema-l14-20r"
	WritablePowerOutletTypeEnumNemaL1430r     WritablePowerOutletTypeEnum = "nema-l14-30r"
	WritablePowerOutletTypeEnumNemaL1450r     WritablePowerOutletTypeEnum = "nema-l14-50r"
	WritablePowerOutletTypeEnumNemaL1460r     WritablePowerOutletTypeEnum = "nema-l14-60r"
	WritablePowerOutletTypeEnumNemaL2120r     WritablePowerOutletTypeEnum = "nema-l21-20r"
	WritablePowerOutletTypeEnumNemaL2130r     WritablePowerOutletTypeEnum = "nema-l21-30r"
	WritablePowerOutletTypeEnumCs6360C        WritablePowerOutletTypeEnum = "CS6360C"
	WritablePowerOutletTypeEnumCs6364C        WritablePowerOutletTypeEnum = "CS6364C"
	WritablePowerOutletTypeEnumCs8164C        WritablePowerOutletTypeEnum = "CS8164C"
	WritablePowerOutletTypeEnumCs8264C        WritablePowerOutletTypeEnum = "CS8264C"
	WritablePowerOutletTypeEnumCs8364C        WritablePowerOutletTypeEnum = "CS8364C"
	WritablePowerOutletTypeEnumCs8464C        WritablePowerOutletTypeEnum = "CS8464C"
	WritablePowerOutletTypeEnumItaE           WritablePowerOutletTypeEnum = "ita-e"
	WritablePowerOutletTypeEnumItaF           WritablePowerOutletTypeEnum = "ita-f"
	WritablePowerOutletTypeEnumItaG           WritablePowerOutletTypeEnum = "ita-g"
	WritablePowerOutletTypeEnumItaH           WritablePowerOutletTypeEnum = "ita-h"
	WritablePowerOutletTypeEnumItaI           WritablePowerOutletTypeEnum = "ita-i"
	WritablePowerOutletTypeEnumItaJ           WritablePowerOutletTypeEnum = "ita-j"
	WritablePowerOutletTypeEnumItaK           WritablePowerOutletTypeEnum = "ita-k"
	WritablePowerOutletTypeEnumItaL           WritablePowerOutletTypeEnum = "ita-l"
	WritablePowerOutletTypeEnumItaM           WritablePowerOutletTypeEnum = "ita-m"
	WritablePowerOutletTypeEnumItaN           WritablePowerOutletTypeEnum = "ita-n"
	WritablePowerOutletTypeEnumItaO           WritablePowerOutletTypeEnum = "ita-o"
	WritablePowerOutletTypeEnumHdotCx         WritablePowerOutletTypeEnum = "hdot-cx"
)

type WritablePowerOutletInput struct {
	Cable            *NestedCableInput               `json:"cable,omitempty"`
	ConnectionStatus *bool                           `json:"connection_status,omitempty"`
	Description      *string                         `json:"description,omitempty"`
	Device           int64                           `json:"device"`
	FeedLeg          *WritablePowerOutletFeedLegEnum `json:"feed_leg,omitempty"`
	Name             string                          `json:"name"`
	PowerPort        *int64                          `json:"power_port,omitempty"`
	Tags             []string                        `json:"tags,omitempty"`
	Type             *WritablePowerOutletTypeEnum    `json:"type,omitempty"`
}
