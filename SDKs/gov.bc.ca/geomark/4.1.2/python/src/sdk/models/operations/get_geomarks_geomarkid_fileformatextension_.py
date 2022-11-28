from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnum(str, Enum):
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
class GetGeomarksGeomarkIDFileFormatExtensionPathParams:
    file_format_extension: GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnum = field(metadata={'path_param': { 'field_name': 'fileFormatExtension', 'style': 'simple', 'explode': False }})
    geomark_id: str = field(metadata={'path_param': { 'field_name': 'geomarkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeomarksGeomarkIDFileFormatExtensionQueryParams:
    srid: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'srid', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGeomarksGeomarkIDFileFormatExtensionRequest:
    path_params: GetGeomarksGeomarkIDFileFormatExtensionPathParams = field()
    query_params: GetGeomarksGeomarkIDFileFormatExtensionQueryParams = field()
    

@dataclass
class GetGeomarksGeomarkIDFileFormatExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    
