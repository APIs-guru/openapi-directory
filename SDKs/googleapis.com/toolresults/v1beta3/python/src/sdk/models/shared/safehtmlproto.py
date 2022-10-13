from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SafeHTMLProto:
    private_do_not_access_or_else_safe_html_wrapped_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateDoNotAccessOrElseSafeHtmlWrappedValue' }})
    
