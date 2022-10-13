from dataclasses import dataclass, field



@dataclass
class SchemeHapikey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'hapikey' }})
    
