from dataclasses import dataclass, field



@dataclass
class SchemeBearer:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'JWT' }})
    

@dataclass
class Security:
    bearer: SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
