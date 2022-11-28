import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OrderLineItemOrderLineItemStatusEnum {
    Cancelled = "Cancelled",
    Completed = "Completed",
    Confirmed = "Confirmed",
    Pending = "Pending",
    ProductionCompleted = "ProductionCompleted",
    ShipmentCompleted = "ShipmentCompleted"
}
export declare enum OrderLineItemQuantitiesQuantityContextEnum {
    Confirmed = "Confirmed",
    Invoiced = "Invoiced",
    Ordered = "Ordered",
    Produced = "Produced",
    Shipped = "Shipped"
}
export declare enum OrderLineItemQuantitiesQuantityTypeEnum {
    Area = "Area",
    Count = "Count",
    GrossWeight = "GrossWeight",
    Length = "Length",
    NetNetWeight = "NetNetWeight",
    NetWeight = "NetWeight",
    NominalWeight = "NominalWeight",
    TareWeight = "TareWeight"
}
export declare enum OrderLineItemQuantitiesQuantityUomEnum {
    Bale = "Bale",
    Box = "Box",
    Centimeter = "Centimeter",
    Decimeter = "Decimeter",
    Foot = "Foot",
    Gram = "Gram",
    HundredPounds = "HundredPounds",
    Inch = "Inch",
    Kilogram = "Kilogram",
    Kilometer = "Kilometer",
    Meter = "Meter",
    MetricTon = "MetricTon",
    Millimeter = "Millimeter",
    Package = "Package",
    PalletUnit = "PalletUnit",
    Piece = "Piece",
    Pound = "Pound",
    PulpUnit = "PulpUnit",
    Ream = "Ream",
    Reel = "Reel",
    Sheet = "Sheet",
    ShortTon = "ShortTon",
    Skid = "Skid",
    SquareDecimeter = "SquareDecimeter",
    SquareFoot = "SquareFoot",
    SquareInch = "SquareInch",
    SquareMeter = "SquareMeter",
    ThousandPieces = "ThousandPieces",
    ThousandSquareCentimeters = "ThousandSquareCentimeters",
    ThousandSquareFeet = "ThousandSquareFeet",
    ThousandSquareInches = "ThousandSquareInches",
    Yard = "Yard"
}
export declare class OrderLineItemQuantities extends SpeakeasyBase {
    quantityContext?: OrderLineItemQuantitiesQuantityContextEnum;
    quantityType?: OrderLineItemQuantitiesQuantityTypeEnum;
    quantityUom?: OrderLineItemQuantitiesQuantityUomEnum;
    quantityValue?: number;
}
export declare class OrderLineItem extends SpeakeasyBase {
    changeable?: boolean;
    id: string;
    orderLineItemNumber: number;
    orderLineItemStatus: OrderLineItemOrderLineItemStatusEnum;
    quantities?: OrderLineItemQuantities[];
}
