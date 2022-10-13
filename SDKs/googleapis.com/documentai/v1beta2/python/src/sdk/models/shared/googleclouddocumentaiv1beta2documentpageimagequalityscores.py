from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2documentpageimagequalityscoresdetecteddefect


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores:
    detected_defects: Optional[List[googleclouddocumentaiv1beta2documentpageimagequalityscoresdetecteddefect.GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedDefects' }})
    quality_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qualityScore' }})
    
