from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAssociationFilterQueryParams:
    datasource: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'datasource', 'style': 'form', 'explode': True }})
    datastructure: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'datastructure', 'style': 'form', 'explode': True }})
    datatype: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'datatype', 'style': 'form', 'explode': True }})
    direct: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'direct', 'style': 'form', 'explode': True }})
    disease: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'disease', 'style': 'form', 'explode': True }})
    facets: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'facets', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    format: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    from_: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    pathway: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pathway', 'style': 'form', 'explode': True }})
    scorevalue_max: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'scorevalue_max', 'style': 'form', 'explode': True }})
    scorevalue_min: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'scorevalue_min', 'style': 'form', 'explode': True }})
    scorevalue_types: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'scorevalue_types', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    size: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    target: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'target', 'style': 'form', 'explode': True }})
    target_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'target_class', 'style': 'form', 'explode': True }})
    therapeutic_area: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'therapeutic_area', 'style': 'form', 'explode': True }})
    uniprotkw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uniprotkw', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAssociationFilterRequest:
    query_params: GetAssociationFilterQueryParams = field()
    

@dataclass
class GetAssociationFilterResponse:
    content_type: str = field()
    status_code: int = field()
    
