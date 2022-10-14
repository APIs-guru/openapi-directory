package shared

type PowerPortConnectionStatusLabelEnum string

const (
	PowerPortConnectionStatusLabelEnumNotConnected PowerPortConnectionStatusLabelEnum = "Not Connected"
	PowerPortConnectionStatusLabelEnumConnected    PowerPortConnectionStatusLabelEnum = "Connected"
)

type PowerPortConnectionStatusConnectionStatus struct {
	Label PowerPortConnectionStatusLabelEnum `json:"label"`
	Value bool                               `json:"value"`
}

type PowerPortTypeLabelEnum string

const (
	PowerPortTypeLabelEnumC6                 PowerPortTypeLabelEnum = "C6"
	PowerPortTypeLabelEnumC8                 PowerPortTypeLabelEnum = "C8"
	PowerPortTypeLabelEnumC14                PowerPortTypeLabelEnum = "C14"
	PowerPortTypeLabelEnumC16                PowerPortTypeLabelEnum = "C16"
	PowerPortTypeLabelEnumC20                PowerPortTypeLabelEnum = "C20"
	PowerPortTypeLabelEnumPPlusNPlusE4H      PowerPortTypeLabelEnum = "P+N+E 4H"
	PowerPortTypeLabelEnumPPlusNPlusE6H      PowerPortTypeLabelEnum = "P+N+E 6H"
	PowerPortTypeLabelEnumPPlusNPlusE9H      PowerPortTypeLabelEnum = "P+N+E 9H"
	PowerPortTypeLabelEnumTwoPPlusE4H        PowerPortTypeLabelEnum = "2P+E 4H"
	PowerPortTypeLabelEnumTwoPPlusE6H        PowerPortTypeLabelEnum = "2P+E 6H"
	PowerPortTypeLabelEnumTwoPPlusE9H        PowerPortTypeLabelEnum = "2P+E 9H"
	PowerPortTypeLabelEnumThreePPlusE4H      PowerPortTypeLabelEnum = "3P+E 4H"
	PowerPortTypeLabelEnumThreePPlusE6H      PowerPortTypeLabelEnum = "3P+E 6H"
	PowerPortTypeLabelEnumThreePPlusE9H      PowerPortTypeLabelEnum = "3P+E 9H"
	PowerPortTypeLabelEnumThreePPlusNPlusE4H PowerPortTypeLabelEnum = "3P+N+E 4H"
	PowerPortTypeLabelEnumThreePPlusNPlusE6H PowerPortTypeLabelEnum = "3P+N+E 6H"
	PowerPortTypeLabelEnumThreePPlusNPlusE9H PowerPortTypeLabelEnum = "3P+N+E 9H"
	PowerPortTypeLabelEnumNema115P           PowerPortTypeLabelEnum = "NEMA 1-15P"
	PowerPortTypeLabelEnumNema515P           PowerPortTypeLabelEnum = "NEMA 5-15P"
	PowerPortTypeLabelEnumNema520P           PowerPortTypeLabelEnum = "NEMA 5-20P"
	PowerPortTypeLabelEnumNema530P           PowerPortTypeLabelEnum = "NEMA 5-30P"
	PowerPortTypeLabelEnumNema550P           PowerPortTypeLabelEnum = "NEMA 5-50P"
	PowerPortTypeLabelEnumNema615P           PowerPortTypeLabelEnum = "NEMA 6-15P"
	PowerPortTypeLabelEnumNema620P           PowerPortTypeLabelEnum = "NEMA 6-20P"
	PowerPortTypeLabelEnumNema630P           PowerPortTypeLabelEnum = "NEMA 6-30P"
	PowerPortTypeLabelEnumNema650P           PowerPortTypeLabelEnum = "NEMA 6-50P"
	PowerPortTypeLabelEnumNema1030P          PowerPortTypeLabelEnum = "NEMA 10-30P"
	PowerPortTypeLabelEnumNema1050P          PowerPortTypeLabelEnum = "NEMA 10-50P"
	PowerPortTypeLabelEnumNema1420P          PowerPortTypeLabelEnum = "NEMA 14-20P"
	PowerPortTypeLabelEnumNema1430P          PowerPortTypeLabelEnum = "NEMA 14-30P"
	PowerPortTypeLabelEnumNema1450P          PowerPortTypeLabelEnum = "NEMA 14-50P"
	PowerPortTypeLabelEnumNema1460P          PowerPortTypeLabelEnum = "NEMA 14-60P"
	PowerPortTypeLabelEnumNemaL115P          PowerPortTypeLabelEnum = "NEMA L1-15P"
	PowerPortTypeLabelEnumNemaL515P          PowerPortTypeLabelEnum = "NEMA L5-15P"
	PowerPortTypeLabelEnumNemaL520P          PowerPortTypeLabelEnum = "NEMA L5-20P"
	PowerPortTypeLabelEnumNemaL530P          PowerPortTypeLabelEnum = "NEMA L5-30P"
	PowerPortTypeLabelEnumNemaL550P          PowerPortTypeLabelEnum = "NEMA L5-50P"
	PowerPortTypeLabelEnumNemaL615P          PowerPortTypeLabelEnum = "NEMA L6-15P"
	PowerPortTypeLabelEnumNemaL620P          PowerPortTypeLabelEnum = "NEMA L6-20P"
	PowerPortTypeLabelEnumNemaL630P          PowerPortTypeLabelEnum = "NEMA L6-30P"
	PowerPortTypeLabelEnumNemaL650P          PowerPortTypeLabelEnum = "NEMA L6-50P"
	PowerPortTypeLabelEnumNemaL1030P         PowerPortTypeLabelEnum = "NEMA L10-30P"
	PowerPortTypeLabelEnumNemaL1420P         PowerPortTypeLabelEnum = "NEMA L14-20P"
	PowerPortTypeLabelEnumNemaL1430P         PowerPortTypeLabelEnum = "NEMA L14-30P"
	PowerPortTypeLabelEnumNemaL1450P         PowerPortTypeLabelEnum = "NEMA L14-50P"
	PowerPortTypeLabelEnumNemaL1460P         PowerPortTypeLabelEnum = "NEMA L14-60P"
	PowerPortTypeLabelEnumNemaL2120P         PowerPortTypeLabelEnum = "NEMA L21-20P"
	PowerPortTypeLabelEnumNemaL2130P         PowerPortTypeLabelEnum = "NEMA L21-30P"
	PowerPortTypeLabelEnumCs6361C            PowerPortTypeLabelEnum = "CS6361C"
	PowerPortTypeLabelEnumCs6365C            PowerPortTypeLabelEnum = "CS6365C"
	PowerPortTypeLabelEnumCs8165C            PowerPortTypeLabelEnum = "CS8165C"
	PowerPortTypeLabelEnumCs8265C            PowerPortTypeLabelEnum = "CS8265C"
	PowerPortTypeLabelEnumCs8365C            PowerPortTypeLabelEnum = "CS8365C"
	PowerPortTypeLabelEnumCs8465C            PowerPortTypeLabelEnum = "CS8465C"
	PowerPortTypeLabelEnumItaTypeECee75      PowerPortTypeLabelEnum = "ITA Type E (CEE 7/5)"
	PowerPortTypeLabelEnumItaTypeFCee74      PowerPortTypeLabelEnum = "ITA Type F (CEE 7/4)"
	PowerPortTypeLabelEnumItaTypeEfCee77     PowerPortTypeLabelEnum = "ITA Type E/F (CEE 7/7)"
	PowerPortTypeLabelEnumItaTypeGBs1363     PowerPortTypeLabelEnum = "ITA Type G (BS 1363)"
	PowerPortTypeLabelEnumItaTypeH           PowerPortTypeLabelEnum = "ITA Type H"
	PowerPortTypeLabelEnumItaTypeI           PowerPortTypeLabelEnum = "ITA Type I"
	PowerPortTypeLabelEnumItaTypeJ           PowerPortTypeLabelEnum = "ITA Type J"
	PowerPortTypeLabelEnumItaTypeK           PowerPortTypeLabelEnum = "ITA Type K"
	PowerPortTypeLabelEnumItaTypeLCei2350    PowerPortTypeLabelEnum = "ITA Type L (CEI 23-50)"
	PowerPortTypeLabelEnumItaTypeMBs546      PowerPortTypeLabelEnum = "ITA Type M (BS 546)"
	PowerPortTypeLabelEnumItaTypeN           PowerPortTypeLabelEnum = "ITA Type N"
	PowerPortTypeLabelEnumItaTypeO           PowerPortTypeLabelEnum = "ITA Type O"
)

