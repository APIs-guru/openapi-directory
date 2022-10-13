from dataclasses import dataclass, field
from typing import Enum

class GetNamesNameIDOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    KML = "kml"
    CSV = "csv"
    HTML = "html"


@dataclass
class GetNamesNameIDOutputFormatPathParams:
    name_id: int = field(default=None, metadata={'path_param': { 'field_name': 'nameId', 'style': 'simple', 'explode': False }})
    output_format: GetNamesNameIDOutputFormatOutputFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNamesNameIDOutputFormatRequest:
    path_params: GetNamesNameIDOutputFormatPathParams = field(default=None)
    

@dataclass
class GetNamesNameIDOutputFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
