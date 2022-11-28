from dataclasses import dataclass, field



@dataclass
class SchemePsuoAuth2Security:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeTppoAuth2Security:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
