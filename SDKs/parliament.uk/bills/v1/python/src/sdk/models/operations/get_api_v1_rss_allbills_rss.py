from dataclasses import dataclass, field



@dataclass
class GetAPIV1RssAllbillsRssResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
