from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import erskinemayindexterm
from . import erskinemayindexterm
from . import erskinemayparagraphsearchresult
from . import erskinemayindextermseelink


@dataclass_json
@dataclass
class ErskineMayIndexTerm:
    child_terms: Optional[List[erskinemayindexterm.ErskineMayIndexTerm]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childTerms' }})
    display_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayAs' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    parent_term: Optional[erskinemayindexterm.ErskineMayIndexTerm] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentTerm' }})
    references: Optional[List[erskinemayparagraphsearchresult.ErskineMayParagraphSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'references' }})
    see_links: Optional[List[erskinemayindextermseelink.ErskineMayIndexTermSeeLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seeLinks' }})
    term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'term' }})
    
