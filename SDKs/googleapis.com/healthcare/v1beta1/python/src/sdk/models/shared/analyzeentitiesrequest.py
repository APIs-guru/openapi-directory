from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AnalyzeEntitiesRequestLicensedVocabulariesEnum(str, Enum):
    LICENSED_VOCABULARY_UNSPECIFIED = "LICENSED_VOCABULARY_UNSPECIFIED"
    ICD10_CM = "ICD10CM"
    SNOMEDCT_US = "SNOMEDCT_US"


@dataclass_json
@dataclass
class AnalyzeEntitiesRequest:
    r"""AnalyzeEntitiesRequest
    The request to analyze healthcare entities in a document.
    """
    
    document_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentContent') }})
    licensed_vocabularies: Optional[List[AnalyzeEntitiesRequestLicensedVocabulariesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licensedVocabularies') }})
    
