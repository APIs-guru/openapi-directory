from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Features:
    r"""Features
    All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input. Next ID: 11
    """
    
    classification_model_options: Optional[ClassificationModelOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationModelOptions') }})
    classify_text: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifyText') }})
    extract_document_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractDocumentSentiment') }})
    extract_entities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractEntities') }})
    extract_entity_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractEntitySentiment') }})
    extract_syntax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractSyntax') }})
    
