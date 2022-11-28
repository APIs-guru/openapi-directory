from dataclasses import dataclass, field



@dataclass
class SchemeAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'api_key' }})
    

@dataclass
class SchemeAPISecret:
    api_key: str = field(metadata={'security': { 'field_name': 'api_secret' }})
    

@dataclass
class Security:
    api_key: SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    api_secret: SchemeAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    
