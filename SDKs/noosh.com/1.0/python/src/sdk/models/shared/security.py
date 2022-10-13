from dataclasses import dataclass, field



@dataclass
class SchemeHTTPBasic:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
