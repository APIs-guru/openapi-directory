from dataclasses import dataclass, field



@dataclass
class GetEpisodesInBatchForm:
    ids: str = field(metadata={'form': { 'field_name': 'ids' }})
    
