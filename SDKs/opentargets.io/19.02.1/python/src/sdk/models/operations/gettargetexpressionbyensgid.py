from dataclasses import dataclass, field



@dataclass
class GetTargetExpressionByEnsgidQueryParams:
    gene: str = field(metadata={'query_param': { 'field_name': 'gene', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTargetExpressionByEnsgidRequest:
    query_params: GetTargetExpressionByEnsgidQueryParams = field()
    

@dataclass
class GetTargetExpressionByEnsgidResponse:
    content_type: str = field()
    status_code: int = field()
    
