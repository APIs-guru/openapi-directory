from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnum(str, Enum):
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
class GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionPathParams:
    file_format_extension: GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnum = field(metadata={'path_param': { 'field_name': 'fileFormatExtension', 'style': 'simple', 'explode': False }})
    geomark_id: str = field(metadata={'path_param': { 'field_name': 'geomarkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionQueryParams:
    srid: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'srid', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionRequest:
    path_params: GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionPathParams = field()
    query_params: GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionQueryParams = field()
    

@dataclass
class GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    
