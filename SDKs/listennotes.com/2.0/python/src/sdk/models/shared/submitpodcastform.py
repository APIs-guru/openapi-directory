from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SubmitPodcastForm:
    email: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'email' }})
    rss: str = field(default=None, metadata={'form': { 'field_name': 'rss' }})
    
