from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Availability:
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    agency_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agencyId' }})
    availability_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityTimestamp' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    segmentation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentationId' }})
    segmentation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentationName' }})
    segmentation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentationType' }})
    
