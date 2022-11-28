from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ExecBodyOsdbOutputTypeEnum(str, Enum):
    URL_ONLY = "url_only"
    GENERATE_RDF = "generate_rdf"
    DISPLAY_RDF = "display_rdf"


@dataclass_json
@dataclass
class ExecBody:
    action_specific_property1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_specific_property1') }})
    action_specific_property2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_specific_property2') }})
    osdb_body_data_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osdb:body_data_encoding') }})
    osdb_body_data_raw: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osdb:body_data_raw') }})
    osdb_body_data_src_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osdb:body_data_src_url') }})
    osdb_output_type: Optional[ExecBodyOsdbOutputTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osdb:output_type') }})
    osdb_response_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osdb:response_format') }})
    
