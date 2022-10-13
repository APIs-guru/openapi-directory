from dataclasses import dataclass, field
from typing import Enum,Optional

class GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnum(str, Enum):
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
class GetGeomarksGeomarkIDFeatureFileFormatExtensionPathParams:
    file_format_extension: GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'fileFormatExtension', 'style': 'simple', 'explode': False }})
    geomark_id: str = field(default=None, metadata={'path_param': { 'field_name': 'geomarkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeomarksGeomarkIDFeatureFileFormatExtensionQueryParams:
    srid: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'srid', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGeomarksGeomarkIDFeatureFileFormatExtensionRequest:
    path_params: GetGeomarksGeomarkIDFeatureFileFormatExtensionPathParams = field(default=None)
    query_params: GetGeomarksGeomarkIDFeatureFileFormatExtensionQueryParams = field(default=None)
    

@dataclass
class GetGeomarksGeomarkIDFeatureFileFormatExtensionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
