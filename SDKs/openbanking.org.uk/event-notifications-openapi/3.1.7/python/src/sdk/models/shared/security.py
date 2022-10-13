from dataclasses import dataclass, field



@dataclass
class SchemeTppoAuth2Security:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
