from dataclasses import dataclass, field



@dataclass
class SchemeHapikey:
    api_key: str = field(metadata={'security': { 'field_name': 'hapikey' }})
    
