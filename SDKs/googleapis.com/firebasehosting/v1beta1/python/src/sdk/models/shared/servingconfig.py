from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ServingConfigAppAssociationEnum(str, Enum):
    AUTO = "AUTO"
    NONE = "NONE"

class ServingConfigTrailingSlashBehaviorEnum(str, Enum):
    TRAILING_SLASH_BEHAVIOR_UNSPECIFIED = "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
    ADD = "ADD"
    REMOVE = "REMOVE"


@dataclass_json
@dataclass
class ServingConfig:
    r"""ServingConfig
    The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order).
    """
    
    app_association: Optional[ServingConfigAppAssociationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appAssociation') }})
    clean_urls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cleanUrls') }})
    headers: Optional[List[Header]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    i18n: Optional[I18nConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('i18n') }})
    redirects: Optional[List[Redirect]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirects') }})
    rewrites: Optional[List[Rewrite]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rewrites') }})
    trailing_slash_behavior: Optional[ServingConfigTrailingSlashBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trailingSlashBehavior') }})
    
