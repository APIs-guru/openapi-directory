from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deliverypipeline


@dataclass_json
@dataclass
class ListDeliveryPipelinesResponse:
    delivery_pipelines: Optional[List[deliverypipeline.DeliveryPipeline]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryPipelines' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
