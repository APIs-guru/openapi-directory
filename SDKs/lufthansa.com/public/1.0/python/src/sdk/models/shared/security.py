from dataclasses import dataclass, field



@dataclass
class SchemeAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
