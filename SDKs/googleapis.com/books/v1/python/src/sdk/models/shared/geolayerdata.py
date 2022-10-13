from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GeolayerdataCommon:
    lang: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lang' }})
    preview_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previewImageUrl' }})
    snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    snippet_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippetUrl' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class GeolayerdataGeoViewportHi:
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    

@dataclass_json
@dataclass
class GeolayerdataGeoViewportLo:
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    

@dataclass_json
@dataclass
class GeolayerdataGeoViewport:
    hi: Optional[GeolayerdataGeoViewportHi] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hi' }})
    lo: Optional[GeolayerdataGeoViewportLo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lo' }})
    

@dataclass_json
@dataclass
class GeolayerdataGeo:
    boundary: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundary' }})
    cache_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cachePolicy' }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryCode' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    map_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapType' }})
    viewport: Optional[GeolayerdataGeoViewport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewport' }})
    zoom: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zoom' }})
    

@dataclass_json
@dataclass
class Geolayerdata:
    common: Optional[GeolayerdataCommon] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'common' }})
    geo: Optional[GeolayerdataGeo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geo' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
