from dataclasses import dataclass, field



@dataclass
class SchemeAccessToken:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
