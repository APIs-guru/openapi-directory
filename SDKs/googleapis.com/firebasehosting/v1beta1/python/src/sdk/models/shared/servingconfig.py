from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import header
from . import i18nconfig
from . import redirect
from . import rewrite

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
    app_association: Optional[ServingConfigAppAssociationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appAssociation' }})
    clean_urls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cleanUrls' }})
    headers: Optional[List[header.Header]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    i18n: Optional[i18nconfig.I18nConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'i18n' }})
    redirects: Optional[List[redirect.Redirect]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirects' }})
    rewrites: Optional[List[rewrite.Rewrite]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rewrites' }})
    trailing_slash_behavior: Optional[ServingConfigTrailingSlashBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trailingSlashBehavior' }})
    
