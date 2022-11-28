from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1FeatureMap:
    r"""GoogleCloudRecommendationengineV1beta1FeatureMap
    FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features.
    """
    
    categorical_features: Optional[dict[str, GoogleCloudRecommendationengineV1beta1FeatureMapStringList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoricalFeatures') }})
    numerical_features: Optional[dict[str, GoogleCloudRecommendationengineV1beta1FeatureMapFloatList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numericalFeatures') }})
    
