from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Features:
    r"""Features
    All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input.
    """
    
    extract_document_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractDocumentSentiment') }})
    extract_entities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractEntities') }})
    extract_syntax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractSyntax') }})
    
