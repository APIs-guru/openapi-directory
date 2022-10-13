from dataclasses import dataclass, field



@dataclass
class SchemeXMathtoolsAPISecret:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'X-Mathtools-Api-Secret' }})
    
