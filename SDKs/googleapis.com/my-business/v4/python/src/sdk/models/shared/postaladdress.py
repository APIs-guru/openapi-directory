from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostalAddress:
    r"""PostalAddress
    Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
    """
    
    address_lines: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLines') }})
    administrative_area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('administrativeArea') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locality') }})
    organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    recipients: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    sorting_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortingCode') }})
    sublocality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sublocality') }})
    
