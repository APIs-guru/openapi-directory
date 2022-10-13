from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AnalyzeEntitiesRequestLicensedVocabulariesEnum(str, Enum):
    LICENSED_VOCABULARY_UNSPECIFIED = "LICENSED_VOCABULARY_UNSPECIFIED"
    ICD10_CM = "ICD10CM"
    SNOMEDCT_US = "SNOMEDCT_US"


@dataclass_json
@dataclass
class AnalyzeEntitiesRequest:
    document_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentContent' }})
    licensed_vocabularies: Optional[List[AnalyzeEntitiesRequestLicensedVocabulariesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licensedVocabularies' }})
    
