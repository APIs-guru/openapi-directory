from dataclasses import dataclass, field



@dataclass
class GetFeaturesFeatureIDPathParams:
    feature_id: int = field(metadata={'path_param': { 'field_name': 'featureId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFeaturesFeatureIDRequest:
    path_params: GetFeaturesFeatureIDPathParams = field()
    

@dataclass
class GetFeaturesFeatureIDResponse:
    content_type: str = field()
    status_code: int = field()
    
