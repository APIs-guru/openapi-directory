from dataclasses import dataclass, field



@dataclass
class SchemeApikey:
    api_key: str = field(metadata={'security': { 'field_name': 'api-key' }})
    

@dataclass
class Security:
    apikey: SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    
