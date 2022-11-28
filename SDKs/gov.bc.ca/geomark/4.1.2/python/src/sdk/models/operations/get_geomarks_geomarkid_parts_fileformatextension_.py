from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnum(str, Enum):
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
class GetGeomarksGeomarkIDPartsFileFormatExtensionPathParams:
    file_format_extension: GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnum = field(metadata={'path_param': { 'field_name': 'fileFormatExtension', 'style': 'simple', 'explode': False }})
    geomark_id: str = field(metadata={'path_param': { 'field_name': 'geomarkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeomarksGeomarkIDPartsFileFormatExtensionQueryParams:
    srid: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'srid', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGeomarksGeomarkIDPartsFileFormatExtensionRequest:
    path_params: GetGeomarksGeomarkIDPartsFileFormatExtensionPathParams = field()
    query_params: GetGeomarksGeomarkIDPartsFileFormatExtensionQueryParams = field()
    

@dataclass
class GetGeomarksGeomarkIDPartsFileFormatExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    
