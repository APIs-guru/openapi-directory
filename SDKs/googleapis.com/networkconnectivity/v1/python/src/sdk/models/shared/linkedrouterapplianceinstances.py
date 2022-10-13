from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import routerapplianceinstance


@dataclass_json
@dataclass
class LinkedRouterApplianceInstances:
    instances: Optional[List[routerapplianceinstance.RouterApplianceInstance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instances' }})
    site_to_site_data_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteToSiteDataTransfer' }})
    
