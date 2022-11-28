from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentPageImageQualityScores:
    r"""GoogleCloudDocumentaiV1DocumentPageImageQualityScores
    Image Quality Scores for the page image
    """
    
    detected_defects: Optional[List[GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedDefects') }})
    quality_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qualityScore') }})
    
