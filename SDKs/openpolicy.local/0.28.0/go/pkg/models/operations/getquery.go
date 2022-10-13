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

type GetQueryRequest struct {
	QueryParams GetQueryQueryParams
}

type GetQuery200ApplicationJSONExplanationLocalsKey struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type GetQuery200ApplicationJSONExplanationLocalsValue struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type GetQuery200ApplicationJSONExplanationLocals struct {
	Key   *GetQuery200ApplicationJSONExplanationLocalsKey   `json:"key"`
	Value *GetQuery200ApplicationJSONExplanationLocalsValue `json:"value"`
}

type GetQuery200ApplicationJSONExplanationNodeTerms struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type GetQuery200ApplicationJSONExplanationNode struct {
	Index *float64                                         `json:"index"`
	Terms []GetQuery200ApplicationJSONExplanationNodeTerms `json:"terms"`
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
	Locals   []GetQuery200ApplicationJSONExplanationLocals  `json:"locals"`
	Node     *GetQuery200ApplicationJSONExplanationNode     `json:"node"`
	Op       *GetQuery200ApplicationJSONExplanationOpEnum   `json:"op"`
	ParentID *float64                                       `json:"parent_id"`
	QueryID  *float64                                       `json:"query_id"`
	Type     *GetQuery200ApplicationJSONExplanationTypeEnum `json:"type"`
}

type GetQuery200ApplicationJSONMetrics struct {
	CounterServerQueryCacheHit                        *float64 `json:"counter_server_query_cache_hit"`
	TimerQueryCompileStageBuildComprehensionIndexNs   *float64 `json:"timer_query_compile_stage_build_comprehension_index_ns"`
	TimerQueryCompileStageCheckSafetyNs               *float64 `json:"timer_query_compile_stage_check_safety_ns"`
	TimerQueryCompileStageCheckTypesNs                *float64 `json:"timer_query_compile_stage_check_types_ns"`
	TimerQueryCompileStageCheckUndefinedFuncsNs       *float64 `json:"timer_query_compile_stage_check_undefined_funcs_ns"`
	TimerQueryCompileStageCheckUnsafeBuiltinsNs       *float64 `json:"timer_query_compile_stage_check_unsafe_builtins_ns"`
	TimerQueryCompileStageResolveRefsNs               *float64 `json:"timer_query_compile_stage_resolve_refs_ns"`
	TimerQueryCompileStageRewriteComprehensionTermsNs *float64 `json:"timer_query_compile_stage_rewrite_comprehension_terms_ns"`
	TimerQueryCompileStageRewriteDynamicTermsNs       *float64 `json:"timer_query_compile_stage_rewrite_dynamic_terms_ns"`
	TimerQueryCompileStageRewriteExprTermsNs          *float64 `json:"timer_query_compile_stage_rewrite_expr_terms_ns"`
	TimerQueryCompileStageRewriteLocalVarsNs          *float64 `json:"timer_query_compile_stage_rewrite_local_vars_ns"`
	TimerQueryCompileStageRewriteToCaptureValueNs     *float64 `json:"timer_query_compile_stage_rewrite_to_capture_value_ns"`
	TimerQueryCompileStageRewriteWithValuesNs         *float64 `json:"timer_query_compile_stage_rewrite_with_values_ns"`
	TimerRegoInputParseNs                             *float64 `json:"timer_rego_input_parse_ns"`
	TimerRegoModuleCompileNs                          *float64 `json:"timer_rego_module_compile_ns"`
	TimerRegoModuleParseNs                            *float64 `json:"timer_rego_module_parse_ns"`
	TimerRegoQueryCompileNs                           *float64 `json:"timer_rego_query_compile_ns"`
	TimerRegoQueryEvalNs                              *float64 `json:"timer_rego_query_eval_ns"`
	TimerRegoQueryParseNs                             *float64 `json:"timer_rego_query_parse_ns"`
	TimerServerHandlerNs                              *float64 `json:"timer_server_handler_ns"`
	TimerServerReadBytesNs                            *float64 `json:"timer_server_read_bytes_ns"`
}

type GetQuery200ApplicationJSON struct {
	Explanation []GetQuery200ApplicationJSONExplanation `json:"explanation"`
	Metrics     *GetQuery200ApplicationJSONMetrics      `json:"metrics"`
	Result      []interface{}                           `json:"result"`
}

type GetQueryResponse struct {
	FourHundred                      *shared.FourHundred
	ContentType                      string
	StatusCode                       int64
	GetQuery200ApplicationJSONObject *GetQuery200ApplicationJSON
}
