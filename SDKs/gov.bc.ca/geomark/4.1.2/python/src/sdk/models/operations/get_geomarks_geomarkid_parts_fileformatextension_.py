from dataclasses import dataclass, field
from typing import Enum,Optional

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
    file_format_extension: GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'fileFormatExtension', 'style': 'simple', 'explode': False }})
    geomark_id: str = field(default=None, metadata={'path_param': { 'field_name': 'geomarkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeomarksGeomarkIDPartsFileFormatExtensionQueryParams:
    srid: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'srid', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGeomarksGeomarkIDPartsFileFormatExtensionRequest:
    path_params: GetGeomarksGeomarkIDPartsFileFormatExtensionPathParams = field(default=None)
    query_params: GetGeomarksGeomarkIDPartsFileFormatExtensionQueryParams = field(default=None)
    

@dataclass
class GetGeomarksGeomarkIDPartsFileFormatExtensionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
