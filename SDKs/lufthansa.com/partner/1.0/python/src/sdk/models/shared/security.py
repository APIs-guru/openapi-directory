from dataclasses import dataclass, field



@dataclass
class SchemeAuth:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
