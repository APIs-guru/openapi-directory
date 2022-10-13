from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import installation


@dataclass_json
@dataclass
class GrafeasV1beta1PackageDetails:
    installation: Optional[installation.Installation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installation' }})
    
