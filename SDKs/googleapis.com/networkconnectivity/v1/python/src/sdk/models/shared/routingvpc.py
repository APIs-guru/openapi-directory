from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RoutingVpc:
    required_for_new_site_to_site_data_transfer_spokes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredForNewSiteToSiteDataTransferSpokes' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
