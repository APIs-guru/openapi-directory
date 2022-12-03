from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostFilesFileIDGetTemporaryLinkPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostFilesFileIDGetTemporaryLink200ApplicationJSON:
    temporary_link: Optional[shared.TemporaryLinkV1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('temporary_link') }})
    

@dataclass_json
@dataclass
class PostFilesFileIDGetTemporaryLink400ApplicationJSON:
    errors: Optional[shared.ErrorV1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass_json
@dataclass
class PostFilesFileIDGetTemporaryLink404ApplicationJSON:
    errors: Optional[shared.ErrorV1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class PostFilesFileIDGetTemporaryLinkRequest:
    path_params: PostFilesFileIDGetTemporaryLinkPathParams = field()
    

@dataclass
class PostFilesFileIDGetTemporaryLinkResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    post_files_file_id_get_temporary_link_200_application_json_object: Optional[PostFilesFileIDGetTemporaryLink200ApplicationJSON] = field(default=None)
    post_files_file_id_get_temporary_link_400_application_json_object: Optional[PostFilesFileIDGetTemporaryLink400ApplicationJSON] = field(default=None)
    post_files_file_id_get_temporary_link_404_application_json_object: Optional[PostFilesFileIDGetTemporaryLink404ApplicationJSON] = field(default=None)
    
