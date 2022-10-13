from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import importfile

class TemplateContentsInterpreterEnum(str, Enum):
    UNKNOWN_INTERPRETER = "UNKNOWN_INTERPRETER"
    PYTHON = "PYTHON"
    JINJA = "JINJA"


@dataclass_json
@dataclass
class TemplateContents:
    imports: Optional[List[importfile.ImportFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imports' }})
    interpreter: Optional[TemplateContentsInterpreterEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interpreter' }})
    main_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainTemplate' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    
