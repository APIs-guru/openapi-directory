from dataclasses import dataclass, field
from typing import Enum,Optional

class PostGeomarksCopyBufferCapEnum(str, Enum):
    ROUND = "ROUND"
    SQUARE = "SQUARE"
    FLAT = "FLAT"

class PostGeomarksCopyBufferJoinEnum(str, Enum):
    ROUND = "ROUND"
    MITRE = "MITRE"
    BEVEL = "BEVEL"

class PostGeomarksCopyResultFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    KML = "kml"
    KMZ = "kmz"
    SHP = "shp"
    SHPZ = "shpz"
    GEOJSON = "geojson"
    GML = "gml"
    WKT = "wkt"


@dataclass
class PostGeomarksCopyQueryParams:
    allow_overlap: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allowOverlap', 'style': 'form', 'explode': True }})
    buffer_cap: Optional[PostGeomarksCopyBufferCapEnum] = field(default=None, metadata={'query_param': { 'field_name': 'bufferCap', 'style': 'form', 'explode': True }})
    buffer_join: Optional[PostGeomarksCopyBufferJoinEnum] = field(default=None, metadata={'query_param': { 'field_name': 'bufferJoin', 'style': 'form', 'explode': True }})
    buffer_metres: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'bufferMetres', 'style': 'form', 'explode': True }})
    buffer_mitre_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'bufferMitreLimit', 'style': 'form', 'explode': True }})
    buffer_segments: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'bufferSegments', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    failure_redirect_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'failureRedirectUrl', 'style': 'form', 'explode': True }})
    geomark_url: str = field(default=None, metadata={'query_param': { 'field_name': 'geomarkUrl', 'style': 'form', 'explode': True }})
    redirect_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'redirectUrl', 'style': 'form', 'explode': True }})
    result_format: Optional[PostGeomarksCopyResultFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'resultFormat', 'style': 'form', 'explode': True }})
    

@dataclass
class PostGeomarksCopyRequest:
    query_params: PostGeomarksCopyQueryParams = field(default=None)
    

@dataclass
class PostGeomarksCopyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
