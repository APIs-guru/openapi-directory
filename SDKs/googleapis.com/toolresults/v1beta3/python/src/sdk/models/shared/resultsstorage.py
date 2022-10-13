from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filereference
from . import filereference


@dataclass_json
@dataclass
class ResultsStorage:
    results_storage_path: Optional[filereference.FileReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultsStoragePath' }})
    xunit_xml_file: Optional[filereference.FileReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xunitXmlFile' }})
    
