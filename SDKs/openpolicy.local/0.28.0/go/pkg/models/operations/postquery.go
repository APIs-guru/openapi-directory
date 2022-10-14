package operations

import (
	"openapi/pkg/models/shared"
)

type PostQueryQueryParams struct {
	Explain *string `queryParam:"style=form,explode=true,name=explain"`
	Metrics *bool   `queryParam:"style=form,explode=true,name=metrics"`
	Pretty  *bool   `queryParam:"style=form,explode=true,name=pretty"`
}

type PostQueryRequest struct {
	QueryParams PostQueryQueryParams
	Request     []byte `request:"mediaType=application/x-yaml"`
}

type PostQuery200ApplicationJSONExplanationLocalsKey struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

type PostQuery200ApplicationJSONExplanationLocalsValue struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

type PostQuery200ApplicationJSONExplanationLocals struct {
	Key   *PostQuery200ApplicationJSONExplanationLocalsKey   `json:"key,omitempty"`
	Value *PostQuery200ApplicationJSONExplanationLocalsValue `json:"value,omitempty"`
}

type PostQuery200ApplicationJSONExplanationNodeTerms struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

type PostQuery200ApplicationJSONExplanationNode struct {
	Index *float64                                          `json:"index,omitempty"`
	Terms []PostQuery200ApplicationJSONExplanationNodeTerms `json:"terms,omitempty"`
}

type PostQuery200ApplicationJSONExplanationOpEnum string

const (
	PostQuery200ApplicationJSONExplanationOpEnumEnter PostQuery200ApplicationJSONExplanationOpEnum = "enter"
	PostQuery200ApplicationJSONExplanationOpEnumExit  PostQuery200ApplicationJSONExplanationOpEnum = "exit"
	PostQuery200ApplicationJSONExplanationOpEnumEval  PostQuery200ApplicationJSONExplanationOpEnum = "eval"
	PostQuery200ApplicationJSONExplanationOpEnumFail  PostQuery200ApplicationJSONExplanationOpEnum = "fail"
	PostQuery200ApplicationJSONExplanationOpEnumRedo  PostQuery200ApplicationJSONExplanationOpEnum = "redo"
)

type PostQuery200ApplicationJSONExplanationTypeEnum string

const (
	PostQuery200ApplicationJSONExplanationTypeEnumExpr PostQuery200ApplicationJSONExplanationTypeEnum = "expr"
	PostQuery200ApplicationJSONExplanationTypeEnumRule PostQuery200ApplicationJSONExplanationTypeEnum = "rule"
	PostQuery200ApplicationJSONExplanationTypeEnumBody PostQuery200ApplicationJSONExplanationTypeEnum = "body"
)

type PostQuery200ApplicationJSONExplanation struct {
	Locals   []PostQuery200ApplicationJSONExplanationLocals  `json:"locals,omitempty"`
	Node     *PostQuery200ApplicationJSONExplanationNode     `json:"node,omitempty"`
	Op       *PostQuery200ApplicationJSONExplanationOpEnum   `json:"op,omitempty"`
	ParentID *float64                                        `json:"parent_id,omitempty"`
	QueryID  *float64                                        `json:"query_id,omitempty"`
	Type     *PostQuery200ApplicationJSONExplanationTypeEnum `json:"type,omitempty"`
}

type PostQuery200ApplicationJSONMetrics struct {
	CounterServerQueryCacheHit                        *float64 `json:"counter_server_query_cache_hit,omitempty"`
	TimerQueryCompileStageBuildComprehensionIndexNs   *float64 `json:"timer_query_compile_stage_build_comprehension_index_ns,omitempty"`
	TimerQueryCompileStageCheckSafetyNs               *float64 `json:"timer_query_compile_stage_check_safety_ns,omitempty"`
	TimerQueryCompileStageCheckTypesNs                *float64 `json:"timer_query_compile_stage_check_types_ns,omitempty"`
	TimerQueryCompileStageCheckUndefinedFuncsNs       *float64 `json:"timer_query_compile_stage_check_undefined_funcs_ns,omitempty"`
	TimerQueryCompileStageCheckUnsafeBuiltinsNs       *float64 `json:"timer_query_compile_stage_check_unsafe_builtins_ns,omitempty"`
	TimerQueryCompileStageResolveRefsNs               *float64 `json:"timer_query_compile_stage_resolve_refs_ns,omitempty"`
	TimerQueryCompileStageRewriteComprehensionTermsNs *float64 `json:"timer_query_compile_stage_rewrite_comprehension_terms_ns,omitempty"`
	TimerQueryCompileStageRewriteDynamicTermsNs       *float64 `json:"timer_query_compile_stage_rewrite_dynamic_terms_ns,omitempty"`
	TimerQueryCompileStageRewriteExprTermsNs          *float64 `json:"timer_query_compile_stage_rewrite_expr_terms_ns,omitempty"`
	TimerQueryCompileStageRewriteLocalVarsNs          *float64 `json:"timer_query_compile_stage_rewrite_local_vars_ns,omitempty"`
	TimerQueryCompileStageRewriteToCaptureValueNs     *float64 `json:"timer_query_compile_stage_rewrite_to_capture_value_ns,omitempty"`
	TimerQueryCompileStageRewriteWithValuesNs         *float64 `json:"timer_query_compile_stage_rewrite_with_values_ns,omitempty"`
	TimerRegoInputParseNs                             *float64 `json:"timer_rego_input_parse_ns,omitempty"`
	TimerRegoModuleCompileNs                          *float64 `json:"timer_rego_module_compile_ns,omitempty"`
	TimerRegoModuleParseNs                            *float64 `json:"timer_rego_module_parse_ns,omitempty"`
	TimerRegoQueryCompileNs                           *float64 `json:"timer_rego_query_compile_ns,omitempty"`
	TimerRegoQueryEvalNs                              *float64 `json:"timer_rego_query_eval_ns,omitempty"`
	TimerRegoQueryParseNs                             *float64 `json:"timer_rego_query_parse_ns,omitempty"`
	TimerServerHandlerNs                              *float64 `json:"timer_server_handler_ns,omitempty"`
	TimerServerReadBytesNs                            *float64 `json:"timer_server_read_bytes_ns,omitempty"`
}

type PostQuery200ApplicationJSON struct {
	Explanation []PostQuery200ApplicationJSONExplanation `json:"explanation,omitempty"`
	Metrics     *PostQuery200ApplicationJSONMetrics      `json:"metrics,omitempty"`
	Result      []interface{}                            `json:"result,omitempty"`
}

type PostQueryResponse struct {
	FourHundred                       *shared.FourHundred
	ContentType                       string
	StatusCode                        int64
	PostQuery200ApplicationJSONObject *PostQuery200ApplicationJSON
}
