from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import heldaccount
from . import heldorgunit
from . import corpusquery

class HoldCorpusEnum(str, Enum):
    CORPUS_TYPE_UNSPECIFIED = "CORPUS_TYPE_UNSPECIFIED"
    DRIVE = "DRIVE"
    MAIL = "MAIL"
    GROUPS = "GROUPS"
    HANGOUTS_CHAT = "HANGOUTS_CHAT"
    VOICE = "VOICE"


@dataclass_json
@dataclass
class Hold:
    accounts: Optional[List[heldaccount.HeldAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    corpus: Optional[HoldCorpusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'corpus' }})
    hold_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holdId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    org_unit: Optional[heldorgunit.HeldOrgUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgUnit' }})
    query: Optional[corpusquery.CorpusQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
