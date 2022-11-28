from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostInstancesIDAttachmentsNameVerifyMd5PathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInstancesIDAttachmentsNameVerifyMd5Request:
    path_params: PostInstancesIDAttachmentsNameVerifyMd5PathParams = field()
    

@dataclass
class PostInstancesIDAttachmentsNameVerifyMd5Response:
    content_type: str = field()
    status_code: int = field()
    post_instances_id_attachments_name_verify_md5_200_application_json_any: Optional[Any] = field(default=None)
    
