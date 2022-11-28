from dataclasses import dataclass, field
from enum import Enum

class GetNamesNameIDOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    KML = "kml"
    CSV = "csv"
    HTML = "html"


@dataclass
class GetNamesNameIDOutputFormatPathParams:
    name_id: int = field(metadata={'path_param': { 'field_name': 'nameId', 'style': 'simple', 'explode': False }})
    output_format: GetNamesNameIDOutputFormatOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNamesNameIDOutputFormatRequest:
    path_params: GetNamesNameIDOutputFormatPathParams = field()
    

@dataclass
class GetNamesNameIDOutputFormatResponse:
    content_type: str = field()
    status_code: int = field()
    
