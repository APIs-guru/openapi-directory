from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class NodesDraftRegistrationsCreatePathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class NodesDraftRegistrationsCreateRequestBodyAttributesAttributes:
    datetime_initiated: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datetime_initiated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    datetime_updated: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datetime_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    registration_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registration_metadata' }})
    registration_supplement: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registration_supplement' }})
    

@dataclass_json
@dataclass
class NodesDraftRegistrationsCreateRequestBodyLinksLinks:
    html: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    

@dataclass_json
@dataclass
class NodesDraftRegistrationsCreateRequestBodyRelationshipsRelationships:
    branched_from: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branched_from' }})
    initiator: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initiator' }})
    registration_schema: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registration_schema' }})
    

@dataclass_json
@dataclass
class NodesDraftRegistrationsCreateRequestBodyDraftRegistration:
    attributes: NodesDraftRegistrationsCreateRequestBodyAttributesAttributes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: NodesDraftRegistrationsCreateRequestBodyLinksLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    relationships: NodesDraftRegistrationsCreateRequestBodyRelationshipsRelationships = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class NodesDraftRegistrationsCreateRequest:
    path_params: NodesDraftRegistrationsCreatePathParams = field(default=None)
    request: NodesDraftRegistrationsCreateRequestBodyDraftRegistration = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NodesDraftRegistrationsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
