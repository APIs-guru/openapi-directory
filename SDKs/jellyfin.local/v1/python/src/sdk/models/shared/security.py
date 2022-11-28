from dataclasses import dataclass, field



@dataclass
class SchemeCustomAuthentication:
    api_key: str = field(metadata={'security': { 'field_name': 'X-Emby-Authorization' }})
    
