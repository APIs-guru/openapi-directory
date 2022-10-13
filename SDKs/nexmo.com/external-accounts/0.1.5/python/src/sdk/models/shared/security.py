from dataclasses import dataclass, field



@dataclass
class SchemeBasicAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeBearerAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
