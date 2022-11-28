from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostSeriesIDAttachmentsNameVerifyMd5PathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSeriesIDAttachmentsNameVerifyMd5Request:
    path_params: PostSeriesIDAttachmentsNameVerifyMd5PathParams = field()
    

@dataclass
class PostSeriesIDAttachmentsNameVerifyMd5Response:
    content_type: str = field()
    status_code: int = field()
    post_series_id_attachments_name_verify_md5_200_application_json_any: Optional[Any] = field(default=None)
    
