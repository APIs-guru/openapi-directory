from dataclasses import dataclass, field



@dataclass
class SchemeOtoroshiAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
