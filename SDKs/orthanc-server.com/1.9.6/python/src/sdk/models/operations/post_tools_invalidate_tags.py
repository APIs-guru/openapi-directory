from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclass
class PostToolsInvalidateTagsResponse:
    content_type: str = field()
    status_code: int = field()
    
