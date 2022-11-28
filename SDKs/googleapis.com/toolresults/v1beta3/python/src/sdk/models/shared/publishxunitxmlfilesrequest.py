from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PublishXunitXMLFilesRequest:
    r"""PublishXunitXMLFilesRequest
    Request message for StepService.PublishXunitXmlFiles.
    """
    
    xunit_xml_files: Optional[List[FileReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xunitXmlFiles') }})
    
