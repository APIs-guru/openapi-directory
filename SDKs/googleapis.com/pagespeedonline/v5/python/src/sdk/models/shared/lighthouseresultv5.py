from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LighthouseResultV5:
    r"""LighthouseResultV5
    The Lighthouse result object.
    """
    
    audits: Optional[dict[str, LighthouseAuditResultV5]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audits') }})
    categories: Optional[Categories] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    category_groups: Optional[dict[str, CategoryGroupV5]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryGroups') }})
    config_settings: Optional[ConfigSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configSettings') }})
    environment: Optional[Environment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    fetch_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetchTime') }})
    final_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalUrl') }})
    i18n: Optional[I18n] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('i18n') }})
    lighthouse_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lighthouseVersion') }})
    requested_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedUrl') }})
    run_warnings: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runWarnings') }})
    runtime_error: Optional[RuntimeError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeError') }})
    stack_packs: Optional[List[StackPack]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackPacks') }})
    timing: Optional[Timing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timing') }})
    user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAgent') }})
    
