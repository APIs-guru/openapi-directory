from dataclasses import dataclass, field



@dataclass
class SchemeBasicAuthentication:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
