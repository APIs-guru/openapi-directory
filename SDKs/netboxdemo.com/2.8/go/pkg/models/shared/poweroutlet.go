package shared

type PowerOutletConnectionStatusLabelEnum string

const (
	PowerOutletConnectionStatusLabelEnumNotConnected PowerOutletConnectionStatusLabelEnum = "Not Connected"
	PowerOutletConnectionStatusLabelEnumConnected    PowerOutletConnectionStatusLabelEnum = "Connected"
)

type PowerOutletConnectionStatusConnectionStatus struct {
	Label PowerOutletConnectionStatusLabelEnum `json:"label"`
	Value bool                                 `json:"value"`
}

type PowerOutletFeedLegLabelEnum string

const (
	PowerOutletFeedLegLabelEnumA PowerOutletFeedLegLabelEnum = "A"
	PowerOutletFeedLegLabelEnumB PowerOutletFeedLegLabelEnum = "B"
	PowerOutletFeedLegLabelEnumC PowerOutletFeedLegLabelEnum = "C"
)

type PowerOutletFeedLegValueEnum string

const (
	PowerOutletFeedLegValueEnumA PowerOutletFeedLegValueEnum = "A"
	PowerOutletFeedLegValueEnumB PowerOutletFeedLegValueEnum = "B"
	PowerOutletFeedLegValueEnumC PowerOutletFeedLegValueEnum = "C"
)

type PowerOutletFeedLegFeedLeg struct {
	Label PowerOutletFeedLegLabelEnum `json:"label"`
	Value PowerOutletFeedLegValueEnum `json:"value"`
}

type PowerOutletTypeLabelEnum string

