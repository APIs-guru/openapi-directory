from dataclasses import dataclass, field
from typing import Enum,Optional

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
    file_format_extension: GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'fileFormatExtension', 'style': 'simple', 'explode': False }})
    geomark_id: str = field(default=None, metadata={'path_param': { 'field_name': 'geomarkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionQueryParams:
    srid: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'srid', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionRequest:
    path_params: GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionPathParams = field(default=None)
    query_params: GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionQueryParams = field(default=None)
    

@dataclass
class GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
