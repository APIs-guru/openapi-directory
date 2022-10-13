from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPodcastsInBatchForm:
    ids: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ids' }})
    itunes_ids: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'itunes_ids' }})
    next_episode_pub_date: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'next_episode_pub_date' }})
    rsses: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'rsses' }})
    show_latest_episodes: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'show_latest_episodes' }})
    