const (
	PowerOutletTypeLabelEnumC5                 PowerOutletTypeLabelEnum = "C5"
	PowerOutletTypeLabelEnumC7                 PowerOutletTypeLabelEnum = "C7"
	PowerOutletTypeLabelEnumC13                PowerOutletTypeLabelEnum = "C13"
	PowerOutletTypeLabelEnumC15                PowerOutletTypeLabelEnum = "C15"
	PowerOutletTypeLabelEnumC19                PowerOutletTypeLabelEnum = "C19"
	PowerOutletTypeLabelEnumPPlusNPlusE4H      PowerOutletTypeLabelEnum = "P+N+E 4H"
	PowerOutletTypeLabelEnumPPlusNPlusE6H      PowerOutletTypeLabelEnum = "P+N+E 6H"
	PowerOutletTypeLabelEnumPPlusNPlusE9H      PowerOutletTypeLabelEnum = "P+N+E 9H"
	PowerOutletTypeLabelEnumTwoPPlusE4H        PowerOutletTypeLabelEnum = "2P+E 4H"
	PowerOutletTypeLabelEnumTwoPPlusE6H        PowerOutletTypeLabelEnum = "2P+E 6H"
	PowerOutletTypeLabelEnumTwoPPlusE9H        PowerOutletTypeLabelEnum = "2P+E 9H"
	PowerOutletTypeLabelEnumThreePPlusE4H      PowerOutletTypeLabelEnum = "3P+E 4H"
	PowerOutletTypeLabelEnumThreePPlusE6H      PowerOutletTypeLabelEnum = "3P+E 6H"
	PowerOutletTypeLabelEnumThreePPlusE9H      PowerOutletTypeLabelEnum = "3P+E 9H"
	PowerOutletTypeLabelEnumThreePPlusNPlusE4H PowerOutletTypeLabelEnum = "3P+N+E 4H"
	PowerOutletTypeLabelEnumThreePPlusNPlusE6H PowerOutletTypeLabelEnum = "3P+N+E 6H"
	PowerOutletTypeLabelEnumThreePPlusNPlusE9H PowerOutletTypeLabelEnum = "3P+N+E 9H"
	PowerOutletTypeLabelEnumNema115R           PowerOutletTypeLabelEnum = "NEMA 1-15R"
	PowerOutletTypeLabelEnumNema515R           PowerOutletTypeLabelEnum = "NEMA 5-15R"
	PowerOutletTypeLabelEnumNema520R           PowerOutletTypeLabelEnum = "NEMA 5-20R"
	PowerOutletTypeLabelEnumNema530R           PowerOutletTypeLabelEnum = "NEMA 5-30R"
	PowerOutletTypeLabelEnumNema550R           PowerOutletTypeLabelEnum = "NEMA 5-50R"
	PowerOutletTypeLabelEnumNema615R           PowerOutletTypeLabelEnum = "NEMA 6-15R"
	PowerOutletTypeLabelEnumNema620R           PowerOutletTypeLabelEnum = "NEMA 6-20R"
	PowerOutletTypeLabelEnumNema630R           PowerOutletTypeLabelEnum = "NEMA 6-30R"
	PowerOutletTypeLabelEnumNema650R           PowerOutletTypeLabelEnum = "NEMA 6-50R"
	PowerOutletTypeLabelEnumNema1030R          PowerOutletTypeLabelEnum = "NEMA 10-30R"
	PowerOutletTypeLabelEnumNema1050R          PowerOutletTypeLabelEnum = "NEMA 10-50R"
	PowerOutletTypeLabelEnumNema1420R          PowerOutletTypeLabelEnum = "NEMA 14-20R"
	PowerOutletTypeLabelEnumNema1430R          PowerOutletTypeLabelEnum = "NEMA 14-30R"
	PowerOutletTypeLabelEnumNema1450R          PowerOutletTypeLabelEnum = "NEMA 14-50R"
	PowerOutletTypeLabelEnumNema1460R          PowerOutletTypeLabelEnum = "NEMA 14-60R"
	PowerOutletTypeLabelEnumNemaL115R          PowerOutletTypeLabelEnum = "NEMA L1-15R"
	PowerOutletTypeLabelEnumNemaL515R          PowerOutletTypeLabelEnum = "NEMA L5-15R"
	PowerOutletTypeLabelEnumNemaL520R          PowerOutletTypeLabelEnum = "NEMA L5-20R"
	PowerOutletTypeLabelEnumNemaL530R          PowerOutletTypeLabelEnum = "NEMA L5-30R"
	PowerOutletTypeLabelEnumNemaL550R          PowerOutletTypeLabelEnum = "NEMA L5-50R"
	PowerOutletTypeLabelEnumNemaL615R          PowerOutletTypeLabelEnum = "NEMA L6-15R"
	PowerOutletTypeLabelEnumNemaL620R          PowerOutletTypeLabelEnum = "NEMA L6-20R"
	PowerOutletTypeLabelEnumNemaL630R          PowerOutletTypeLabelEnum = "NEMA L6-30R"
	PowerOutletTypeLabelEnumNemaL650R          PowerOutletTypeLabelEnum = "NEMA L6-50R"
	PowerOutletTypeLabelEnumNemaL1030R         PowerOutletTypeLabelEnum = "NEMA L10-30R"
	PowerOutletTypeLabelEnumNemaL1420R         PowerOutletTypeLabelEnum = "NEMA L14-20R"
	PowerOutletTypeLabelEnumNemaL1430R         PowerOutletTypeLabelEnum = "NEMA L14-30R"
	PowerOutletTypeLabelEnumNemaL1450R         PowerOutletTypeLabelEnum = "NEMA L14-50R"
	PowerOutletTypeLabelEnumNemaL1460R         PowerOutletTypeLabelEnum = "NEMA L14-60R"
	PowerOutletTypeLabelEnumNemaL2120R         PowerOutletTypeLabelEnum = "NEMA L21-20R"
	PowerOutletTypeLabelEnumNemaL2130R         PowerOutletTypeLabelEnum = "NEMA L21-30R"
	PowerOutletTypeLabelEnumCs6360C            PowerOutletTypeLabelEnum = "CS6360C"
	PowerOutletTypeLabelEnumCs6364C            PowerOutletTypeLabelEnum = "CS6364C"
	PowerOutletTypeLabelEnumCs8164C            PowerOutletTypeLabelEnum = "CS8164C"
	PowerOutletTypeLabelEnumCs8264C            PowerOutletTypeLabelEnum = "CS8264C"
	PowerOutletTypeLabelEnumCs8364C            PowerOutletTypeLabelEnum = "CS8364C"
	PowerOutletTypeLabelEnumCs8464C            PowerOutletTypeLabelEnum = "CS8464C"
	PowerOutletTypeLabelEnumItaTypeECee75      PowerOutletTypeLabelEnum = "ITA Type E (CEE7/5)"
	PowerOutletTypeLabelEnumItaTypeFCee73      PowerOutletTypeLabelEnum = "ITA Type F (CEE7/3)"
	PowerOutletTypeLabelEnumItaTypeGBs1363     PowerOutletTypeLabelEnum = "ITA Type G (BS 1363)"
	PowerOutletTypeLabelEnumItaTypeH           PowerOutletTypeLabelEnum = "ITA Type H"
	PowerOutletTypeLabelEnumItaTypeI           PowerOutletTypeLabelEnum = "ITA Type I"
	PowerOutletTypeLabelEnumItaTypeJ           PowerOutletTypeLabelEnum = "ITA Type J"
	PowerOutletTypeLabelEnumItaTypeK           PowerOutletTypeLabelEnum = "ITA Type K"
	PowerOutletTypeLabelEnumItaTypeLCei2350    PowerOutletTypeLabelEnum = "ITA Type L (CEI 23-50)"
	PowerOutletTypeLabelEnumItaTypeMBs546      PowerOutletTypeLabelEnum = "ITA Type M (BS 546)"
	PowerOutletTypeLabelEnumItaTypeN           PowerOutletTypeLabelEnum = "ITA Type N"
	PowerOutletTypeLabelEnumItaTypeO           PowerOutletTypeLabelEnum = "ITA Type O"
	PowerOutletTypeLabelEnumHdotCx             PowerOutletTypeLabelEnum = "HDOT Cx"
)

