from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetValuesForVariablesFormatEnum(str, Enum):
    GOOGLE = "google"


@dataclass
class GetValuesForVariablesQueryParams:
    variable: str = field(metadata={'query_param': { 'field_name': 'variable', 'style': 'form', 'explode': True }})
    app_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    describe: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'describe', 'style': 'form', 'explode': True }})
    entity_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    forecast: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'forecast', 'style': 'form', 'explode': True }})
    format: Optional[GetValuesForVariablesFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetValuesForVariablesHeaders:
    x_app_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetValuesForVariablesRequest:
    headers: GetValuesForVariablesHeaders = field()
    query_params: GetValuesForVariablesQueryParams = field()
    

@dataclass
class GetValuesForVariablesResponse:
    content_type: str = field()
    status_code: int = field()
    
