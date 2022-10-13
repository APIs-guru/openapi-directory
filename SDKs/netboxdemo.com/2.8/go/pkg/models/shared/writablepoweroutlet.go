package shared

type WritablePowerOutletFeedLegFeedLegEnum string

const (
	WritablePowerOutletFeedLegFeedLegEnumA WritablePowerOutletFeedLegFeedLegEnum = "A"
	WritablePowerOutletFeedLegFeedLegEnumB WritablePowerOutletFeedLegFeedLegEnum = "B"
	WritablePowerOutletFeedLegFeedLegEnumC WritablePowerOutletFeedLegFeedLegEnum = "C"
)

type WritablePowerOutletTypeTypeEnum string

const (
	WritablePowerOutletTypeTypeEnumIec60320C5     WritablePowerOutletTypeTypeEnum = "iec-60320-c5"
	WritablePowerOutletTypeTypeEnumIec60320C7     WritablePowerOutletTypeTypeEnum = "iec-60320-c7"
	WritablePowerOutletTypeTypeEnumIec60320C13    WritablePowerOutletTypeTypeEnum = "iec-60320-c13"
	WritablePowerOutletTypeTypeEnumIec60320C15    WritablePowerOutletTypeTypeEnum = "iec-60320-c15"
	WritablePowerOutletTypeTypeEnumIec60320C19    WritablePowerOutletTypeTypeEnum = "iec-60320-c19"
	WritablePowerOutletTypeTypeEnumIec60309Pne4h  WritablePowerOutletTypeTypeEnum = "iec-60309-p-n-e-4h"
	WritablePowerOutletTypeTypeEnumIec60309Pne6h  WritablePowerOutletTypeTypeEnum = "iec-60309-p-n-e-6h"
	WritablePowerOutletTypeTypeEnumIec60309Pne9h  WritablePowerOutletTypeTypeEnum = "iec-60309-p-n-e-9h"
	WritablePowerOutletTypeTypeEnumIec603092pE4h  WritablePowerOutletTypeTypeEnum = "iec-60309-2p-e-4h"
	WritablePowerOutletTypeTypeEnumIec603092pE6h  WritablePowerOutletTypeTypeEnum = "iec-60309-2p-e-6h"
	WritablePowerOutletTypeTypeEnumIec603092pE9h  WritablePowerOutletTypeTypeEnum = "iec-60309-2p-e-9h"
	WritablePowerOutletTypeTypeEnumIec603093pE4h  WritablePowerOutletTypeTypeEnum = "iec-60309-3p-e-4h"
	WritablePowerOutletTypeTypeEnumIec603093pE6h  WritablePowerOutletTypeTypeEnum = "iec-60309-3p-e-6h"
	WritablePowerOutletTypeTypeEnumIec603093pE9h  WritablePowerOutletTypeTypeEnum = "iec-60309-3p-e-9h"
	WritablePowerOutletTypeTypeEnumIec603093pNe4h WritablePowerOutletTypeTypeEnum = "iec-60309-3p-n-e-4h"
	WritablePowerOutletTypeTypeEnumIec603093pNe6h WritablePowerOutletTypeTypeEnum = "iec-60309-3p-n-e-6h"
	WritablePowerOutletTypeTypeEnumIec603093pNe9h WritablePowerOutletTypeTypeEnum = "iec-60309-3p-n-e-9h"
	WritablePowerOutletTypeTypeEnumNema115r       WritablePowerOutletTypeTypeEnum = "nema-1-15r"
	WritablePowerOutletTypeTypeEnumNema515r       WritablePowerOutletTypeTypeEnum = "nema-5-15r"
	WritablePowerOutletTypeTypeEnumNema520r       WritablePowerOutletTypeTypeEnum = "nema-5-20r"
	WritablePowerOutletTypeTypeEnumNema530r       WritablePowerOutletTypeTypeEnum = "nema-5-30r"
	WritablePowerOutletTypeTypeEnumNema550r       WritablePowerOutletTypeTypeEnum = "nema-5-50r"
	WritablePowerOutletTypeTypeEnumNema615r       WritablePowerOutletTypeTypeEnum = "nema-6-15r"
	WritablePowerOutletTypeTypeEnumNema620r       WritablePowerOutletTypeTypeEnum = "nema-6-20r"
	WritablePowerOutletTypeTypeEnumNema630r       WritablePowerOutletTypeTypeEnum = "nema-6-30r"
	WritablePowerOutletTypeTypeEnumNema650r       WritablePowerOutletTypeTypeEnum = "nema-6-50r"
	WritablePowerOutletTypeTypeEnumNema1030r      WritablePowerOutletTypeTypeEnum = "nema-10-30r"
	WritablePowerOutletTypeTypeEnumNema1050r      WritablePowerOutletTypeTypeEnum = "nema-10-50r"
	WritablePowerOutletTypeTypeEnumNema1420r      WritablePowerOutletTypeTypeEnum = "nema-14-20r"
	WritablePowerOutletTypeTypeEnumNema1430r      WritablePowerOutletTypeTypeEnum = "nema-14-30r"
	WritablePowerOutletTypeTypeEnumNema1450r      WritablePowerOutletTypeTypeEnum = "nema-14-50r"
	WritablePowerOutletTypeTypeEnumNema1460r      WritablePowerOutletTypeTypeEnum = "nema-14-60r"
	WritablePowerOutletTypeTypeEnumNemaL115r      WritablePowerOutletTypeTypeEnum = "nema-l1-15r"
	WritablePowerOutletTypeTypeEnumNemaL515r      WritablePowerOutletTypeTypeEnum = "nema-l5-15r"
	WritablePowerOutletTypeTypeEnumNemaL520r      WritablePowerOutletTypeTypeEnum = "nema-l5-20r"
	WritablePowerOutletTypeTypeEnumNemaL530r      WritablePowerOutletTypeTypeEnum = "nema-l5-30r"
	WritablePowerOutletTypeTypeEnumNemaL550r      WritablePowerOutletTypeTypeEnum = "nema-l5-50r"
	WritablePowerOutletTypeTypeEnumNemaL615r      WritablePowerOutletTypeTypeEnum = "nema-l6-15r"
	WritablePowerOutletTypeTypeEnumNemaL620r      WritablePowerOutletTypeTypeEnum = "nema-l6-20r"
	WritablePowerOutletTypeTypeEnumNemaL630r      WritablePowerOutletTypeTypeEnum = "nema-l6-30r"
	WritablePowerOutletTypeTypeEnumNemaL650r      WritablePowerOutletTypeTypeEnum = "nema-l6-50r"
	WritablePowerOutletTypeTypeEnumNemaL1030r     WritablePowerOutletTypeTypeEnum = "nema-l10-30r"
	WritablePowerOutletTypeTypeEnumNemaL1420r     WritablePowerOutletTypeTypeEnum = "nema-l14-20r"
	WritablePowerOutletTypeTypeEnumNemaL1430r     WritablePowerOutletTypeTypeEnum = "nema-l14-30r"
	WritablePowerOutletTypeTypeEnumNemaL1450r     WritablePowerOutletTypeTypeEnum = "nema-l14-50r"
	WritablePowerOutletTypeTypeEnumNemaL1460r     WritablePowerOutletTypeTypeEnum = "nema-l14-60r"
	WritablePowerOutletTypeTypeEnumNemaL2120r     WritablePowerOutletTypeTypeEnum = "nema-l21-20r"
	WritablePowerOutletTypeTypeEnumNemaL2130r     WritablePowerOutletTypeTypeEnum = "nema-l21-30r"
	WritablePowerOutletTypeTypeEnumCs6360C        WritablePowerOutletTypeTypeEnum = "CS6360C"
	WritablePowerOutletTypeTypeEnumCs6364C        WritablePowerOutletTypeTypeEnum = "CS6364C"
	WritablePowerOutletTypeTypeEnumCs8164C        WritablePowerOutletTypeTypeEnum = "CS8164C"
	WritablePowerOutletTypeTypeEnumCs8264C        WritablePowerOutletTypeTypeEnum = "CS8264C"
	WritablePowerOutletTypeTypeEnumCs8364C        WritablePowerOutletTypeTypeEnum = "CS8364C"
	WritablePowerOutletTypeTypeEnumCs8464C        WritablePowerOutletTypeTypeEnum = "CS8464C"
	WritablePowerOutletTypeTypeEnumItaE           WritablePowerOutletTypeTypeEnum = "ita-e"
	WritablePowerOutletTypeTypeEnumItaF           WritablePowerOutletTypeTypeEnum = "ita-f"
	WritablePowerOutletTypeTypeEnumItaG           WritablePowerOutletTypeTypeEnum = "ita-g"
	WritablePowerOutletTypeTypeEnumItaH           WritablePowerOutletTypeTypeEnum = "ita-h"
	WritablePowerOutletTypeTypeEnumItaI           WritablePowerOutletTypeTypeEnum = "ita-i"
	WritablePowerOutletTypeTypeEnumItaJ           WritablePowerOutletTypeTypeEnum = "ita-j"
	WritablePowerOutletTypeTypeEnumItaK           WritablePowerOutletTypeTypeEnum = "ita-k"
	WritablePowerOutletTypeTypeEnumItaL           WritablePowerOutletTypeTypeEnum = "ita-l"
	WritablePowerOutletTypeTypeEnumItaM           WritablePowerOutletTypeTypeEnum = "ita-m"
	WritablePowerOutletTypeTypeEnumItaN           WritablePowerOutletTypeTypeEnum = "ita-n"
	WritablePowerOutletTypeTypeEnumItaO           WritablePowerOutletTypeTypeEnum = "ita-o"
	WritablePowerOutletTypeTypeEnumHdotCx         WritablePowerOutletTypeTypeEnum = "hdot-cx"
)

type WritablePowerOutlet struct {
	Cable                 *NestedCable                           `json:"cable"`
	ConnectedEndpoint     map[string]string                      `json:"connected_endpoint"`
	ConnectedEndpointType *string                                `json:"connected_endpoint_type"`
	ConnectionStatus      *bool                                  `json:"connection_status"`
	Description           *string                                `json:"description"`
	Device                int64                                  `json:"device"`
	FeedLeg               *WritablePowerOutletFeedLegFeedLegEnum `json:"feed_leg"`
	ID                    *int64                                 `json:"id"`
	Name                  string                                 `json:"name"`
	PowerPort             *int64                                 `json:"power_port"`
	Tags                  []string                               `json:"tags"`
	Type                  *WritablePowerOutletTypeTypeEnum       `json:"type"`
}
