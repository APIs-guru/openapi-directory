package shared

type OrderLineItemOrderLineItemStatusEnum string

const (
	OrderLineItemOrderLineItemStatusEnumCancelled           OrderLineItemOrderLineItemStatusEnum = "Cancelled"
	OrderLineItemOrderLineItemStatusEnumCompleted           OrderLineItemOrderLineItemStatusEnum = "Completed"
	OrderLineItemOrderLineItemStatusEnumConfirmed           OrderLineItemOrderLineItemStatusEnum = "Confirmed"
	OrderLineItemOrderLineItemStatusEnumPending             OrderLineItemOrderLineItemStatusEnum = "Pending"
	OrderLineItemOrderLineItemStatusEnumProductionCompleted OrderLineItemOrderLineItemStatusEnum = "ProductionCompleted"
	OrderLineItemOrderLineItemStatusEnumShipmentCompleted   OrderLineItemOrderLineItemStatusEnum = "ShipmentCompleted"
)

type OrderLineItemQuantitiesQuantityContextEnum string

const (
	OrderLineItemQuantitiesQuantityContextEnumConfirmed OrderLineItemQuantitiesQuantityContextEnum = "Confirmed"
	OrderLineItemQuantitiesQuantityContextEnumInvoiced  OrderLineItemQuantitiesQuantityContextEnum = "Invoiced"
	OrderLineItemQuantitiesQuantityContextEnumOrdered   OrderLineItemQuantitiesQuantityContextEnum = "Ordered"
	OrderLineItemQuantitiesQuantityContextEnumProduced  OrderLineItemQuantitiesQuantityContextEnum = "Produced"
	OrderLineItemQuantitiesQuantityContextEnumShipped   OrderLineItemQuantitiesQuantityContextEnum = "Shipped"
)

type OrderLineItemQuantitiesQuantityTypeEnum string

const (
	OrderLineItemQuantitiesQuantityTypeEnumArea          OrderLineItemQuantitiesQuantityTypeEnum = "Area"
	OrderLineItemQuantitiesQuantityTypeEnumCount         OrderLineItemQuantitiesQuantityTypeEnum = "Count"
	OrderLineItemQuantitiesQuantityTypeEnumGrossWeight   OrderLineItemQuantitiesQuantityTypeEnum = "GrossWeight"
	OrderLineItemQuantitiesQuantityTypeEnumLength        OrderLineItemQuantitiesQuantityTypeEnum = "Length"
	OrderLineItemQuantitiesQuantityTypeEnumNetNetWeight  OrderLineItemQuantitiesQuantityTypeEnum = "NetNetWeight"
	OrderLineItemQuantitiesQuantityTypeEnumNetWeight     OrderLineItemQuantitiesQuantityTypeEnum = "NetWeight"
	OrderLineItemQuantitiesQuantityTypeEnumNominalWeight OrderLineItemQuantitiesQuantityTypeEnum = "NominalWeight"
	OrderLineItemQuantitiesQuantityTypeEnumTareWeight    OrderLineItemQuantitiesQuantityTypeEnum = "TareWeight"
)

type OrderLineItemQuantitiesQuantityUomEnum string

