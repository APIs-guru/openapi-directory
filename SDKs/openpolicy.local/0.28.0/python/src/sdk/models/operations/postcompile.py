from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostCompileQueryParams:
    explain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'explain', 'style': 'form', 'explode': True }})
    instrument: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'instrument', 'style': 'form', 'explode': True }})
    metrics: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'metrics', 'style': 'form', 'explode': True }})
    pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class PostCompile200ApplicationJSONExplanationLocalsKey:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class PostCompile200ApplicationJSONExplanationLocalsValue:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class PostCompile200ApplicationJSONExplanationLocals:
    key: Optional[PostCompile200ApplicationJSONExplanationLocalsKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[PostCompile200ApplicationJSONExplanationLocalsValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class PostCompile200ApplicationJSONExplanationNodeTerms:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class PostCompile200ApplicationJSONExplanationNode:
    r"""PostCompile200ApplicationJSONExplanationNode
    The AST element associated with the evaluation step.
    https://godoc.org/github.com/open-policy-agent/opa/ast - AST
    """
    
    index: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    terms: Optional[List[PostCompile200ApplicationJSONExplanationNodeTerms]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    
class PostCompile200ApplicationJSONExplanationOpEnum(str, Enum):
    ENTER = "enter"
    EXIT = "exit"
    EVAL = "eval"
    FAIL = "fail"
    REDO = "redo"

class PostCompile200ApplicationJSONExplanationTypeEnum(str, Enum):
    EXPR = "expr"
    RULE = "rule"
    BODY = "body"


@dataclass_json
@dataclass
class PostCompile200ApplicationJSONExplanation:
    locals: Optional[List[PostCompile200ApplicationJSONExplanationLocals]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locals') }})
    node: Optional[PostCompile200ApplicationJSONExplanationNode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node') }})
    op: Optional[PostCompile200ApplicationJSONExplanationOpEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('op') }})
    parent_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_id') }})
    query_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query_id') }})
    type: Optional[PostCompile200ApplicationJSONExplanationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PostCompile200ApplicationJSONMetrics:
    counter_server_query_cache_hit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counter_server_query_cache_hit') }})
    timer_query_compile_stage_build_comprehension_index_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_build_comprehension_index_ns') }})
    timer_query_compile_stage_check_safety_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_check_safety_ns') }})
    timer_query_compile_stage_check_types_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_check_types_ns') }})
    timer_query_compile_stage_check_undefined_funcs_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_check_undefined_funcs_ns') }})
    timer_query_compile_stage_check_unsafe_builtins_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_check_unsafe_builtins_ns') }})
    timer_query_compile_stage_resolve_refs_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_resolve_refs_ns') }})
    timer_query_compile_stage_rewrite_comprehension_terms_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_rewrite_comprehension_terms_ns') }})
    timer_query_compile_stage_rewrite_dynamic_terms_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_rewrite_dynamic_terms_ns') }})
    timer_query_compile_stage_rewrite_expr_terms_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_rewrite_expr_terms_ns') }})
    timer_query_compile_stage_rewrite_local_vars_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_rewrite_local_vars_ns') }})
    timer_query_compile_stage_rewrite_to_capture_value_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_rewrite_to_capture_value_ns') }})
    timer_query_compile_stage_rewrite_with_values_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_query_compile_stage_rewrite_with_values_ns') }})
    timer_rego_input_parse_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_rego_input_parse_ns') }})
    timer_rego_module_compile_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_rego_module_compile_ns') }})
    timer_rego_module_parse_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_rego_module_parse_ns') }})
    timer_rego_query_compile_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_rego_query_compile_ns') }})
    timer_rego_query_eval_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_rego_query_eval_ns') }})
    timer_rego_query_parse_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_rego_query_parse_ns') }})
    timer_server_handler_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_server_handler_ns') }})
    timer_server_read_bytes_ns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer_server_read_bytes_ns') }})
    

@dataclass_json
@dataclass
class PostCompile200ApplicationJSON:
    explanation: Optional[List[PostCompile200ApplicationJSONExplanation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explanation') }})
    metrics: Optional[PostCompile200ApplicationJSONMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    result: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class PostCompileRequest:
    query_params: PostCompileQueryParams = field()
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCompileResponse:
    content_type: str = field()
    status_code: int = field()
    four_hundred: Optional[shared.FourHundred] = field(default=None)
    post_compile_200_application_json_object: Optional[PostCompile200ApplicationJSON] = field(default=None)
    