type PowerPortTypeValueEnum string

const (
	PowerPortTypeValueEnumIec60320C6     PowerPortTypeValueEnum = "iec-60320-c6"
	PowerPortTypeValueEnumIec60320C8     PowerPortTypeValueEnum = "iec-60320-c8"
	PowerPortTypeValueEnumIec60320C14    PowerPortTypeValueEnum = "iec-60320-c14"
	PowerPortTypeValueEnumIec60320C16    PowerPortTypeValueEnum = "iec-60320-c16"
	PowerPortTypeValueEnumIec60320C20    PowerPortTypeValueEnum = "iec-60320-c20"
	PowerPortTypeValueEnumIec60309Pne4h  PowerPortTypeValueEnum = "iec-60309-p-n-e-4h"
	PowerPortTypeValueEnumIec60309Pne6h  PowerPortTypeValueEnum = "iec-60309-p-n-e-6h"
	PowerPortTypeValueEnumIec60309Pne9h  PowerPortTypeValueEnum = "iec-60309-p-n-e-9h"
	PowerPortTypeValueEnumIec603092pE4h  PowerPortTypeValueEnum = "iec-60309-2p-e-4h"
	PowerPortTypeValueEnumIec603092pE6h  PowerPortTypeValueEnum = "iec-60309-2p-e-6h"
	PowerPortTypeValueEnumIec603092pE9h  PowerPortTypeValueEnum = "iec-60309-2p-e-9h"
	PowerPortTypeValueEnumIec603093pE4h  PowerPortTypeValueEnum = "iec-60309-3p-e-4h"
	PowerPortTypeValueEnumIec603093pE6h  PowerPortTypeValueEnum = "iec-60309-3p-e-6h"
	PowerPortTypeValueEnumIec603093pE9h  PowerPortTypeValueEnum = "iec-60309-3p-e-9h"
	PowerPortTypeValueEnumIec603093pNe4h PowerPortTypeValueEnum = "iec-60309-3p-n-e-4h"
	PowerPortTypeValueEnumIec603093pNe6h PowerPortTypeValueEnum = "iec-60309-3p-n-e-6h"
	PowerPortTypeValueEnumIec603093pNe9h PowerPortTypeValueEnum = "iec-60309-3p-n-e-9h"
	PowerPortTypeValueEnumNema115p       PowerPortTypeValueEnum = "nema-1-15p"
	PowerPortTypeValueEnumNema515p       PowerPortTypeValueEnum = "nema-5-15p"
	PowerPortTypeValueEnumNema520p       PowerPortTypeValueEnum = "nema-5-20p"
	PowerPortTypeValueEnumNema530p       PowerPortTypeValueEnum = "nema-5-30p"
	PowerPortTypeValueEnumNema550p       PowerPortTypeValueEnum = "nema-5-50p"
	PowerPortTypeValueEnumNema615p       PowerPortTypeValueEnum = "nema-6-15p"
	PowerPortTypeValueEnumNema620p       PowerPortTypeValueEnum = "nema-6-20p"
	PowerPortTypeValueEnumNema630p       PowerPortTypeValueEnum = "nema-6-30p"
	PowerPortTypeValueEnumNema650p       PowerPortTypeValueEnum = "nema-6-50p"
	PowerPortTypeValueEnumNema1030p      PowerPortTypeValueEnum = "nema-10-30p"
	PowerPortTypeValueEnumNema1050p      PowerPortTypeValueEnum = "nema-10-50p"
	PowerPortTypeValueEnumNema1420p      PowerPortTypeValueEnum = "nema-14-20p"
	PowerPortTypeValueEnumNema1430p      PowerPortTypeValueEnum = "nema-14-30p"
	PowerPortTypeValueEnumNema1450p      PowerPortTypeValueEnum = "nema-14-50p"
	PowerPortTypeValueEnumNema1460p      PowerPortTypeValueEnum = "nema-14-60p"
	PowerPortTypeValueEnumNemaL115p      PowerPortTypeValueEnum = "nema-l1-15p"
	PowerPortTypeValueEnumNemaL515p      PowerPortTypeValueEnum = "nema-l5-15p"
	PowerPortTypeValueEnumNemaL520p      PowerPortTypeValueEnum = "nema-l5-20p"
	PowerPortTypeValueEnumNemaL530p      PowerPortTypeValueEnum = "nema-l5-30p"
	PowerPortTypeValueEnumNemaL550p      PowerPortTypeValueEnum = "nema-l5-50p"
	PowerPortTypeValueEnumNemaL615p      PowerPortTypeValueEnum = "nema-l6-15p"
	PowerPortTypeValueEnumNemaL620p      PowerPortTypeValueEnum = "nema-l6-20p"
	PowerPortTypeValueEnumNemaL630p      PowerPortTypeValueEnum = "nema-l6-30p"
	PowerPortTypeValueEnumNemaL650p      PowerPortTypeValueEnum = "nema-l6-50p"
	PowerPortTypeValueEnumNemaL1030p     PowerPortTypeValueEnum = "nema-l10-30p"
	PowerPortTypeValueEnumNemaL1420p     PowerPortTypeValueEnum = "nema-l14-20p"
	PowerPortTypeValueEnumNemaL1430p     PowerPortTypeValueEnum = "nema-l14-30p"
	PowerPortTypeValueEnumNemaL1450p     PowerPortTypeValueEnum = "nema-l14-50p"
	PowerPortTypeValueEnumNemaL1460p     PowerPortTypeValueEnum = "nema-l14-60p"
	PowerPortTypeValueEnumNemaL2120p     PowerPortTypeValueEnum = "nema-l21-20p"
	PowerPortTypeValueEnumNemaL2130p     PowerPortTypeValueEnum = "nema-l21-30p"
	PowerPortTypeValueEnumCs6361c        PowerPortTypeValueEnum = "cs6361c"
	PowerPortTypeValueEnumCs6365c        PowerPortTypeValueEnum = "cs6365c"
	PowerPortTypeValueEnumCs8165c        PowerPortTypeValueEnum = "cs8165c"
	PowerPortTypeValueEnumCs8265c        PowerPortTypeValueEnum = "cs8265c"
	PowerPortTypeValueEnumCs8365c        PowerPortTypeValueEnum = "cs8365c"
	PowerPortTypeValueEnumCs8465c        PowerPortTypeValueEnum = "cs8465c"
	PowerPortTypeValueEnumItaE           PowerPortTypeValueEnum = "ita-e"
	PowerPortTypeValueEnumItaF           PowerPortTypeValueEnum = "ita-f"
	PowerPortTypeValueEnumItaEf          PowerPortTypeValueEnum = "ita-ef"
	PowerPortTypeValueEnumItaG           PowerPortTypeValueEnum = "ita-g"
	PowerPortTypeValueEnumItaH           PowerPortTypeValueEnum = "ita-h"
	PowerPortTypeValueEnumItaI           PowerPortTypeValueEnum = "ita-i"
	PowerPortTypeValueEnumItaJ           PowerPortTypeValueEnum = "ita-j"
	PowerPortTypeValueEnumItaK           PowerPortTypeValueEnum = "ita-k"
	PowerPortTypeValueEnumItaL           PowerPortTypeValueEnum = "ita-l"
	PowerPortTypeValueEnumItaM           PowerPortTypeValueEnum = "ita-m"
	PowerPortTypeValueEnumItaN           PowerPortTypeValueEnum = "ita-n"
	PowerPortTypeValueEnumItaO           PowerPortTypeValueEnum = "ita-o"
)

type PowerPortTypeType struct {
	Label PowerPortTypeLabelEnum `json:"label"`
	Value PowerPortTypeValueEnum `json:"value"`
}

type PowerPort struct {
	AllocatedDraw         *int64                                     `json:"allocated_draw,omitempty"`
	Cable                 *NestedCable                               `json:"cable,omitempty"`
	ConnectedEndpoint     map[string]string                          `json:"connected_endpoint,omitempty"`
	ConnectedEndpointType *string                                    `json:"connected_endpoint_type,omitempty"`
	ConnectionStatus      *PowerPortConnectionStatusConnectionStatus `json:"connection_status,omitempty"`
	Description           *string                                    `json:"description,omitempty"`
	Device                NestedDevice                               `json:"device"`
	ID                    *int64                                     `json:"id,omitempty"`
	MaximumDraw           *int64                                     `json:"maximum_draw,omitempty"`
	Name                  string                                     `json:"name"`
	Tags                  []string                                   `json:"tags,omitempty"`
	Type                  *PowerPortTypeType                         `json:"type,omitempty"`
}
