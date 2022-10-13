from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httprule
from . import customhttppattern


@dataclass_json
@dataclass
class HTTPRule:
    additional_bindings: Optional[List[httprule.HTTPRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalBindings' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    custom: Optional[customhttppattern.CustomHTTPPattern] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom' }})
    delete: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    get: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'get' }})
    patch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patch' }})
    post: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post' }})
    put: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'put' }})
    response_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseBody' }})
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    
