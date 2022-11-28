from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities:
    r"""GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities
    The capabilities related to this choice when editing the choice.
    """
    
    can_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDelete') }})
    can_disable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDisable') }})
    can_enable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canEnable') }})
    can_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canUpdate') }})
    
