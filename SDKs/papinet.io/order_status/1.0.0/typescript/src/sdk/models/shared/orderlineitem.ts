import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum OrderLineItemOrderLineItemStatusEnum {
    Cancelled = "Cancelled"
,    Completed = "Completed"
,    Confirmed = "Confirmed"
,    Pending = "Pending"
,    ProductionCompleted = "ProductionCompleted"
,    ShipmentCompleted = "ShipmentCompleted"
}

export enum OrderLineItemQuantitiesQuantityContextEnum {
    Confirmed = "Confirmed"
,    Invoiced = "Invoiced"
,    Ordered = "Ordered"
,    Produced = "Produced"
,    Shipped = "Shipped"
}

export enum OrderLineItemQuantitiesQuantityTypeEnum {
    Area = "Area"
,    Count = "Count"
,    GrossWeight = "GrossWeight"
,    Length = "Length"
,    NetNetWeight = "NetNetWeight"
,    NetWeight = "NetWeight"
,    NominalWeight = "NominalWeight"
,    TareWeight = "TareWeight"
}

export enum OrderLineItemQuantitiesQuantityUomEnum {
    Bale = "Bale"
,    Box = "Box"
,    Centimeter = "Centimeter"
,    Decimeter = "Decimeter"
,    Foot = "Foot"
,    Gram = "Gram"
,    HundredPounds = "HundredPounds"
,    Inch = "Inch"
,    Kilogram = "Kilogram"
,    Kilometer = "Kilometer"
,    Meter = "Meter"
,    MetricTon = "MetricTon"
,    Millimeter = "Millimeter"
,    Package = "Package"
,    PalletUnit = "PalletUnit"
,    Piece = "Piece"
,    Pound = "Pound"
,    PulpUnit = "PulpUnit"
,    Ream = "Ream"
,    Reel = "Reel"
,    Sheet = "Sheet"
,    ShortTon = "ShortTon"
,    Skid = "Skid"
,    SquareDecimeter = "SquareDecimeter"
,    SquareFoot = "SquareFoot"
,    SquareInch = "SquareInch"
,    SquareMeter = "SquareMeter"
,    ThousandPieces = "ThousandPieces"
,    ThousandSquareCentimeters = "ThousandSquareCentimeters"
,    ThousandSquareFeet = "ThousandSquareFeet"
,    ThousandSquareInches = "ThousandSquareInches"
,    Yard = "Yard"
}


export class OrderLineItemQuantities extends SpeakeasyBase {
  @Metadata({ data: "json, name=quantityContext" })
  quantityContext?: OrderLineItemQuantitiesQuantityContextEnum;

  @Metadata({ data: "json, name=quantityType" })
  quantityType?: OrderLineItemQuantitiesQuantityTypeEnum;

  @Metadata({ data: "json, name=quantityUOM" })
  quantityUom?: OrderLineItemQuantitiesQuantityUomEnum;

  @Metadata({ data: "json, name=quantityValue" })
  quantityValue?: number;
}


export class OrderLineItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeable" })
  changeable?: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=orderLineItemNumber" })
  orderLineItemNumber: number;

  @Metadata({ data: "json, name=orderLineItemStatus" })
  orderLineItemStatus: OrderLineItemOrderLineItemStatusEnum;

  @Metadata({ data: "json, name=quantities", elemType: shared.OrderLineItemQuantities })
  quantities?: OrderLineItemQuantities[];
}
