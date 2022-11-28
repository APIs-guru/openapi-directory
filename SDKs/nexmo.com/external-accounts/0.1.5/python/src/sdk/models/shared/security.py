from dataclasses import dataclass, field



@dataclass
class SchemeBearerAuth:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeBasicAuth:
    password: str = field(metadata={'security': { 'field_name': 'password' }})
    username: str = field(metadata={'security': { 'field_name': 'username' }})
    
