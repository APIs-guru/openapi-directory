from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PortfolioActivationsMetadata:
    root_content_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootContentId' }})
    

@dataclass_json
@dataclass
class PortfolioActivations:
    content_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentId' }})
    end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    learners_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnersCount' }})
    metadata: Optional[PortfolioActivationsMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
