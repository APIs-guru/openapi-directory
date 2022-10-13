from dataclasses import dataclass, field



@dataclass
class GetReviewsReviewIDPathParams:
    review_id: str = field(default=None, metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReviewsReviewIDRequest:
    path_params: GetReviewsReviewIDPathParams = field(default=None)
    

@dataclass
class GetReviewsReviewIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
