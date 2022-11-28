from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class City:
    r"""City
    Contains information about a city that can be targeted by ads.
    """
    
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    country_dart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryDartId') }})
    dart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dartId') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    metro_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metroCode') }})
    metro_dma_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metroDmaId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    region_dart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionDartId') }})
    
