from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PreprintsCreatePreprintAttributes:
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_modified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_published: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_published', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    doi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doi' }})
    is_preprint_orphan: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_preprint_orphan' }})
    license_record: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license_record' }})
    subjects: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjects' }})
    

@dataclass_json
@dataclass
class PreprintsCreatePreprintLinks:
    doi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doi' }})
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    preprint_doi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preprint_doi' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class PreprintsCreatePreprintRelationships:
    citation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'citation' }})
    identifiers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifiers' }})
    license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    node: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node' }})
    primary_file: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_file' }})
    provider: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    

@dataclass_json
@dataclass
class PreprintsCreatePreprint:
    attributes: Optional[PreprintsCreatePreprintAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: Optional[PreprintsCreatePreprintLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    relationships: PreprintsCreatePreprintRelationships = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PreprintsCreateRequest:
    request: PreprintsCreatePreprint = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PreprintsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
