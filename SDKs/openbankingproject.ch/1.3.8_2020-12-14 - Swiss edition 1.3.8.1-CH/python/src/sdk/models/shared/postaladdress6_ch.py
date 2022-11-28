from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostalAddress6Ch:
    r"""PostalAddress6Ch
    as in ISO pain.001.001.03.ch.02 PostalAddress6
    If possible structured. Simultaneous use of the structured elements <StrtNm>/ <BldgNb>/<PstCd>/<TwnNm> and the unstructured element <AdrLine> is not permitted.
    as in ISO pain.001.001.03.ch.02 PostalAddress6-CH
    
    """
    
    address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLine1') }})
    address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLine2') }})
    building_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildingNumber') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    post_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postCode') }})
    street_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streetName') }})
    town_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('townName') }})
    
