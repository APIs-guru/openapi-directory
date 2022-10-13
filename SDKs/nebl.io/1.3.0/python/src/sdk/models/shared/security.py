from dataclasses import dataclass, field



@dataclass
class SchemeRPCAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
