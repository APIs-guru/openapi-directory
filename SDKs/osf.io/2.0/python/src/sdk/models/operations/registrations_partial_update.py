from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class RegistrationsPartialUpdatePathParams:
    registration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    
class RegistrationsPartialUpdateRegistrationAttributesCategoryEnum(str, Enum):
    ANALYSIS = "analysis"
    COMMUNICATION = "communication"
    DATA = "data"
    HYPOTHESIS = "hypothesis"
    INSTRUMENTATION = "instrumentation"
    METHODS_AND_MEASURES = "methods and measures"
    PROCEDURE = "procedure"
    PROJECT = "project"
    SOFTWARE = "software"
    OTHER = "other"


@dataclass_json
@dataclass
class RegistrationsPartialUpdateRegistrationAttributes:
    category: Optional[RegistrationsPartialUpdateRegistrationAttributesCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    collection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection' }})
    current_user_can_comment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_can_comment' }})
    current_user_permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_permissions' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_modified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_registered: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_registered', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_withdrawn: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_withdrawn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    embargo_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embargo_end_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fork: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fork' }})
    node_license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_license' }})
    pending_embargo_approval: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending_embargo_approval' }})
    pending_registration_approval: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending_registration_approval' }})
    pending_withdrawal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending_withdrawal' }})
    preprint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preprint' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    registered_meta: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registered_meta' }})
    registration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registration' }})
    registration_supplement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registration_supplement' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    template_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_from' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    withdrawal_justification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'withdrawal_justification' }})
    withdrawn: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'withdrawn' }})
    

@dataclass_json
@dataclass
class RegistrationsPartialUpdateRegistrationLinks:
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class RegistrationsPartialUpdateRegistrationRelationships:
    affiliated_institutions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'affiliated_institutions' }})
    children: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'children' }})
    citation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'citation' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    contributors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributors' }})
    files: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    forks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forks' }})
    identifiers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifiers' }})
    linked_nodes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linked_nodes' }})
    logs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logs' }})
    node_links: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_links' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    registered_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registered_by' }})
    registered_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registered_from' }})
    registration_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registration_schema' }})
    root: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root' }})
    view_only_links: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view_only_links' }})
    wikis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wikis' }})
    

@dataclass_json
@dataclass
class RegistrationsPartialUpdateRegistration:
    attributes: RegistrationsPartialUpdateRegistrationAttributes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: RegistrationsPartialUpdateRegistrationLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    relationships: RegistrationsPartialUpdateRegistrationRelationships = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class RegistrationsPartialUpdateRequest:
    path_params: RegistrationsPartialUpdatePathParams = field(default=None)
    request: RegistrationsPartialUpdateRegistration = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistrationsPartialUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
