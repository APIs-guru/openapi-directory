from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetadataEditorInfo:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentType') }})
    content_type_options: Optional[List[NameValuePair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentTypeOptions') }})
    countries: Optional[List[CountryInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Countries') }})
    cultures: Optional[List[CultureDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cultures') }})
    external_id_infos: Optional[List[ExternalIDInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalIdInfos') }})
    parental_rating_options: Optional[List[ParentalRating]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentalRatingOptions') }})
    
