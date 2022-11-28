from dataclasses import dataclass, field



@dataclass
class SchemeAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'api_key' }})
    

@dataclass
class SchemeBearer:
    api_key: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
