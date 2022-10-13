package shared

type PowerOutletTemplateFeedLegLabelEnum string

const (
	PowerOutletTemplateFeedLegLabelEnumA PowerOutletTemplateFeedLegLabelEnum = "A"
	PowerOutletTemplateFeedLegLabelEnumB PowerOutletTemplateFeedLegLabelEnum = "B"
	PowerOutletTemplateFeedLegLabelEnumC PowerOutletTemplateFeedLegLabelEnum = "C"
)

type PowerOutletTemplateFeedLegValueEnum string

const (
	PowerOutletTemplateFeedLegValueEnumA PowerOutletTemplateFeedLegValueEnum = "A"
	PowerOutletTemplateFeedLegValueEnumB PowerOutletTemplateFeedLegValueEnum = "B"
	PowerOutletTemplateFeedLegValueEnumC PowerOutletTemplateFeedLegValueEnum = "C"
)

type PowerOutletTemplateFeedLegFeedLeg struct {
	Label PowerOutletTemplateFeedLegLabelEnum `json:"label"`
	Value PowerOutletTemplateFeedLegValueEnum `json:"value"`
}

type PowerOutletTemplateTypeLabelEnum string

const (
	PowerOutletTemplateTypeLabelEnumC5                 PowerOutletTemplateTypeLabelEnum = "C5"
	PowerOutletTemplateTypeLabelEnumC7                 PowerOutletTemplateTypeLabelEnum = "C7"
	PowerOutletTemplateTypeLabelEnumC13                PowerOutletTemplateTypeLabelEnum = "C13"
	PowerOutletTemplateTypeLabelEnumC15                PowerOutletTemplateTypeLabelEnum = "C15"
	PowerOutletTemplateTypeLabelEnumC19                PowerOutletTemplateTypeLabelEnum = "C19"
	PowerOutletTemplateTypeLabelEnumPPlusNPlusE4H      PowerOutletTemplateTypeLabelEnum = "P+N+E 4H"
	PowerOutletTemplateTypeLabelEnumPPlusNPlusE6H      PowerOutletTemplateTypeLabelEnum = "P+N+E 6H"
	PowerOutletTemplateTypeLabelEnumPPlusNPlusE9H      PowerOutletTemplateTypeLabelEnum = "P+N+E 9H"
	PowerOutletTemplateTypeLabelEnumTwoPPlusE4H        PowerOutletTemplateTypeLabelEnum = "2P+E 4H"
	PowerOutletTemplateTypeLabelEnumTwoPPlusE6H        PowerOutletTemplateTypeLabelEnum = "2P+E 6H"
	PowerOutletTemplateTypeLabelEnumTwoPPlusE9H        PowerOutletTemplateTypeLabelEnum = "2P+E 9H"
	PowerOutletTemplateTypeLabelEnumThreePPlusE4H      PowerOutletTemplateTypeLabelEnum = "3P+E 4H"
	PowerOutletTemplateTypeLabelEnumThreePPlusE6H      PowerOutletTemplateTypeLabelEnum = "3P+E 6H"
	PowerOutletTemplateTypeLabelEnumThreePPlusE9H      PowerOutletTemplateTypeLabelEnum = "3P+E 9H"
	PowerOutletTemplateTypeLabelEnumThreePPlusNPlusE4H PowerOutletTemplateTypeLabelEnum = "3P+N+E 4H"
	PowerOutletTemplateTypeLabelEnumThreePPlusNPlusE6H PowerOutletTemplateTypeLabelEnum = "3P+N+E 6H"
	PowerOutletTemplateTypeLabelEnumThreePPlusNPlusE9H PowerOutletTemplateTypeLabelEnum = "3P+N+E 9H"
	PowerOutletTemplateTypeLabelEnumNema115R           PowerOutletTemplateTypeLabelEnum = "NEMA 1-15R"
	PowerOutletTemplateTypeLabelEnumNema515R           PowerOutletTemplateTypeLabelEnum = "NEMA 5-15R"
	PowerOutletTemplateTypeLabelEnumNema520R           PowerOutletTemplateTypeLabelEnum = "NEMA 5-20R"
	PowerOutletTemplateTypeLabelEnumNema530R           PowerOutletTemplateTypeLabelEnum = "NEMA 5-30R"
	PowerOutletTemplateTypeLabelEnumNema550R           PowerOutletTemplateTypeLabelEnum = "NEMA 5-50R"
	PowerOutletTemplateTypeLabelEnumNema615R           PowerOutletTemplateTypeLabelEnum = "NEMA 6-15R"
	PowerOutletTemplateTypeLabelEnumNema620R           PowerOutletTemplateTypeLabelEnum = "NEMA 6-20R"
	PowerOutletTemplateTypeLabelEnumNema630R           PowerOutletTemplateTypeLabelEnum = "NEMA 6-30R"
	PowerOutletTemplateTypeLabelEnumNema650R           PowerOutletTemplateTypeLabelEnum = "NEMA 6-50R"
	PowerOutletTemplateTypeLabelEnumNema1030R          PowerOutletTemplateTypeLabelEnum = "NEMA 10-30R"
	PowerOutletTemplateTypeLabelEnumNema1050R          PowerOutletTemplateTypeLabelEnum = "NEMA 10-50R"
	PowerOutletTemplateTypeLabelEnumNema1420R          PowerOutletTemplateTypeLabelEnum = "NEMA 14-20R"
	PowerOutletTemplateTypeLabelEnumNema1430R          PowerOutletTemplateTypeLabelEnum = "NEMA 14-30R"
	PowerOutletTemplateTypeLabelEnumNema1450R          PowerOutletTemplateTypeLabelEnum = "NEMA 14-50R"
	PowerOutletTemplateTypeLabelEnumNema1460R          PowerOutletTemplateTypeLabelEnum = "NEMA 14-60R"
	PowerOutletTemplateTypeLabelEnumNemaL115R          PowerOutletTemplateTypeLabelEnum = "NEMA L1-15R"
	PowerOutletTemplateTypeLabelEnumNemaL515R          PowerOutletTemplateTypeLabelEnum = "NEMA L5-15R"
	PowerOutletTemplateTypeLabelEnumNemaL520R          PowerOutletTemplateTypeLabelEnum = "NEMA L5-20R"
	PowerOutletTemplateTypeLabelEnumNemaL530R          PowerOutletTemplateTypeLabelEnum = "NEMA L5-30R"
	PowerOutletTemplateTypeLabelEnumNemaL550R          PowerOutletTemplateTypeLabelEnum = "NEMA L5-50R"
	PowerOutletTemplateTypeLabelEnumNemaL615R          PowerOutletTemplateTypeLabelEnum = "NEMA L6-15R"
	PowerOutletTemplateTypeLabelEnumNemaL620R          PowerOutletTemplateTypeLabelEnum = "NEMA L6-20R"
	PowerOutletTemplateTypeLabelEnumNemaL630R          PowerOutletTemplateTypeLabelEnum = "NEMA L6-30R"
	PowerOutletTemplateTypeLabelEnumNemaL650R          PowerOutletTemplateTypeLabelEnum = "NEMA L6-50R"
	PowerOutletTemplateTypeLabelEnumNemaL1030R         PowerOutletTemplateTypeLabelEnum = "NEMA L10-30R"
	PowerOutletTemplateTypeLabelEnumNemaL1420R         PowerOutletTemplateTypeLabelEnum = "NEMA L14-20R"
	PowerOutletTemplateTypeLabelEnumNemaL1430R         PowerOutletTemplateTypeLabelEnum = "NEMA L14-30R"
	PowerOutletTemplateTypeLabelEnumNemaL1450R         PowerOutletTemplateTypeLabelEnum = "NEMA L14-50R"
	PowerOutletTemplateTypeLabelEnumNemaL1460R         PowerOutletTemplateTypeLabelEnum = "NEMA L14-60R"
	PowerOutletTemplateTypeLabelEnumNemaL2120R         PowerOutletTemplateTypeLabelEnum = "NEMA L21-20R"
	PowerOutletTemplateTypeLabelEnumNemaL2130R         PowerOutletTemplateTypeLabelEnum = "NEMA L21-30R"
	PowerOutletTemplateTypeLabelEnumCs6360C            PowerOutletTemplateTypeLabelEnum = "CS6360C"
	PowerOutletTemplateTypeLabelEnumCs6364C            PowerOutletTemplateTypeLabelEnum = "CS6364C"
	PowerOutletTemplateTypeLabelEnumCs8164C            PowerOutletTemplateTypeLabelEnum = "CS8164C"
	PowerOutletTemplateTypeLabelEnumCs8264C            PowerOutletTemplateTypeLabelEnum = "CS8264C"
	PowerOutletTemplateTypeLabelEnumCs8364C            PowerOutletTemplateTypeLabelEnum = "CS8364C"
	PowerOutletTemplateTypeLabelEnumCs8464C            PowerOutletTemplateTypeLabelEnum = "CS8464C"
	PowerOutletTemplateTypeLabelEnumItaTypeECee75      PowerOutletTemplateTypeLabelEnum = "ITA Type E (CEE7/5)"
	PowerOutletTemplateTypeLabelEnumItaTypeFCee73      PowerOutletTemplateTypeLabelEnum = "ITA Type F (CEE7/3)"
	PowerOutletTemplateTypeLabelEnumItaTypeGBs1363     PowerOutletTemplateTypeLabelEnum = "ITA Type G (BS 1363)"
	PowerOutletTemplateTypeLabelEnumItaTypeH           PowerOutletTemplateTypeLabelEnum = "ITA Type H"
	PowerOutletTemplateTypeLabelEnumItaTypeI           PowerOutletTemplateTypeLabelEnum = "ITA Type I"
	PowerOutletTemplateTypeLabelEnumItaTypeJ           PowerOutletTemplateTypeLabelEnum = "ITA Type J"
	PowerOutletTemplateTypeLabelEnumItaTypeK           PowerOutletTemplateTypeLabelEnum = "ITA Type K"
	PowerOutletTemplateTypeLabelEnumItaTypeLCei2350    PowerOutletTemplateTypeLabelEnum = "ITA Type L (CEI 23-50)"
	PowerOutletTemplateTypeLabelEnumItaTypeMBs546      PowerOutletTemplateTypeLabelEnum = "ITA Type M (BS 546)"
	PowerOutletTemplateTypeLabelEnumItaTypeN           PowerOutletTemplateTypeLabelEnum = "ITA Type N"
	PowerOutletTemplateTypeLabelEnumItaTypeO           PowerOutletTemplateTypeLabelEnum = "ITA Type O"
	PowerOutletTemplateTypeLabelEnumHdotCx             PowerOutletTemplateTypeLabelEnum = "HDOT Cx"
)

