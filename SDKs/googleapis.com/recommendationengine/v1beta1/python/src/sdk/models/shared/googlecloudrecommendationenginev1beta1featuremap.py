from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommendationenginev1beta1featuremapstringlist
from . import googlecloudrecommendationenginev1beta1featuremapfloatlist


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1FeatureMap:
    categorical_features: Optional[dict[str, googlecloudrecommendationenginev1beta1featuremapstringlist.GoogleCloudRecommendationengineV1beta1FeatureMapStringList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoricalFeatures' }})
    numerical_features: Optional[dict[str, googlecloudrecommendationenginev1beta1featuremapfloatlist.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numericalFeatures' }})
    
