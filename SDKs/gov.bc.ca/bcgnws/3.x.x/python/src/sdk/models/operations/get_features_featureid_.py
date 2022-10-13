from dataclasses import dataclass, field



@dataclass
class GetFeaturesFeatureIDPathParams:
    feature_id: int = field(default=None, metadata={'path_param': { 'field_name': 'featureId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFeaturesFeatureIDRequest:
    path_params: GetFeaturesFeatureIDPathParams = field(default=None)
    

@dataclass
class GetFeaturesFeatureIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