type PowerOutletTemplateTypeValueEnum string

const (
	PowerOutletTemplateTypeValueEnumIec60320C5     PowerOutletTemplateTypeValueEnum = "iec-60320-c5"
	PowerOutletTemplateTypeValueEnumIec60320C7     PowerOutletTemplateTypeValueEnum = "iec-60320-c7"
	PowerOutletTemplateTypeValueEnumIec60320C13    PowerOutletTemplateTypeValueEnum = "iec-60320-c13"
	PowerOutletTemplateTypeValueEnumIec60320C15    PowerOutletTemplateTypeValueEnum = "iec-60320-c15"
	PowerOutletTemplateTypeValueEnumIec60320C19    PowerOutletTemplateTypeValueEnum = "iec-60320-c19"
	PowerOutletTemplateTypeValueEnumIec60309Pne4h  PowerOutletTemplateTypeValueEnum = "iec-60309-p-n-e-4h"
	PowerOutletTemplateTypeValueEnumIec60309Pne6h  PowerOutletTemplateTypeValueEnum = "iec-60309-p-n-e-6h"
	PowerOutletTemplateTypeValueEnumIec60309Pne9h  PowerOutletTemplateTypeValueEnum = "iec-60309-p-n-e-9h"
	PowerOutletTemplateTypeValueEnumIec603092pE4h  PowerOutletTemplateTypeValueEnum = "iec-60309-2p-e-4h"
	PowerOutletTemplateTypeValueEnumIec603092pE6h  PowerOutletTemplateTypeValueEnum = "iec-60309-2p-e-6h"
	PowerOutletTemplateTypeValueEnumIec603092pE9h  PowerOutletTemplateTypeValueEnum = "iec-60309-2p-e-9h"
	PowerOutletTemplateTypeValueEnumIec603093pE4h  PowerOutletTemplateTypeValueEnum = "iec-60309-3p-e-4h"
	PowerOutletTemplateTypeValueEnumIec603093pE6h  PowerOutletTemplateTypeValueEnum = "iec-60309-3p-e-6h"
	PowerOutletTemplateTypeValueEnumIec603093pE9h  PowerOutletTemplateTypeValueEnum = "iec-60309-3p-e-9h"
	PowerOutletTemplateTypeValueEnumIec603093pNe4h PowerOutletTemplateTypeValueEnum = "iec-60309-3p-n-e-4h"
	PowerOutletTemplateTypeValueEnumIec603093pNe6h PowerOutletTemplateTypeValueEnum = "iec-60309-3p-n-e-6h"
	PowerOutletTemplateTypeValueEnumIec603093pNe9h PowerOutletTemplateTypeValueEnum = "iec-60309-3p-n-e-9h"
	PowerOutletTemplateTypeValueEnumNema115r       PowerOutletTemplateTypeValueEnum = "nema-1-15r"
	PowerOutletTemplateTypeValueEnumNema515r       PowerOutletTemplateTypeValueEnum = "nema-5-15r"
	PowerOutletTemplateTypeValueEnumNema520r       PowerOutletTemplateTypeValueEnum = "nema-5-20r"
	PowerOutletTemplateTypeValueEnumNema530r       PowerOutletTemplateTypeValueEnum = "nema-5-30r"
	PowerOutletTemplateTypeValueEnumNema550r       PowerOutletTemplateTypeValueEnum = "nema-5-50r"
	PowerOutletTemplateTypeValueEnumNema615r       PowerOutletTemplateTypeValueEnum = "nema-6-15r"
	PowerOutletTemplateTypeValueEnumNema620r       PowerOutletTemplateTypeValueEnum = "nema-6-20r"
	PowerOutletTemplateTypeValueEnumNema630r       PowerOutletTemplateTypeValueEnum = "nema-6-30r"
	PowerOutletTemplateTypeValueEnumNema650r       PowerOutletTemplateTypeValueEnum = "nema-6-50r"
	PowerOutletTemplateTypeValueEnumNema1030r      PowerOutletTemplateTypeValueEnum = "nema-10-30r"
	PowerOutletTemplateTypeValueEnumNema1050r      PowerOutletTemplateTypeValueEnum = "nema-10-50r"
	PowerOutletTemplateTypeValueEnumNema1420r      PowerOutletTemplateTypeValueEnum = "nema-14-20r"
	PowerOutletTemplateTypeValueEnumNema1430r      PowerOutletTemplateTypeValueEnum = "nema-14-30r"
	PowerOutletTemplateTypeValueEnumNema1450r      PowerOutletTemplateTypeValueEnum = "nema-14-50r"
	PowerOutletTemplateTypeValueEnumNema1460r      PowerOutletTemplateTypeValueEnum = "nema-14-60r"
	PowerOutletTemplateTypeValueEnumNemaL115r      PowerOutletTemplateTypeValueEnum = "nema-l1-15r"
	PowerOutletTemplateTypeValueEnumNemaL515r      PowerOutletTemplateTypeValueEnum = "nema-l5-15r"
	PowerOutletTemplateTypeValueEnumNemaL520r      PowerOutletTemplateTypeValueEnum = "nema-l5-20r"
	PowerOutletTemplateTypeValueEnumNemaL530r      PowerOutletTemplateTypeValueEnum = "nema-l5-30r"
	PowerOutletTemplateTypeValueEnumNemaL550r      PowerOutletTemplateTypeValueEnum = "nema-l5-50r"
	PowerOutletTemplateTypeValueEnumNemaL615r      PowerOutletTemplateTypeValueEnum = "nema-l6-15r"
	PowerOutletTemplateTypeValueEnumNemaL620r      PowerOutletTemplateTypeValueEnum = "nema-l6-20r"
	PowerOutletTemplateTypeValueEnumNemaL630r      PowerOutletTemplateTypeValueEnum = "nema-l6-30r"
	PowerOutletTemplateTypeValueEnumNemaL650r      PowerOutletTemplateTypeValueEnum = "nema-l6-50r"
	PowerOutletTemplateTypeValueEnumNemaL1030r     PowerOutletTemplateTypeValueEnum = "nema-l10-30r"
	PowerOutletTemplateTypeValueEnumNemaL1420r     PowerOutletTemplateTypeValueEnum = "nema-l14-20r"
	PowerOutletTemplateTypeValueEnumNemaL1430r     PowerOutletTemplateTypeValueEnum = "nema-l14-30r"
	PowerOutletTemplateTypeValueEnumNemaL1450r     PowerOutletTemplateTypeValueEnum = "nema-l14-50r"
	PowerOutletTemplateTypeValueEnumNemaL1460r     PowerOutletTemplateTypeValueEnum = "nema-l14-60r"
	PowerOutletTemplateTypeValueEnumNemaL2120r     PowerOutletTemplateTypeValueEnum = "nema-l21-20r"
	PowerOutletTemplateTypeValueEnumNemaL2130r     PowerOutletTemplateTypeValueEnum = "nema-l21-30r"
	PowerOutletTemplateTypeValueEnumCs6360C        PowerOutletTemplateTypeValueEnum = "CS6360C"
	PowerOutletTemplateTypeValueEnumCs6364C        PowerOutletTemplateTypeValueEnum = "CS6364C"
	PowerOutletTemplateTypeValueEnumCs8164C        PowerOutletTemplateTypeValueEnum = "CS8164C"
	PowerOutletTemplateTypeValueEnumCs8264C        PowerOutletTemplateTypeValueEnum = "CS8264C"
	PowerOutletTemplateTypeValueEnumCs8364C        PowerOutletTemplateTypeValueEnum = "CS8364C"
	PowerOutletTemplateTypeValueEnumCs8464C        PowerOutletTemplateTypeValueEnum = "CS8464C"
	PowerOutletTemplateTypeValueEnumItaE           PowerOutletTemplateTypeValueEnum = "ita-e"
	PowerOutletTemplateTypeValueEnumItaF           PowerOutletTemplateTypeValueEnum = "ita-f"
	PowerOutletTemplateTypeValueEnumItaG           PowerOutletTemplateTypeValueEnum = "ita-g"
	PowerOutletTemplateTypeValueEnumItaH           PowerOutletTemplateTypeValueEnum = "ita-h"
	PowerOutletTemplateTypeValueEnumItaI           PowerOutletTemplateTypeValueEnum = "ita-i"
	PowerOutletTemplateTypeValueEnumItaJ           PowerOutletTemplateTypeValueEnum = "ita-j"
	PowerOutletTemplateTypeValueEnumItaK           PowerOutletTemplateTypeValueEnum = "ita-k"
	PowerOutletTemplateTypeValueEnumItaL           PowerOutletTemplateTypeValueEnum = "ita-l"
	PowerOutletTemplateTypeValueEnumItaM           PowerOutletTemplateTypeValueEnum = "ita-m"
	PowerOutletTemplateTypeValueEnumItaN           PowerOutletTemplateTypeValueEnum = "ita-n"
	PowerOutletTemplateTypeValueEnumItaO           PowerOutletTemplateTypeValueEnum = "ita-o"
	PowerOutletTemplateTypeValueEnumHdotCx         PowerOutletTemplateTypeValueEnum = "hdot-cx"
)

type PowerOutletTemplateTypeType struct {
	Label PowerOutletTemplateTypeLabelEnum `json:"label"`
	Value PowerOutletTemplateTypeValueEnum `json:"value"`
}

type PowerOutletTemplate struct {
	DeviceType NestedDeviceType                   `json:"device_type"`
	FeedLeg    *PowerOutletTemplateFeedLegFeedLeg `json:"feed_leg"`
	ID         *int64                             `json:"id"`
	Name       string                             `json:"name"`
	PowerPort  *NestedPowerPortTemplate           `json:"power_port"`
	Type       *PowerOutletTemplateTypeType       `json:"type"`
}
