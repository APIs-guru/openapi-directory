from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OrderLineItemOrderLineItemStatusEnum(str, Enum):
    CANCELLED = "Cancelled"
    COMPLETED = "Completed"
    CONFIRMED = "Confirmed"
    PENDING = "Pending"
    PRODUCTION_COMPLETED = "ProductionCompleted"
    SHIPMENT_COMPLETED = "ShipmentCompleted"

class OrderLineItemQuantitiesQuantityContextEnum(str, Enum):
    CONFIRMED = "Confirmed"
    INVOICED = "Invoiced"
    ORDERED = "Ordered"
    PRODUCED = "Produced"
    SHIPPED = "Shipped"

class OrderLineItemQuantitiesQuantityTypeEnum(str, Enum):
    AREA = "Area"
    COUNT = "Count"
    GROSS_WEIGHT = "GrossWeight"
    LENGTH = "Length"
    NET_NET_WEIGHT = "NetNetWeight"
    NET_WEIGHT = "NetWeight"
    NOMINAL_WEIGHT = "NominalWeight"
    TARE_WEIGHT = "TareWeight"

class OrderLineItemQuantitiesQuantityUomEnum(str, Enum):
    BALE = "Bale"
    BOX = "Box"
    CENTIMETER = "Centimeter"
    DECIMETER = "Decimeter"
    FOOT = "Foot"
    GRAM = "Gram"
    HUNDRED_POUNDS = "HundredPounds"
    INCH = "Inch"
    KILOGRAM = "Kilogram"
    KILOMETER = "Kilometer"
    METER = "Meter"
    METRIC_TON = "MetricTon"
    MILLIMETER = "Millimeter"
    PACKAGE = "Package"
    PALLET_UNIT = "PalletUnit"
    PIECE = "Piece"
    POUND = "Pound"
    PULP_UNIT = "PulpUnit"
    REAM = "Ream"
    REEL = "Reel"
    SHEET = "Sheet"
    SHORT_TON = "ShortTon"
    SKID = "Skid"
    SQUARE_DECIMETER = "SquareDecimeter"
    SQUARE_FOOT = "SquareFoot"
    SQUARE_INCH = "SquareInch"
    SQUARE_METER = "SquareMeter"
    THOUSAND_PIECES = "ThousandPieces"
    THOUSAND_SQUARE_CENTIMETERS = "ThousandSquareCentimeters"
    THOUSAND_SQUARE_FEET = "ThousandSquareFeet"
    THOUSAND_SQUARE_INCHES = "ThousandSquareInches"
    YARD = "Yard"


@dataclass_json
@dataclass
class OrderLineItemQuantities:
    quantity_context: Optional[OrderLineItemQuantitiesQuantityContextEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityContext') }})
    quantity_type: Optional[OrderLineItemQuantitiesQuantityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityType') }})
    quantity_uom: Optional[OrderLineItemQuantitiesQuantityUomEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityUOM') }})
    quantity_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityValue') }})
    

@dataclass_json
@dataclass
class OrderLineItem:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    order_line_item_number: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderLineItemNumber') }})
    order_line_item_status: OrderLineItemOrderLineItemStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderLineItemStatus') }})
    changeable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeable') }})
    quantities: Optional[List[OrderLineItemQuantities]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantities') }})
    
