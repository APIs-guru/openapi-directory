from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import classificationmodeloptions


@dataclass_json
@dataclass
class Features:
    classification_model_options: Optional[classificationmodeloptions.ClassificationModelOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classificationModelOptions' }})
    classify_text: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classifyText' }})
    extract_document_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extractDocumentSentiment' }})
    extract_entities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extractEntities' }})
    extract_entity_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extractEntitySentiment' }})
    extract_syntax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extractSyntax' }})
    
