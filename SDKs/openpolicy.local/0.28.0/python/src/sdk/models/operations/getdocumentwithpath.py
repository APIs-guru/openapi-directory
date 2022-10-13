from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDocumentWithPathPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDocumentWithPathQueryParams:
    explain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'explain', 'style': 'form', 'explode': True }})
    instrument: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'instrument', 'style': 'form', 'explode': True }})
    metrics: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'metrics', 'style': 'form', 'explode': True }})
    pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    provenance: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'provenance', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDocumentWithPathRequest:
    path_params: GetDocumentWithPathPathParams = field(default=None)
    query_params: GetDocumentWithPathQueryParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/x-yaml' }})
    

@dataclass_json
@dataclass
class GetDocumentWithPath200ApplicationJSONExplanationLocalsKey:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class GetDocumentWithPath200ApplicationJSONExplanationLocalsValue:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class GetDocumentWithPath200ApplicationJSONExplanationLocals:
    key: Optional[GetDocumentWithPath200ApplicationJSONExplanationLocalsKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[GetDocumentWithPath200ApplicationJSONExplanationLocalsValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class GetDocumentWithPath200ApplicationJSONExplanationNodeTerms:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class GetDocumentWithPath200ApplicationJSONExplanationNode:
    index: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    terms: Optional[List[GetDocumentWithPath200ApplicationJSONExplanationNodeTerms]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terms' }})
    
class GetDocumentWithPath200ApplicationJSONExplanationOpEnum(str, Enum):
    ENTER = "enter"
    EXIT = "exit"
    EVAL = "eval"
    FAIL = "fail"
    REDO = "redo"

class GetDocumentWithPath200ApplicationJSONExplanationTypeEnum(str, Enum):
    EXPR = "expr"
    RULE = "rule"
    BODY = "body"


@dataclass_json
@dataclass
class GetDocumentWithPath200ApplicationJSONExplanation:
    locals: Optional[List[GetDocumentWithPath200ApplicationJSONExplanationLocals]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locals' }})
    node: Optional[GetDocumentWithPath200ApplicationJSONExplanationNode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node' }})
    op: Optional[GetDocumentWithPath200ApplicationJSONExplanationOpEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'op' }})
    parent_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_id' }})
    query_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query_id' }})
    type: Optional[GetDocumentWithPath200ApplicationJSONExplanationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetDocumentWithPath200ApplicationJSONMetrics:
    counter_server_query_cache_hit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'counter_server_query_cache_hit' }})
    timer_query_compile_stage_build_comprehension_index_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_query_compile_stage_build_comprehension_index_ns' }})
    timer_query_compile_stage_check_safety_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_query_compile_stage_check_safety_ns' }})
    timer_query_compile_stage_check_types_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_query_compile_stage_check_types_ns' }})
    timer_query_compile_stage_check_undefined_funcs_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_query_compile_stage_check_undefined_funcs_ns' }})
    timer_query_compile_stage_check_unsafe_builtins_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_query_compile_stage_check_unsafe_builtins_ns' }})
    timer_query_compile_stage_resolve_refs_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_query_compile_stage_resolve_refs_ns' }})
    timer_query_compile_stage_rewrite_comprehension_terms_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_query_compile_stage_rewrite_comprehension_terms_ns' }})
    timer_query_compile_stage_rewrite_dynamic_terms_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_query_compile_stage_rewrite_dynamic_terms_ns' }})
    timer_query_compile_stage_rewrite_expr_terms_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_query_compile_stage_rewrite_expr_terms_ns' }})
    timer_query_compile_stage_rewrite_local_vars_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_query_compile_stage_rewrite_local_vars_ns' }})
    timer_query_compile_stage_rewrite_to_capture_value_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_query_compile_stage_rewrite_to_capture_value_ns' }})
    timer_query_compile_stage_rewrite_with_values_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_query_compile_stage_rewrite_with_values_ns' }})
    timer_rego_input_parse_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_rego_input_parse_ns' }})
    timer_rego_module_compile_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_rego_module_compile_ns' }})
    timer_rego_module_parse_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_rego_module_parse_ns' }})
    timer_rego_query_compile_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_rego_query_compile_ns' }})
    timer_rego_query_eval_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_rego_query_eval_ns' }})
    timer_rego_query_parse_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_rego_query_parse_ns' }})
    timer_server_handler_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_server_handler_ns' }})
    timer_server_read_bytes_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timer_server_read_bytes_ns' }})
    

@dataclass_json
@dataclass
class GetDocumentWithPath200ApplicationJSONProvenance:
    build_commit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_commit' }})
    build_hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_hostname' }})
    build_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_timestamp' }})
    bundles: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundles' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class GetDocumentWithPath200ApplicationJSON:
    explanation: Optional[List[GetDocumentWithPath200ApplicationJSONExplanation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explanation' }})
    metrics: Optional[GetDocumentWithPath200ApplicationJSONMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    provenance: Optional[GetDocumentWithPath200ApplicationJSONProvenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenance' }})
    result: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetDocumentWithPathResponse:
    four_hundred: Optional[shared.FourHundred] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_document_with_path_200_application_json_object: Optional[GetDocumentWithPath200ApplicationJSON] = field(default=None)
    
