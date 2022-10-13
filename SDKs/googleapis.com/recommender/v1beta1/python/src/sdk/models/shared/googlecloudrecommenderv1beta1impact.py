from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommenderv1beta1costprojection
from . import googlecloudrecommenderv1beta1reliabilityprojection
from . import googlecloudrecommenderv1beta1securityprojection
from . import googlecloudrecommenderv1beta1sustainabilityprojection

class GoogleCloudRecommenderV1beta1ImpactCategoryEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    COST = "COST"
    SECURITY = "SECURITY"
    PERFORMANCE = "PERFORMANCE"
    MANAGEABILITY = "MANAGEABILITY"
    SUSTAINABILITY = "SUSTAINABILITY"
    RELIABILITY = "RELIABILITY"


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1Impact:
    category: Optional[GoogleCloudRecommenderV1beta1ImpactCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    cost_projection: Optional[googlecloudrecommenderv1beta1costprojection.GoogleCloudRecommenderV1beta1CostProjection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costProjection' }})
    reliability_projection: Optional[googlecloudrecommenderv1beta1reliabilityprojection.GoogleCloudRecommenderV1beta1ReliabilityProjection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reliabilityProjection' }})
    security_projection: Optional[googlecloudrecommenderv1beta1securityprojection.GoogleCloudRecommenderV1beta1SecurityProjection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProjection' }})
    sustainability_projection: Optional[googlecloudrecommenderv1beta1sustainabilityprojection.GoogleCloudRecommenderV1beta1SustainabilityProjection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sustainabilityProjection' }})
    
