from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3formparameterfillbehavior


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3FormParameter:
    default_value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValue' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityType' }})
    fill_behavior: Optional[googleclouddialogflowcxv3formparameterfillbehavior.GoogleCloudDialogflowCxV3FormParameterFillBehavior] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fillBehavior' }})
    is_list: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isList' }})
    redact: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redact' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    
