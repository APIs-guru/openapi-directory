from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetSubtitleWithTicksPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    index: int = field(default=None, metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    media_source_id: str = field(default=None, metadata={'path_param': { 'field_name': 'mediaSourceId', 'style': 'simple', 'explode': False }})
    start_position_ticks: int = field(default=None, metadata={'path_param': { 'field_name': 'startPositionTicks', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubtitleWithTicksQueryParams:
    add_vtt_time_map: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'addVttTimeMap', 'style': 'form', 'explode': True }})
    copy_timestamps: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'copyTimestamps', 'style': 'form', 'explode': True }})
    end_position_ticks: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endPositionTicks', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubtitleWithTicksRequest:
    path_params: GetSubtitleWithTicksPathParams = field(default=None)
    query_params: GetSubtitleWithTicksQueryParams = field(default=None)
    

@dataclass
class GetSubtitleWithTicksResponse:
    content_type: str = field(default=None)
    get_subtitle_with_ticks_200_text_wildcard_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
