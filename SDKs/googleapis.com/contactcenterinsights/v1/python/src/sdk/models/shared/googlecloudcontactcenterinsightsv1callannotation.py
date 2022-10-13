from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1annotationboundary
from . import googlecloudcontactcenterinsightsv1annotationboundary
from . import googlecloudcontactcenterinsightsv1entitymentiondata
from . import googlecloudcontactcenterinsightsv1intentmatchdata
from . import googlecloudcontactcenterinsightsv1phrasematchdata
from . import googlecloudcontactcenterinsightsv1sentimentdata


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1CallAnnotation:
    annotation_end_boundary: Optional[googlecloudcontactcenterinsightsv1annotationboundary.GoogleCloudContactcenterinsightsV1AnnotationBoundary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationEndBoundary' }})
    annotation_start_boundary: Optional[googlecloudcontactcenterinsightsv1annotationboundary.GoogleCloudContactcenterinsightsV1AnnotationBoundary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationStartBoundary' }})
    channel_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelTag' }})
    entity_mention_data: Optional[googlecloudcontactcenterinsightsv1entitymentiondata.GoogleCloudContactcenterinsightsV1EntityMentionData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityMentionData' }})
    hold_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holdData' }})
    intent_match_data: Optional[googlecloudcontactcenterinsightsv1intentmatchdata.GoogleCloudContactcenterinsightsV1IntentMatchData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentMatchData' }})
    interruption_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interruptionData' }})
    phrase_match_data: Optional[googlecloudcontactcenterinsightsv1phrasematchdata.GoogleCloudContactcenterinsightsV1PhraseMatchData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phraseMatchData' }})
    sentiment_data: Optional[googlecloudcontactcenterinsightsv1sentimentdata.GoogleCloudContactcenterinsightsV1SentimentData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentData' }})
    silence_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'silenceData' }})
    
