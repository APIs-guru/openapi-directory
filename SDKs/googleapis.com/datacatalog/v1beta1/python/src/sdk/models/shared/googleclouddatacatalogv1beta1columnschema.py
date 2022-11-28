from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1ColumnSchema:
    r"""GoogleCloudDatacatalogV1beta1ColumnSchema
    Representation of a column within a schema. Columns could be nested inside other columns.
    """
    
    column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    subcolumns: Optional[List[GoogleCloudDatacatalogV1beta1ColumnSchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subcolumns') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
