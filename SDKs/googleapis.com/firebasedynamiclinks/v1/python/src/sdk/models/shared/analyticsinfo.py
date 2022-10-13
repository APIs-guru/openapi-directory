from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleplayanalytics
from . import itunesconnectanalytics


@dataclass_json
@dataclass
class AnalyticsInfo:
    google_play_analytics: Optional[googleplayanalytics.GooglePlayAnalytics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googlePlayAnalytics' }})
    itunes_connect_analytics: Optional[itunesconnectanalytics.ITunesConnectAnalytics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itunesConnectAnalytics' }})
    
