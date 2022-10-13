from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AdTechnologyProviders:
    detected_gvl_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedGvlIds' }})
    detected_provider_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedProviderIds' }})
    unidentified_provider_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unidentifiedProviderDomains' }})
    