const (
	OrderLineItemQuantitiesQuantityUomEnumBale                      OrderLineItemQuantitiesQuantityUomEnum = "Bale"
	OrderLineItemQuantitiesQuantityUomEnumBox                       OrderLineItemQuantitiesQuantityUomEnum = "Box"
	OrderLineItemQuantitiesQuantityUomEnumCentimeter                OrderLineItemQuantitiesQuantityUomEnum = "Centimeter"
	OrderLineItemQuantitiesQuantityUomEnumDecimeter                 OrderLineItemQuantitiesQuantityUomEnum = "Decimeter"
	OrderLineItemQuantitiesQuantityUomEnumFoot                      OrderLineItemQuantitiesQuantityUomEnum = "Foot"
	OrderLineItemQuantitiesQuantityUomEnumGram                      OrderLineItemQuantitiesQuantityUomEnum = "Gram"
	OrderLineItemQuantitiesQuantityUomEnumHundredPounds             OrderLineItemQuantitiesQuantityUomEnum = "HundredPounds"
	OrderLineItemQuantitiesQuantityUomEnumInch                      OrderLineItemQuantitiesQuantityUomEnum = "Inch"
	OrderLineItemQuantitiesQuantityUomEnumKilogram                  OrderLineItemQuantitiesQuantityUomEnum = "Kilogram"
	OrderLineItemQuantitiesQuantityUomEnumKilometer                 OrderLineItemQuantitiesQuantityUomEnum = "Kilometer"
	OrderLineItemQuantitiesQuantityUomEnumMeter                     OrderLineItemQuantitiesQuantityUomEnum = "Meter"
	OrderLineItemQuantitiesQuantityUomEnumMetricTon                 OrderLineItemQuantitiesQuantityUomEnum = "MetricTon"
	OrderLineItemQuantitiesQuantityUomEnumMillimeter                OrderLineItemQuantitiesQuantityUomEnum = "Millimeter"
	OrderLineItemQuantitiesQuantityUomEnumPackage                   OrderLineItemQuantitiesQuantityUomEnum = "Package"
	OrderLineItemQuantitiesQuantityUomEnumPalletUnit                OrderLineItemQuantitiesQuantityUomEnum = "PalletUnit"
	OrderLineItemQuantitiesQuantityUomEnumPiece                     OrderLineItemQuantitiesQuantityUomEnum = "Piece"
	OrderLineItemQuantitiesQuantityUomEnumPound                     OrderLineItemQuantitiesQuantityUomEnum = "Pound"
	OrderLineItemQuantitiesQuantityUomEnumPulpUnit                  OrderLineItemQuantitiesQuantityUomEnum = "PulpUnit"
	OrderLineItemQuantitiesQuantityUomEnumReam                      OrderLineItemQuantitiesQuantityUomEnum = "Ream"
	OrderLineItemQuantitiesQuantityUomEnumReel                      OrderLineItemQuantitiesQuantityUomEnum = "Reel"
	OrderLineItemQuantitiesQuantityUomEnumSheet                     OrderLineItemQuantitiesQuantityUomEnum = "Sheet"
	OrderLineItemQuantitiesQuantityUomEnumShortTon                  OrderLineItemQuantitiesQuantityUomEnum = "ShortTon"
	OrderLineItemQuantitiesQuantityUomEnumSkid                      OrderLineItemQuantitiesQuantityUomEnum = "Skid"
	OrderLineItemQuantitiesQuantityUomEnumSquareDecimeter           OrderLineItemQuantitiesQuantityUomEnum = "SquareDecimeter"
	OrderLineItemQuantitiesQuantityUomEnumSquareFoot                OrderLineItemQuantitiesQuantityUomEnum = "SquareFoot"
	OrderLineItemQuantitiesQuantityUomEnumSquareInch                OrderLineItemQuantitiesQuantityUomEnum = "SquareInch"
	OrderLineItemQuantitiesQuantityUomEnumSquareMeter               OrderLineItemQuantitiesQuantityUomEnum = "SquareMeter"
	OrderLineItemQuantitiesQuantityUomEnumThousandPieces            OrderLineItemQuantitiesQuantityUomEnum = "ThousandPieces"
	OrderLineItemQuantitiesQuantityUomEnumThousandSquareCentimeters OrderLineItemQuantitiesQuantityUomEnum = "ThousandSquareCentimeters"
	OrderLineItemQuantitiesQuantityUomEnumThousandSquareFeet        OrderLineItemQuantitiesQuantityUomEnum = "ThousandSquareFeet"
	OrderLineItemQuantitiesQuantityUomEnumThousandSquareInches      OrderLineItemQuantitiesQuantityUomEnum = "ThousandSquareInches"
	OrderLineItemQuantitiesQuantityUomEnumYard                      OrderLineItemQuantitiesQuantityUomEnum = "Yard"
)

type OrderLineItemQuantities struct {
	QuantityContext *OrderLineItemQuantitiesQuantityContextEnum `json:"quantityContext,omitempty"`
	QuantityType    *OrderLineItemQuantitiesQuantityTypeEnum    `json:"quantityType,omitempty"`
	QuantityUom     *OrderLineItemQuantitiesQuantityUomEnum     `json:"quantityUOM,omitempty"`
	QuantityValue   *float64                                    `json:"quantityValue,omitempty"`
}

type OrderLineItem struct {
	Changeable          *bool                                `json:"changeable,omitempty"`
	ID                  string                               `json:"id"`
	OrderLineItemNumber float64                              `json:"orderLineItemNumber"`
	OrderLineItemStatus OrderLineItemOrderLineItemStatusEnum `json:"orderLineItemStatus"`
	Quantities          []OrderLineItemQuantities            `json:"quantities,omitempty"`
}
