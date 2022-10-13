from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ExtrasExportTemplatesListQueryParams:
    content_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'content_type', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ExtrasExportTemplatesListRequest:
    query_params: ExtrasExportTemplatesListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ExtrasExportTemplatesList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.ExportTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class ExtrasExportTemplatesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    extras_export_templates_list_200_application_json_object: Optional[ExtrasExportTemplatesList200ApplicationJSON] = field(default=None)
    
