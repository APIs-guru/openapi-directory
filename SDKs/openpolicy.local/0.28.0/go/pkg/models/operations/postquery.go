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
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type PostQuery200ApplicationJSONExplanationLocalsValue struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type PostQuery200ApplicationJSONExplanationLocals struct {
	Key   *PostQuery200ApplicationJSONExplanationLocalsKey   `json:"key"`
	Value *PostQuery200ApplicationJSONExplanationLocalsValue `json:"value"`
}

type PostQuery200ApplicationJSONExplanationNodeTerms struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type PostQuery200ApplicationJSONExplanationNode struct {
	Index *float64                                          `json:"index"`
	Terms []PostQuery200ApplicationJSONExplanationNodeTerms `json:"terms"`
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
	Locals   []PostQuery200ApplicationJSONExplanationLocals  `json:"locals"`
	Node     *PostQuery200ApplicationJSONExplanationNode     `json:"node"`
	Op       *PostQuery200ApplicationJSONExplanationOpEnum   `json:"op"`
	ParentID *float64                                        `json:"parent_id"`
	QueryID  *float64                                        `json:"query_id"`
	Type     *PostQuery200ApplicationJSONExplanationTypeEnum `json:"type"`
}

type PostQuery200ApplicationJSONMetrics struct {
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

type PostQuery200ApplicationJSON struct {
	Explanation []PostQuery200ApplicationJSONExplanation `json:"explanation"`
	Metrics     *PostQuery200ApplicationJSONMetrics      `json:"metrics"`
	Result      []interface{}                            `json:"result"`
}

type PostQueryResponse struct {
	FourHundred                       *shared.FourHundred
	ContentType                       string
	StatusCode                        int64
	PostQuery200ApplicationJSONObject *PostQuery200ApplicationJSON
}
