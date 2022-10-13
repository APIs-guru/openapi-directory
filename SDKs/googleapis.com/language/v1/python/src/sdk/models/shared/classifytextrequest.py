from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import classificationmodeloptions
from . import document


@dataclass_json
@dataclass
class ClassifyTextRequest:
    classification_model_options: Optional[classificationmodeloptions.ClassificationModelOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classificationModelOptions' }})
    document: Optional[document.Document] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    
