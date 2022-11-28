from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MailerSettings:
    r"""MailerSettings
    Configuration for mailgun api client
    """
    
    api_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    api_key_private: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeyPrivate') }})
    api_key_public: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeyPublic') }})
    eu: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eu') }})
    header: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
