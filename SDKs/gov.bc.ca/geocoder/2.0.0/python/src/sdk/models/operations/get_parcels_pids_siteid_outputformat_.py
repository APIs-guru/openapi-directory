from dataclasses import dataclass, field
from typing import Enum

class GetParcelsPidsSiteIDOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclass
class GetParcelsPidsSiteIDOutputFormatPathParams:
    output_format: GetParcelsPidsSiteIDOutputFormatOutputFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    site_id: str = field(default=None, metadata={'path_param': { 'field_name': 'siteID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetParcelsPidsSiteIDOutputFormatRequest:
    path_params: GetParcelsPidsSiteIDOutputFormatPathParams = field(default=None)
    

@dataclass
class GetParcelsPidsSiteIDOutputFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
