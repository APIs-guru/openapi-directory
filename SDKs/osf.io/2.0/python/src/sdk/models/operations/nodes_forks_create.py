from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class NodesForksCreatePathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    
class NodesForksCreateNodeAttributesCategoryEnum(str, Enum):
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
class NodesForksCreateNodeAttributes:
    category: NodesForksCreateNodeAttributesCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    collection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection' }})
    current_user_can_comment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_can_comment' }})
    current_user_permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_permissions' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_modified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    fork: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fork' }})
    forked_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forked_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    node_license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_license' }})
    preprint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preprint' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    registration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registration' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    template_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_from' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class NodesForksCreateNodeLinks:
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class NodesForksCreateNodeRelationships:
    affiliated_institutions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'affiliated_institutions' }})
    children: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'children' }})
    citation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'citation' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    contributors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributors' }})
    draft_registrations: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'draft_registrations' }})
    files: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    forked_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forked_from' }})
    forks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forks' }})
    identifiers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifiers' }})
    license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    linked_nodes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linked_nodes' }})
    logs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logs' }})
    node_links: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_links' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    preprints: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preprints' }})
    registrations: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrations' }})
    root: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root' }})
    template_node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_node' }})
    view_only_links: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view_only_links' }})
    wikis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wikis' }})
    

@dataclass_json
@dataclass
class NodesForksCreateNode:
    attributes: NodesForksCreateNodeAttributes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: Optional[NodesForksCreateNodeLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    relationships: Optional[NodesForksCreateNodeRelationships] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class NodesForksCreateRequest:
    path_params: NodesForksCreatePathParams = field(default=None)
    request: NodesForksCreateNode = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NodesForksCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
