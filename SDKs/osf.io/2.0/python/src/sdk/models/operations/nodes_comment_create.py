from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class NodesCommentCreatePathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class NodesCommentCreateCommentAttributes:
    can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_edit' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_modified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    has_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_children' }})
    has_report: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_report' }})
    is_abuse: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_abuse' }})
    is_ham: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_ham' }})
    modified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified' }})
    page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    

@dataclass_json
@dataclass
class NodesCommentCreateCommentLinks:
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class NodesCommentCreateCommentRelationships:
    node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node' }})
    replies: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replies' }})
    reports: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reports' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class NodesCommentCreateComment:
    attributes: Optional[NodesCommentCreateCommentAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: Optional[NodesCommentCreateCommentLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    relationships: Optional[NodesCommentCreateCommentRelationships] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class NodesCommentCreateRequest:
    path_params: NodesCommentCreatePathParams = field(default=None)
    request: NodesCommentCreateComment = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NodesCommentCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
