from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateDeveloperMetadataRequest:
    r"""UpdateDeveloperMetadataRequest
    A request to update properties of developer metadata. Updates the properties of the developer metadata selected by the filters to the values provided in the DeveloperMetadata resource. Callers must specify the properties they wish to update in the fields parameter, as well as specify at least one DataFilter matching the metadata they wish to update.
    """
    
    data_filters: Optional[List[DataFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFilters') }})
    developer_metadata: Optional[DeveloperMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMetadata') }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    
