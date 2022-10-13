from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import shipmenttrackinginfo


@dataclass_json
@dataclass
class ReturnShipment:
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate' }})
    delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryDate' }})
    return_method_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnMethodType' }})
    shipment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentId' }})
    shipment_tracking_infos: Optional[List[shipmenttrackinginfo.ShipmentTrackingInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentTrackingInfos' }})
    shipping_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingDate' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
