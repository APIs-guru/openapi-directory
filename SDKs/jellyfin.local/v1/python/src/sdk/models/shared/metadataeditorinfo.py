from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namevaluepair
from . import countryinfo
from . import culturedto
from . import externalidinfo
from . import parentalrating


@dataclass_json
@dataclass
class MetadataEditorInfo:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentType' }})
    content_type_options: Optional[List[namevaluepair.NameValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentTypeOptions' }})
    countries: Optional[List[countryinfo.CountryInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Countries' }})
    cultures: Optional[List[culturedto.CultureDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cultures' }})
    external_id_infos: Optional[List[externalidinfo.ExternalIDInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalIdInfos' }})
    parental_rating_options: Optional[List[parentalrating.ParentalRating]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentalRatingOptions' }})
    
