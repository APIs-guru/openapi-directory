from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SubmitPodcastForm:
    rss: str = field(metadata={'form': { 'field_name': 'rss' }})
    email: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'email' }})
    
