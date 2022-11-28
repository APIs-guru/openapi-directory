from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SupportedRuntimeFeatures:
    r"""SupportedRuntimeFeatures
    Supported runtime features of a connector version. This is passed to the management layer to add a new connector version by the connector developer. Details about how this proto is passed to the management layer is covered in this doc - go/runtime-manifest.
    """
    
    action_apis: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionApis') }})
    entity_apis: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityApis') }})
    sql_query: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlQuery') }})
    