type PowerOutletTypeValueEnum string

const (
	PowerOutletTypeValueEnumIec60320C5     PowerOutletTypeValueEnum = "iec-60320-c5"
	PowerOutletTypeValueEnumIec60320C7     PowerOutletTypeValueEnum = "iec-60320-c7"
	PowerOutletTypeValueEnumIec60320C13    PowerOutletTypeValueEnum = "iec-60320-c13"
	PowerOutletTypeValueEnumIec60320C15    PowerOutletTypeValueEnum = "iec-60320-c15"
	PowerOutletTypeValueEnumIec60320C19    PowerOutletTypeValueEnum = "iec-60320-c19"
	PowerOutletTypeValueEnumIec60309Pne4h  PowerOutletTypeValueEnum = "iec-60309-p-n-e-4h"
	PowerOutletTypeValueEnumIec60309Pne6h  PowerOutletTypeValueEnum = "iec-60309-p-n-e-6h"
	PowerOutletTypeValueEnumIec60309Pne9h  PowerOutletTypeValueEnum = "iec-60309-p-n-e-9h"
	PowerOutletTypeValueEnumIec603092pE4h  PowerOutletTypeValueEnum = "iec-60309-2p-e-4h"
	PowerOutletTypeValueEnumIec603092pE6h  PowerOutletTypeValueEnum = "iec-60309-2p-e-6h"
	PowerOutletTypeValueEnumIec603092pE9h  PowerOutletTypeValueEnum = "iec-60309-2p-e-9h"
	PowerOutletTypeValueEnumIec603093pE4h  PowerOutletTypeValueEnum = "iec-60309-3p-e-4h"
	PowerOutletTypeValueEnumIec603093pE6h  PowerOutletTypeValueEnum = "iec-60309-3p-e-6h"
	PowerOutletTypeValueEnumIec603093pE9h  PowerOutletTypeValueEnum = "iec-60309-3p-e-9h"
	PowerOutletTypeValueEnumIec603093pNe4h PowerOutletTypeValueEnum = "iec-60309-3p-n-e-4h"
	PowerOutletTypeValueEnumIec603093pNe6h PowerOutletTypeValueEnum = "iec-60309-3p-n-e-6h"
	PowerOutletTypeValueEnumIec603093pNe9h PowerOutletTypeValueEnum = "iec-60309-3p-n-e-9h"
	PowerOutletTypeValueEnumNema115r       PowerOutletTypeValueEnum = "nema-1-15r"
	PowerOutletTypeValueEnumNema515r       PowerOutletTypeValueEnum = "nema-5-15r"
	PowerOutletTypeValueEnumNema520r       PowerOutletTypeValueEnum = "nema-5-20r"
	PowerOutletTypeValueEnumNema530r       PowerOutletTypeValueEnum = "nema-5-30r"
	PowerOutletTypeValueEnumNema550r       PowerOutletTypeValueEnum = "nema-5-50r"
	PowerOutletTypeValueEnumNema615r       PowerOutletTypeValueEnum = "nema-6-15r"
	PowerOutletTypeValueEnumNema620r       PowerOutletTypeValueEnum = "nema-6-20r"
	PowerOutletTypeValueEnumNema630r       PowerOutletTypeValueEnum = "nema-6-30r"
	PowerOutletTypeValueEnumNema650r       PowerOutletTypeValueEnum = "nema-6-50r"
	PowerOutletTypeValueEnumNema1030r      PowerOutletTypeValueEnum = "nema-10-30r"
	PowerOutletTypeValueEnumNema1050r      PowerOutletTypeValueEnum = "nema-10-50r"
	PowerOutletTypeValueEnumNema1420r      PowerOutletTypeValueEnum = "nema-14-20r"
	PowerOutletTypeValueEnumNema1430r      PowerOutletTypeValueEnum = "nema-14-30r"
	PowerOutletTypeValueEnumNema1450r      PowerOutletTypeValueEnum = "nema-14-50r"
	PowerOutletTypeValueEnumNema1460r      PowerOutletTypeValueEnum = "nema-14-60r"
	PowerOutletTypeValueEnumNemaL115r      PowerOutletTypeValueEnum = "nema-l1-15r"
	PowerOutletTypeValueEnumNemaL515r      PowerOutletTypeValueEnum = "nema-l5-15r"
	PowerOutletTypeValueEnumNemaL520r      PowerOutletTypeValueEnum = "nema-l5-20r"
	PowerOutletTypeValueEnumNemaL530r      PowerOutletTypeValueEnum = "nema-l5-30r"
	PowerOutletTypeValueEnumNemaL550r      PowerOutletTypeValueEnum = "nema-l5-50r"
	PowerOutletTypeValueEnumNemaL615r      PowerOutletTypeValueEnum = "nema-l6-15r"
	PowerOutletTypeValueEnumNemaL620r      PowerOutletTypeValueEnum = "nema-l6-20r"
	PowerOutletTypeValueEnumNemaL630r      PowerOutletTypeValueEnum = "nema-l6-30r"
	PowerOutletTypeValueEnumNemaL650r      PowerOutletTypeValueEnum = "nema-l6-50r"
	PowerOutletTypeValueEnumNemaL1030r     PowerOutletTypeValueEnum = "nema-l10-30r"
	PowerOutletTypeValueEnumNemaL1420r     PowerOutletTypeValueEnum = "nema-l14-20r"
	PowerOutletTypeValueEnumNemaL1430r     PowerOutletTypeValueEnum = "nema-l14-30r"
	PowerOutletTypeValueEnumNemaL1450r     PowerOutletTypeValueEnum = "nema-l14-50r"
	PowerOutletTypeValueEnumNemaL1460r     PowerOutletTypeValueEnum = "nema-l14-60r"
	PowerOutletTypeValueEnumNemaL2120r     PowerOutletTypeValueEnum = "nema-l21-20r"
	PowerOutletTypeValueEnumNemaL2130r     PowerOutletTypeValueEnum = "nema-l21-30r"
	PowerOutletTypeValueEnumCs6360C        PowerOutletTypeValueEnum = "CS6360C"
	PowerOutletTypeValueEnumCs6364C        PowerOutletTypeValueEnum = "CS6364C"
	PowerOutletTypeValueEnumCs8164C        PowerOutletTypeValueEnum = "CS8164C"
	PowerOutletTypeValueEnumCs8264C        PowerOutletTypeValueEnum = "CS8264C"
	PowerOutletTypeValueEnumCs8364C        PowerOutletTypeValueEnum = "CS8364C"
	PowerOutletTypeValueEnumCs8464C        PowerOutletTypeValueEnum = "CS8464C"
	PowerOutletTypeValueEnumItaE           PowerOutletTypeValueEnum = "ita-e"
	PowerOutletTypeValueEnumItaF           PowerOutletTypeValueEnum = "ita-f"
	PowerOutletTypeValueEnumItaG           PowerOutletTypeValueEnum = "ita-g"
	PowerOutletTypeValueEnumItaH           PowerOutletTypeValueEnum = "ita-h"
	PowerOutletTypeValueEnumItaI           PowerOutletTypeValueEnum = "ita-i"
	PowerOutletTypeValueEnumItaJ           PowerOutletTypeValueEnum = "ita-j"
	PowerOutletTypeValueEnumItaK           PowerOutletTypeValueEnum = "ita-k"
	PowerOutletTypeValueEnumItaL           PowerOutletTypeValueEnum = "ita-l"
	PowerOutletTypeValueEnumItaM           PowerOutletTypeValueEnum = "ita-m"
	PowerOutletTypeValueEnumItaN           PowerOutletTypeValueEnum = "ita-n"
	PowerOutletTypeValueEnumItaO           PowerOutletTypeValueEnum = "ita-o"
	PowerOutletTypeValueEnumHdotCx         PowerOutletTypeValueEnum = "hdot-cx"
)

type PowerOutletTypeType struct {
	Label PowerOutletTypeLabelEnum `json:"label"`
	Value PowerOutletTypeValueEnum `json:"value"`
}

type PowerOutlet struct {
	Cable                 *NestedCable                                 `json:"cable,omitempty"`
	ConnectedEndpoint     map[string]string                            `json:"connected_endpoint,omitempty"`
	ConnectedEndpointType *string                                      `json:"connected_endpoint_type,omitempty"`
	ConnectionStatus      *PowerOutletConnectionStatusConnectionStatus `json:"connection_status,omitempty"`
	Description           *string                                      `json:"description,omitempty"`
	Device                NestedDevice                                 `json:"device"`
	FeedLeg               *PowerOutletFeedLegFeedLeg                   `json:"feed_leg,omitempty"`
	ID                    *int64                                       `json:"id,omitempty"`
	Name                  string                                       `json:"name"`
	PowerPort             *NestedPowerPort                             `json:"power_port,omitempty"`
	Tags                  []string                                     `json:"tags,omitempty"`
	Type                  *PowerOutletTypeType                         `json:"type,omitempty"`
}
