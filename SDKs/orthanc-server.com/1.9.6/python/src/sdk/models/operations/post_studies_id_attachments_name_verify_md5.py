from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostStudiesIDAttachmentsNameVerifyMd5PathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStudiesIDAttachmentsNameVerifyMd5Request:
    path_params: PostStudiesIDAttachmentsNameVerifyMd5PathParams = field(default=None)
    

@dataclass
class PostStudiesIDAttachmentsNameVerifyMd5Response:
    content_type: str = field(default=None)
    post_studies_id_attachments_name_verify_md5_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
