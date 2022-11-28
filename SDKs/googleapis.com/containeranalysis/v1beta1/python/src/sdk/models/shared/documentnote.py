from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DocumentNote:
    r"""DocumentNote
    DocumentNote represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/2-document-creation-information/
    """
    
    data_licence: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataLicence') }})
    spdx_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxVersion') }})
    
