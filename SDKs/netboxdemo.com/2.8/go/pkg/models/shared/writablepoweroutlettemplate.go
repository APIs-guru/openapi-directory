package shared

type WritablePowerOutletTemplateFeedLegEnum string

const (
	WritablePowerOutletTemplateFeedLegEnumA WritablePowerOutletTemplateFeedLegEnum = "A"
	WritablePowerOutletTemplateFeedLegEnumB WritablePowerOutletTemplateFeedLegEnum = "B"
	WritablePowerOutletTemplateFeedLegEnumC WritablePowerOutletTemplateFeedLegEnum = "C"
)

type WritablePowerOutletTemplateTypeEnum string

const (
	WritablePowerOutletTemplateTypeEnumIec60320C5     WritablePowerOutletTemplateTypeEnum = "iec-60320-c5"
	WritablePowerOutletTemplateTypeEnumIec60320C7     WritablePowerOutletTemplateTypeEnum = "iec-60320-c7"
	WritablePowerOutletTemplateTypeEnumIec60320C13    WritablePowerOutletTemplateTypeEnum = "iec-60320-c13"
	WritablePowerOutletTemplateTypeEnumIec60320C15    WritablePowerOutletTemplateTypeEnum = "iec-60320-c15"
	WritablePowerOutletTemplateTypeEnumIec60320C19    WritablePowerOutletTemplateTypeEnum = "iec-60320-c19"
	WritablePowerOutletTemplateTypeEnumIec60309Pne4h  WritablePowerOutletTemplateTypeEnum = "iec-60309-p-n-e-4h"
	WritablePowerOutletTemplateTypeEnumIec60309Pne6h  WritablePowerOutletTemplateTypeEnum = "iec-60309-p-n-e-6h"
	WritablePowerOutletTemplateTypeEnumIec60309Pne9h  WritablePowerOutletTemplateTypeEnum = "iec-60309-p-n-e-9h"
	WritablePowerOutletTemplateTypeEnumIec603092pE4h  WritablePowerOutletTemplateTypeEnum = "iec-60309-2p-e-4h"
	WritablePowerOutletTemplateTypeEnumIec603092pE6h  WritablePowerOutletTemplateTypeEnum = "iec-60309-2p-e-6h"
	WritablePowerOutletTemplateTypeEnumIec603092pE9h  WritablePowerOutletTemplateTypeEnum = "iec-60309-2p-e-9h"
	WritablePowerOutletTemplateTypeEnumIec603093pE4h  WritablePowerOutletTemplateTypeEnum = "iec-60309-3p-e-4h"
	WritablePowerOutletTemplateTypeEnumIec603093pE6h  WritablePowerOutletTemplateTypeEnum = "iec-60309-3p-e-6h"
	WritablePowerOutletTemplateTypeEnumIec603093pE9h  WritablePowerOutletTemplateTypeEnum = "iec-60309-3p-e-9h"
	WritablePowerOutletTemplateTypeEnumIec603093pNe4h WritablePowerOutletTemplateTypeEnum = "iec-60309-3p-n-e-4h"
	WritablePowerOutletTemplateTypeEnumIec603093pNe6h WritablePowerOutletTemplateTypeEnum = "iec-60309-3p-n-e-6h"
	WritablePowerOutletTemplateTypeEnumIec603093pNe9h WritablePowerOutletTemplateTypeEnum = "iec-60309-3p-n-e-9h"
	WritablePowerOutletTemplateTypeEnumNema115r       WritablePowerOutletTemplateTypeEnum = "nema-1-15r"
	WritablePowerOutletTemplateTypeEnumNema515r       WritablePowerOutletTemplateTypeEnum = "nema-5-15r"
	WritablePowerOutletTemplateTypeEnumNema520r       WritablePowerOutletTemplateTypeEnum = "nema-5-20r"
	WritablePowerOutletTemplateTypeEnumNema530r       WritablePowerOutletTemplateTypeEnum = "nema-5-30r"
	WritablePowerOutletTemplateTypeEnumNema550r       WritablePowerOutletTemplateTypeEnum = "nema-5-50r"
	WritablePowerOutletTemplateTypeEnumNema615r       WritablePowerOutletTemplateTypeEnum = "nema-6-15r"
	WritablePowerOutletTemplateTypeEnumNema620r       WritablePowerOutletTemplateTypeEnum = "nema-6-20r"
	WritablePowerOutletTemplateTypeEnumNema630r       WritablePowerOutletTemplateTypeEnum = "nema-6-30r"
	WritablePowerOutletTemplateTypeEnumNema650r       WritablePowerOutletTemplateTypeEnum = "nema-6-50r"
	WritablePowerOutletTemplateTypeEnumNema1030r      WritablePowerOutletTemplateTypeEnum = "nema-10-30r"
	WritablePowerOutletTemplateTypeEnumNema1050r      WritablePowerOutletTemplateTypeEnum = "nema-10-50r"
	WritablePowerOutletTemplateTypeEnumNema1420r      WritablePowerOutletTemplateTypeEnum = "nema-14-20r"
	WritablePowerOutletTemplateTypeEnumNema1430r      WritablePowerOutletTemplateTypeEnum = "nema-14-30r"
	WritablePowerOutletTemplateTypeEnumNema1450r      WritablePowerOutletTemplateTypeEnum = "nema-14-50r"
	WritablePowerOutletTemplateTypeEnumNema1460r      WritablePowerOutletTemplateTypeEnum = "nema-14-60r"
	WritablePowerOutletTemplateTypeEnumNemaL115r      WritablePowerOutletTemplateTypeEnum = "nema-l1-15r"
	WritablePowerOutletTemplateTypeEnumNemaL515r      WritablePowerOutletTemplateTypeEnum = "nema-l5-15r"
	WritablePowerOutletTemplateTypeEnumNemaL520r      WritablePowerOutletTemplateTypeEnum = "nema-l5-20r"
	WritablePowerOutletTemplateTypeEnumNemaL530r      WritablePowerOutletTemplateTypeEnum = "nema-l5-30r"
	WritablePowerOutletTemplateTypeEnumNemaL550r      WritablePowerOutletTemplateTypeEnum = "nema-l5-50r"
	WritablePowerOutletTemplateTypeEnumNemaL615r      WritablePowerOutletTemplateTypeEnum = "nema-l6-15r"
	WritablePowerOutletTemplateTypeEnumNemaL620r      WritablePowerOutletTemplateTypeEnum = "nema-l6-20r"
	WritablePowerOutletTemplateTypeEnumNemaL630r      WritablePowerOutletTemplateTypeEnum = "nema-l6-30r"
	WritablePowerOutletTemplateTypeEnumNemaL650r      WritablePowerOutletTemplateTypeEnum = "nema-l6-50r"
	WritablePowerOutletTemplateTypeEnumNemaL1030r     WritablePowerOutletTemplateTypeEnum = "nema-l10-30r"
	WritablePowerOutletTemplateTypeEnumNemaL1420r     WritablePowerOutletTemplateTypeEnum = "nema-l14-20r"
	WritablePowerOutletTemplateTypeEnumNemaL1430r     WritablePowerOutletTemplateTypeEnum = "nema-l14-30r"
	WritablePowerOutletTemplateTypeEnumNemaL1450r     WritablePowerOutletTemplateTypeEnum = "nema-l14-50r"
	WritablePowerOutletTemplateTypeEnumNemaL1460r     WritablePowerOutletTemplateTypeEnum = "nema-l14-60r"
	WritablePowerOutletTemplateTypeEnumNemaL2120r     WritablePowerOutletTemplateTypeEnum = "nema-l21-20r"
	WritablePowerOutletTemplateTypeEnumNemaL2130r     WritablePowerOutletTemplateTypeEnum = "nema-l21-30r"
	WritablePowerOutletTemplateTypeEnumCs6360C        WritablePowerOutletTemplateTypeEnum = "CS6360C"
	WritablePowerOutletTemplateTypeEnumCs6364C        WritablePowerOutletTemplateTypeEnum = "CS6364C"
	WritablePowerOutletTemplateTypeEnumCs8164C        WritablePowerOutletTemplateTypeEnum = "CS8164C"
	WritablePowerOutletTemplateTypeEnumCs8264C        WritablePowerOutletTemplateTypeEnum = "CS8264C"
	WritablePowerOutletTemplateTypeEnumCs8364C        WritablePowerOutletTemplateTypeEnum = "CS8364C"
	WritablePowerOutletTemplateTypeEnumCs8464C        WritablePowerOutletTemplateTypeEnum = "CS8464C"
	WritablePowerOutletTemplateTypeEnumItaE           WritablePowerOutletTemplateTypeEnum = "ita-e"
	WritablePowerOutletTemplateTypeEnumItaF           WritablePowerOutletTemplateTypeEnum = "ita-f"
	WritablePowerOutletTemplateTypeEnumItaG           WritablePowerOutletTemplateTypeEnum = "ita-g"
	WritablePowerOutletTemplateTypeEnumItaH           WritablePowerOutletTemplateTypeEnum = "ita-h"
	WritablePowerOutletTemplateTypeEnumItaI           WritablePowerOutletTemplateTypeEnum = "ita-i"
	WritablePowerOutletTemplateTypeEnumItaJ           WritablePowerOutletTemplateTypeEnum = "ita-j"
	WritablePowerOutletTemplateTypeEnumItaK           WritablePowerOutletTemplateTypeEnum = "ita-k"
	WritablePowerOutletTemplateTypeEnumItaL           WritablePowerOutletTemplateTypeEnum = "ita-l"
	WritablePowerOutletTemplateTypeEnumItaM           WritablePowerOutletTemplateTypeEnum = "ita-m"
	WritablePowerOutletTemplateTypeEnumItaN           WritablePowerOutletTemplateTypeEnum = "ita-n"
	WritablePowerOutletTemplateTypeEnumItaO           WritablePowerOutletTemplateTypeEnum = "ita-o"
	WritablePowerOutletTemplateTypeEnumHdotCx         WritablePowerOutletTemplateTypeEnum = "hdot-cx"
)

type WritablePowerOutletTemplate struct {
	DeviceType int64                                   `json:"device_type"`
	FeedLeg    *WritablePowerOutletTemplateFeedLegEnum `json:"feed_leg,omitempty"`
	ID         *int64                                  `json:"id,omitempty"`
	Name       string                                  `json:"name"`
	PowerPort  *int64                                  `json:"power_port,omitempty"`
	Type       *WritablePowerOutletTemplateTypeEnum    `json:"type,omitempty"`
}
