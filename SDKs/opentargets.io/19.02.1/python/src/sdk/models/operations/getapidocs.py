from dataclasses import dataclass, field



@dataclass
class GetAPIDocsResponse:
    content_type: str = field()
    status_code: int = field()
    
