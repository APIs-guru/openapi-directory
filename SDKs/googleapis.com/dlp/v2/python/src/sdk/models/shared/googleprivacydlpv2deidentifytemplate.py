from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DeidentifyTemplateInput:
    r"""GooglePrivacyDlpV2DeidentifyTemplateInput
    DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
    """
    
    deidentify_config: Optional[GooglePrivacyDlpV2DeidentifyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deidentifyConfig') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    

@dataclass_json
@dataclass
class GooglePrivacyDlpV2DeidentifyTemplate:
    r"""GooglePrivacyDlpV2DeidentifyTemplate
    DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    deidentify_config: Optional[GooglePrivacyDlpV2DeidentifyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deidentifyConfig') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
