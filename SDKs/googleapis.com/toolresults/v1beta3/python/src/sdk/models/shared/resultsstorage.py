from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResultsStorage:
    r"""ResultsStorage
    The storage for test results.
    """
    
    results_storage_path: Optional[FileReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultsStoragePath') }})
    xunit_xml_file: Optional[FileReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xunitXmlFile') }})
    
