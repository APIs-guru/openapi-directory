from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import projectparameterdetails


@dataclass_json
@dataclass
class ProjectsRow:
    bbox: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bbox' }})
    countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countries' }})
    entity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity' }})
    first_updated: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_analysis: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAnalysis' }})
    is_mobile: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isMobile' }})
    last_updated: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationIds' }})
    locations: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    measurements: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurements' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parameters: List[projectparameterdetails.ProjectParameterDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    sensor_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sensorType' }})
    sources: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    subtitle: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitle' }})
    
