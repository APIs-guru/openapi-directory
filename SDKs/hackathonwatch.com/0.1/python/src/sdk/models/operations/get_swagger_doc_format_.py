from dataclasses import dataclass, field



@dataclass
class GetSwaggerDocFormatResponse:
    content_type: str = field()
    status_code: int = field()
    
