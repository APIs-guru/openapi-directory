from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

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
    file_format_extension: GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnum = field(metadata={'path_param': { 'field_name': 'fileFormatExtension', 'style': 'simple', 'explode': False }})
    geomark_id: str = field(metadata={'path_param': { 'field_name': 'geomarkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeomarksGeomarkIDFeatureFileFormatExtensionQueryParams:
    srid: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'srid', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGeomarksGeomarkIDFeatureFileFormatExtensionRequest:
    path_params: GetGeomarksGeomarkIDFeatureFileFormatExtensionPathParams = field()
    query_params: GetGeomarksGeomarkIDFeatureFileFormatExtensionQueryParams = field()
    

@dataclass
class GetGeomarksGeomarkIDFeatureFileFormatExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    
