package operations

import (
	"openapi/pkg/models/shared"
)

type PostCompileQueryParams struct {
	Explain    *string `queryParam:"style=form,explode=true,name=explain"`
	Instrument *bool   `queryParam:"style=form,explode=true,name=instrument"`
	Metrics    *bool   `queryParam:"style=form,explode=true,name=metrics"`
	Pretty     *bool   `queryParam:"style=form,explode=true,name=pretty"`
}

type PostCompileRequest struct {
	QueryParams PostCompileQueryParams
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type PostCompile200ApplicationJSONExplanationLocalsKey struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type PostCompile200ApplicationJSONExplanationLocalsValue struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type PostCompile200ApplicationJSONExplanationLocals struct {
	Key   *PostCompile200ApplicationJSONExplanationLocalsKey   `json:"key"`
	Value *PostCompile200ApplicationJSONExplanationLocalsValue `json:"value"`
}

type PostCompile200ApplicationJSONExplanationNodeTerms struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type PostCompile200ApplicationJSONExplanationNode struct {
	Index *float64                                            `json:"index"`
	Terms []PostCompile200ApplicationJSONExplanationNodeTerms `json:"terms"`
}

type PostCompile200ApplicationJSONExplanationOpEnum string

const (
	PostCompile200ApplicationJSONExplanationOpEnumEnter PostCompile200ApplicationJSONExplanationOpEnum = "enter"
	PostCompile200ApplicationJSONExplanationOpEnumExit  PostCompile200ApplicationJSONExplanationOpEnum = "exit"
	PostCompile200ApplicationJSONExplanationOpEnumEval  PostCompile200ApplicationJSONExplanationOpEnum = "eval"
	PostCompile200ApplicationJSONExplanationOpEnumFail  PostCompile200ApplicationJSONExplanationOpEnum = "fail"
	PostCompile200ApplicationJSONExplanationOpEnumRedo  PostCompile200ApplicationJSONExplanationOpEnum = "redo"
)

type PostCompile200ApplicationJSONExplanationTypeEnum string

const (
	PostCompile200ApplicationJSONExplanationTypeEnumExpr PostCompile200ApplicationJSONExplanationTypeEnum = "expr"
	PostCompile200ApplicationJSONExplanationTypeEnumRule PostCompile200ApplicationJSONExplanationTypeEnum = "rule"
	PostCompile200ApplicationJSONExplanationTypeEnumBody PostCompile200ApplicationJSONExplanationTypeEnum = "body"
)

type PostCompile200ApplicationJSONExplanation struct {
	Locals   []PostCompile200ApplicationJSONExplanationLocals  `json:"locals"`
	Node     *PostCompile200ApplicationJSONExplanationNode     `json:"node"`
	Op       *PostCompile200ApplicationJSONExplanationOpEnum   `json:"op"`
	ParentID *float64                                          `json:"parent_id"`
	QueryID  *float64                                          `json:"query_id"`
	Type     *PostCompile200ApplicationJSONExplanationTypeEnum `json:"type"`
}

type PostCompile200ApplicationJSONMetrics struct {
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

type PostCompile200ApplicationJSON struct {
	Explanation []PostCompile200ApplicationJSONExplanation `json:"explanation"`
	Metrics     *PostCompile200ApplicationJSONMetrics      `json:"metrics"`
	Result      []interface{}                              `json:"result"`
}

type PostCompileResponse struct {
	FourHundred                         *shared.FourHundred
	ContentType                         string
	StatusCode                          int64
	PostCompile200ApplicationJSONObject *PostCompile200ApplicationJSON
}
