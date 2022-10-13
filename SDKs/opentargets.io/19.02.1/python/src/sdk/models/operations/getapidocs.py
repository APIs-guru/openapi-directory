from dataclasses import dataclass, field



@dataclass
class GetAPIDocsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
