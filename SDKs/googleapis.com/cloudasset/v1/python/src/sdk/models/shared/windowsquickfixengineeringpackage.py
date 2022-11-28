from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WindowsQuickFixEngineeringPackage:
    r"""WindowsQuickFixEngineeringPackage
    Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering
    """
    
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    hot_fix_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotFixId') }})
    install_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installTime') }})
    
