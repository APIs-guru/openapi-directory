from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GooglePrivacyDlpV2TransformationErrorHandling:
    leave_untransformed: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leaveUntransformed' }})
    throw_error: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'throwError' }})
    
