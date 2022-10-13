from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betadatelimits
from . import googleappsdrivelabelsv2betaintegerlimits
from . import googleappsdrivelabelsv2betalongtextlimits
from . import googleappsdrivelabelsv2betaselectionlimits
from . import googleappsdrivelabelsv2betatextlimits
from . import googleappsdrivelabelsv2betauserlimits


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaFieldLimits:
    date_limits: Optional[googleappsdrivelabelsv2betadatelimits.GoogleAppsDriveLabelsV2betaDateLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateLimits' }})
    integer_limits: Optional[googleappsdrivelabelsv2betaintegerlimits.GoogleAppsDriveLabelsV2betaIntegerLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerLimits' }})
    long_text_limits: Optional[googleappsdrivelabelsv2betalongtextlimits.GoogleAppsDriveLabelsV2betaLongTextLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longTextLimits' }})
    max_description_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDescriptionLength' }})
    max_display_name_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDisplayNameLength' }})
    max_id_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxIdLength' }})
    selection_limits: Optional[googleappsdrivelabelsv2betaselectionlimits.GoogleAppsDriveLabelsV2betaSelectionLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionLimits' }})
    text_limits: Optional[googleappsdrivelabelsv2betatextlimits.GoogleAppsDriveLabelsV2betaTextLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textLimits' }})
    user_limits: Optional[googleappsdrivelabelsv2betauserlimits.GoogleAppsDriveLabelsV2betaUserLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLimits' }})
    
