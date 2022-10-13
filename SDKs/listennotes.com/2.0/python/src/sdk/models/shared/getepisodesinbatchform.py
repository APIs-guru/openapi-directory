from dataclasses import dataclass, field



@dataclass
class GetEpisodesInBatchForm:
    ids: str = field(default=None, metadata={'form': { 'field_name': 'ids' }})
    
