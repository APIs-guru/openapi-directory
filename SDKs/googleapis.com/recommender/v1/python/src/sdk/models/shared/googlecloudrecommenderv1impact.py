from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommenderv1costprojection
from . import googlecloudrecommenderv1reliabilityprojection
from . import googlecloudrecommenderv1securityprojection
from . import googlecloudrecommenderv1sustainabilityprojection

class GoogleCloudRecommenderV1ImpactCategoryEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    COST = "COST"
    SECURITY = "SECURITY"
    PERFORMANCE = "PERFORMANCE"
    MANAGEABILITY = "MANAGEABILITY"
    SUSTAINABILITY = "SUSTAINABILITY"
    RELIABILITY = "RELIABILITY"


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1Impact:
    category: Optional[GoogleCloudRecommenderV1ImpactCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    cost_projection: Optional[googlecloudrecommenderv1costprojection.GoogleCloudRecommenderV1CostProjection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costProjection' }})
    reliability_projection: Optional[googlecloudrecommenderv1reliabilityprojection.GoogleCloudRecommenderV1ReliabilityProjection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reliabilityProjection' }})
    security_projection: Optional[googlecloudrecommenderv1securityprojection.GoogleCloudRecommenderV1SecurityProjection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProjection' }})
    sustainability_projection: Optional[googlecloudrecommenderv1sustainabilityprojection.GoogleCloudRecommenderV1SustainabilityProjection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sustainabilityProjection' }})
    
