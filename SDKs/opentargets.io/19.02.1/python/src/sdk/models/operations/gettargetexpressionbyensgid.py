from dataclasses import dataclass, field



@dataclass
class GetTargetExpressionByEnsgidQueryParams:
    gene: str = field(default=None, metadata={'query_param': { 'field_name': 'gene', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTargetExpressionByEnsgidRequest:
    query_params: GetTargetExpressionByEnsgidQueryParams = field(default=None)
    

@dataclass
class GetTargetExpressionByEnsgidResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
