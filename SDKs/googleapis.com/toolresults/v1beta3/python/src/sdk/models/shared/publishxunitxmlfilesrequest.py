from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filereference


@dataclass_json
@dataclass
class PublishXunitXMLFilesRequest:
    xunit_xml_files: Optional[List[filereference.FileReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xunitXmlFiles' }})
    
