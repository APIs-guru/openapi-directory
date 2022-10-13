from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import textoperatoroptions
from . import retrievalimportance


@dataclass_json
@dataclass
class TextPropertyOptions:
    operator_options: Optional[textoperatoroptions.TextOperatorOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorOptions' }})
    retrieval_importance: Optional[retrievalimportance.RetrievalImportance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retrievalImportance' }})
    
