package operations

import (
	"openapi/pkg/models/shared"
)

type GetQueryQueryParams struct {
	Explain *string `queryParam:"style=form,explode=true,name=explain"`
	Metrics *bool   `queryParam:"style=form,explode=true,name=metrics"`
	Pretty  *bool   `queryParam:"style=form,explode=true,name=pretty"`
	Q       string  `queryParam:"style=form,explode=true,name=q"`
}

type GetQuery200ApplicationJSONExplanationLocalsKey struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

type GetQuery200ApplicationJSONExplanationLocalsValue struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

type GetQuery200ApplicationJSONExplanationLocals struct {
	Key   *GetQuery200ApplicationJSONExplanationLocalsKey   `json:"key,omitempty"`
	Value *GetQuery200ApplicationJSONExplanationLocalsValue `json:"value,omitempty"`
}

type GetQuery200ApplicationJSONExplanationNodeTerms struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetQuery200ApplicationJSONExplanationNode
// The AST element associated with the evaluation step.
// https://godoc.org/github.com/open-policy-agent/opa/ast - AST
type GetQuery200ApplicationJSONExplanationNode struct {
	Index *float64                                         `json:"index,omitempty"`
	Terms []GetQuery200ApplicationJSONExplanationNodeTerms `json:"terms,omitempty"`
}

type GetQuery200ApplicationJSONExplanationOpEnum string

const (
	GetQuery200ApplicationJSONExplanationOpEnumEnter GetQuery200ApplicationJSONExplanationOpEnum = "enter"
	GetQuery200ApplicationJSONExplanationOpEnumExit  GetQuery200ApplicationJSONExplanationOpEnum = "exit"
	GetQuery200ApplicationJSONExplanationOpEnumEval  GetQuery200ApplicationJSONExplanationOpEnum = "eval"
	GetQuery200ApplicationJSONExplanationOpEnumFail  GetQuery200ApplicationJSONExplanationOpEnum = "fail"
	GetQuery200ApplicationJSONExplanationOpEnumRedo  GetQuery200ApplicationJSONExplanationOpEnum = "redo"
)

type GetQuery200ApplicationJSONExplanationTypeEnum string

const (
	GetQuery200ApplicationJSONExplanationTypeEnumExpr GetQuery200ApplicationJSONExplanationTypeEnum = "expr"
	GetQuery200ApplicationJSONExplanationTypeEnumRule GetQuery200ApplicationJSONExplanationTypeEnum = "rule"
	GetQuery200ApplicationJSONExplanationTypeEnumBody GetQuery200ApplicationJSONExplanationTypeEnum = "body"
)

type GetQuery200ApplicationJSONExplanation struct {
	Locals   []GetQuery200ApplicationJSONExplanationLocals  `json:"locals,omitempty"`
	Node     *GetQuery200ApplicationJSONExplanationNode     `json:"node,omitempty"`
	Op       *GetQuery200ApplicationJSONExplanationOpEnum   `json:"op,omitempty"`
	ParentID *float64                                       `json:"parent_id,omitempty"`
	QueryID  *float64                                       `json:"query_id,omitempty"`
	Type     *GetQuery200ApplicationJSONExplanationTypeEnum `json:"type,omitempty"`
}

type GetQuery200ApplicationJSONMetrics struct {
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

type GetQuery200ApplicationJSON struct {
	Explanation []GetQuery200ApplicationJSONExplanation `json:"explanation,omitempty"`
	Metrics     *GetQuery200ApplicationJSONMetrics      `json:"metrics,omitempty"`
	Result      []interface{}                           `json:"result,omitempty"`
}

type GetQueryRequest struct {
	QueryParams GetQueryQueryParams
}

type GetQueryResponse struct {
	FourHundred                      *shared.FourHundred
	ContentType                      string
	StatusCode                       int64
	GetQuery200ApplicationJSONObject *GetQuery200ApplicationJSON
}
