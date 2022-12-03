from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetFilesFileIDPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetFilesFileID200ApplicationJSON:
    file: Optional[shared.FileV1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    

@dataclass_json
@dataclass
class GetFilesFileID400ApplicationJSON:
    errors: Optional[shared.ErrorV1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass_json
@dataclass
class GetFilesFileID404ApplicationJSON:
    errors: Optional[shared.ErrorV1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetFilesFileIDRequest:
    path_params: GetFilesFileIDPathParams = field()
    

@dataclass
class GetFilesFileIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_files_file_id_200_application_json_object: Optional[GetFilesFileID200ApplicationJSON] = field(default=None)
    get_files_file_id_400_application_json_object: Optional[GetFilesFileID400ApplicationJSON] = field(default=None)
    get_files_file_id_404_application_json_object: Optional[GetFilesFileID404ApplicationJSON] = field(default=None)
    
