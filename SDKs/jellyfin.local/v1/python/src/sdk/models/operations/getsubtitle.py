from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetSubtitlePathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    index: int = field(default=None, metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    media_source_id: str = field(default=None, metadata={'path_param': { 'field_name': 'mediaSourceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubtitleQueryParams:
    add_vtt_time_map: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'addVttTimeMap', 'style': 'form', 'explode': True }})
    copy_timestamps: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'copyTimestamps', 'style': 'form', 'explode': True }})
    end_position_ticks: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endPositionTicks', 'style': 'form', 'explode': True }})
    start_position_ticks: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startPositionTicks', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubtitleRequest:
    path_params: GetSubtitlePathParams = field(default=None)
    query_params: GetSubtitleQueryParams = field(default=None)
    

@dataclass
class GetSubtitleResponse:
    content_type: str = field(default=None)
    get_subtitle_200_text_wildcard_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
