from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import lighthouseauditresultv5
from . import categories
from . import categorygroupv5
from . import configsettings
from . import environment
from . import i18n
from . import runtimeerror
from . import stackpack
from . import timing


@dataclass_json
@dataclass
class LighthouseResultV5:
    audits: Optional[dict[str, lighthouseauditresultv5.LighthouseAuditResultV5]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audits' }})
    categories: Optional[categories.Categories] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    category_groups: Optional[dict[str, categorygroupv5.CategoryGroupV5]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryGroups' }})
    config_settings: Optional[configsettings.ConfigSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configSettings' }})
    environment: Optional[environment.Environment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    fetch_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fetchTime' }})
    final_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalUrl' }})
    i18n: Optional[i18n.I18n] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'i18n' }})
    lighthouse_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lighthouseVersion' }})
    requested_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedUrl' }})
    run_warnings: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runWarnings' }})
    runtime_error: Optional[runtimeerror.RuntimeError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeError' }})
    stack_packs: Optional[List[stackpack.StackPack]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackPacks' }})
    timing: Optional[timing.Timing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timing' }})
    user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAgent' }})
    
