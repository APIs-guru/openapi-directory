from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class PostGeomarksNewRequestBodyBufferCapEnum(str, Enum):
    ROUND = "ROUND"
    SQUARE = "SQUARE"
    FLAT = "FLAT"

class PostGeomarksNewRequestBodyBufferJoinEnum(str, Enum):
    ROUND = "ROUND"
    MITRE = "MITRE"
    BEVEL = "BEVEL"

class PostGeomarksNewRequestBodyFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    KML = "kml"
    KMZ = "kmz"
    SHP = "shp"
    SHPZ = "shpz"
    GEOJSON = "geojson"
    GML = "gml"
    WKT = "wkt"

class PostGeomarksNewRequestBodyResultFormatEnum(str, Enum):
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
class PostGeomarksNewRequestBody:
    allow_overlap: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'allowOverlap' }})
    body: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'body' }})
    buffer_cap: Optional[PostGeomarksNewRequestBodyBufferCapEnum] = field(default=None, metadata={'form': { 'field_name': 'bufferCap' }})
    buffer_join: Optional[PostGeomarksNewRequestBodyBufferJoinEnum] = field(default=None, metadata={'form': { 'field_name': 'bufferJoin' }})
    buffer_metres: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'bufferMetres' }})
    buffer_mitre_limit: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'bufferMitreLimit' }})
    buffer_segments: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'bufferSegments' }})
    callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'callback' }})
    failure_redirect_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'failureRedirectUrl' }})
    format: Optional[PostGeomarksNewRequestBodyFormatEnum] = field(default=None, metadata={'form': { 'field_name': 'format' }})
    multiple: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'multiple' }})
    redirect_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'redirectUrl' }})
    result_format: Optional[PostGeomarksNewRequestBodyResultFormatEnum] = field(default=None, metadata={'form': { 'field_name': 'resultFormat' }})
    srid: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'srid' }})
    

@dataclass
class PostGeomarksNewRequest:
    request: Optional[PostGeomarksNewRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class PostGeomarksNewResponse:
    content_type: str = field()
    status_code: int = field()
    
