from dataclasses import dataclass, field
from typing import Enum,Optional

class GetGeomarksGeomarkIDPointFileFormatExtensionFileFormatExtensionEnum(str, Enum):
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
class GetGeomarksGeomarkIDPointFileFormatExtensionPathParams:
    file_format_extension: GetGeomarksGeomarkIDPointFileFormatExtensionFileFormatExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'fileFormatExtension', 'style': 'simple', 'explode': False }})
    geomark_id: str = field(default=None, metadata={'path_param': { 'field_name': 'geomarkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeomarksGeomarkIDPointFileFormatExtensionQueryParams:
    srid: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'srid', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGeomarksGeomarkIDPointFileFormatExtensionRequest:
    path_params: GetGeomarksGeomarkIDPointFileFormatExtensionPathParams = field(default=None)
    query_params: GetGeomarksGeomarkIDPointFileFormatExtensionQueryParams = field(default=None)
    

@dataclass
class GetGeomarksGeomarkIDPointFileFormatExtensionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
