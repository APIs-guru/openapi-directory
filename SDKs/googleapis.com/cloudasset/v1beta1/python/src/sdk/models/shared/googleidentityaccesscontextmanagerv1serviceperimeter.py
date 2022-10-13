from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleidentityaccesscontextmanagerv1serviceperimeterconfig
from . import googleidentityaccesscontextmanagerv1serviceperimeterconfig

class GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum(str, Enum):
    PERIMETER_TYPE_REGULAR = "PERIMETER_TYPE_REGULAR"
    PERIMETER_TYPE_BRIDGE = "PERIMETER_TYPE_BRIDGE"


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1ServicePerimeter:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    perimeter_type: Optional[GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perimeterType' }})
    spec: Optional[googleidentityaccesscontextmanagerv1serviceperimeterconfig.GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    status: Optional[googleidentityaccesscontextmanagerv1serviceperimeterconfig.GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    use_explicit_dry_run_spec: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useExplicitDryRunSpec' }})
    
