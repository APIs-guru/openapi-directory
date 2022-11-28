from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class VectortileTerraintilesGetPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class VectortileTerraintilesGetClientInfoPlatformEnum(str, Enum):
    PLATFORM_UNSPECIFIED = "PLATFORM_UNSPECIFIED"
    EDITOR = "EDITOR"
    MAC_OS = "MAC_OS"
    WINDOWS = "WINDOWS"
    LINUX = "LINUX"
    ANDROID = "ANDROID"
    IOS = "IOS"
    WEB_GL = "WEB_GL"

class VectortileTerraintilesGetTerrainFormatsEnum(str, Enum):
    TERRAIN_FORMAT_UNKNOWN = "TERRAIN_FORMAT_UNKNOWN"
    FIRST_DERIVATIVE = "FIRST_DERIVATIVE"
    SECOND_DERIVATIVE = "SECOND_DERIVATIVE"


@dataclass
class VectortileTerraintilesGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    altitude_precision_centimeters: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'altitudePrecisionCentimeters', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    client_info_api_client: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientInfo.apiClient', 'style': 'form', 'explode': True }})
    client_info_application_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientInfo.applicationId', 'style': 'form', 'explode': True }})
    client_info_application_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientInfo.applicationVersion', 'style': 'form', 'explode': True }})
    client_info_device_model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientInfo.deviceModel', 'style': 'form', 'explode': True }})
    client_info_operating_system: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientInfo.operatingSystem', 'style': 'form', 'explode': True }})
    client_info_platform: Optional[VectortileTerraintilesGetClientInfoPlatformEnum] = field(default=None, metadata={'query_param': { 'field_name': 'clientInfo.platform', 'style': 'form', 'explode': True }})
    client_info_user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientInfo.userId', 'style': 'form', 'explode': True }})
    enable_modeled_volumes: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableModeledVolumes', 'style': 'form', 'explode': True }})
    enable_political_features: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enablePoliticalFeatures', 'style': 'form', 'explode': True }})
    enable_private_roads: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enablePrivateRoads', 'style': 'form', 'explode': True }})
    enable_unclipped_buildings: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableUnclippedBuildings', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'languageCode', 'style': 'form', 'explode': True }})
    max_elevation_resolution_cells: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxElevationResolutionCells', 'style': 'form', 'explode': True }})
    min_elevation_resolution_cells: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minElevationResolutionCells', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    region_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'regionCode', 'style': 'form', 'explode': True }})
    terrain_formats: Optional[List[VectortileTerraintilesGetTerrainFormatsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'terrainFormats', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class VectortileTerraintilesGetRequest:
    path_params: VectortileTerraintilesGetPathParams = field()
    query_params: VectortileTerraintilesGetQueryParams = field()
    

@dataclass
class VectortileTerraintilesGetResponse:
    content_type: str = field()
    status_code: int = field()
    terrain_tile: Optional[shared.TerrainTile] = field(default=None)
    
