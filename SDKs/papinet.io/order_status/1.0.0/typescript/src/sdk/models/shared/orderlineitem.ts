import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OrderLineItemOrderLineItemStatusEnum {
    Cancelled = "Cancelled",
    Completed = "Completed",
    Confirmed = "Confirmed",
    Pending = "Pending",
    ProductionCompleted = "ProductionCompleted",
    ShipmentCompleted = "ShipmentCompleted"
}

export enum OrderLineItemQuantitiesQuantityContextEnum {
    Confirmed = "Confirmed",
    Invoiced = "Invoiced",
    Ordered = "Ordered",
    Produced = "Produced",
    Shipped = "Shipped"
}

export enum OrderLineItemQuantitiesQuantityTypeEnum {
    Area = "Area",
    Count = "Count",
    GrossWeight = "GrossWeight",
    Length = "Length",
    NetNetWeight = "NetNetWeight",
    NetWeight = "NetWeight",
    NominalWeight = "NominalWeight",
    TareWeight = "TareWeight"
}

export enum OrderLineItemQuantitiesQuantityUomEnum {
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


export class OrderLineItemQuantities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quantityContext" })
  quantityContext?: OrderLineItemQuantitiesQuantityContextEnum;

  @SpeakeasyMetadata({ data: "json, name=quantityType" })
  quantityType?: OrderLineItemQuantitiesQuantityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=quantityUOM" })
  quantityUom?: OrderLineItemQuantitiesQuantityUomEnum;

  @SpeakeasyMetadata({ data: "json, name=quantityValue" })
  quantityValue?: number;
}


export class OrderLineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeable" })
  changeable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=orderLineItemNumber" })
  orderLineItemNumber: number;

  @SpeakeasyMetadata({ data: "json, name=orderLineItemStatus" })
  orderLineItemStatus: OrderLineItemOrderLineItemStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=quantities", elemType: OrderLineItemQuantities })
  quantities?: OrderLineItemQuantities[];
}
