package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePolicyModulePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeletePolicyModuleQueryParams struct {
	Pretty *bool `queryParam:"style=form,explode=true,name=pretty"`
}

type DeletePolicyModuleRequest struct {
	PathParams  DeletePolicyModulePathParams
	QueryParams DeletePolicyModuleQueryParams
}

type DeletePolicyModule200ApplicationJSONExplanationLocalsKey struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type DeletePolicyModule200ApplicationJSONExplanationLocalsValue struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type DeletePolicyModule200ApplicationJSONExplanationLocals struct {
	Key   *DeletePolicyModule200ApplicationJSONExplanationLocalsKey   `json:"key"`
	Value *DeletePolicyModule200ApplicationJSONExplanationLocalsValue `json:"value"`
}

type DeletePolicyModule200ApplicationJSONExplanationNodeTerms struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type DeletePolicyModule200ApplicationJSONExplanationNode struct {
	Index *float64                                                   `json:"index"`
	Terms []DeletePolicyModule200ApplicationJSONExplanationNodeTerms `json:"terms"`
}

type DeletePolicyModule200ApplicationJSONExplanationOpEnum string

const (
	DeletePolicyModule200ApplicationJSONExplanationOpEnumEnter DeletePolicyModule200ApplicationJSONExplanationOpEnum = "enter"
	DeletePolicyModule200ApplicationJSONExplanationOpEnumExit  DeletePolicyModule200ApplicationJSONExplanationOpEnum = "exit"
	DeletePolicyModule200ApplicationJSONExplanationOpEnumEval  DeletePolicyModule200ApplicationJSONExplanationOpEnum = "eval"
	DeletePolicyModule200ApplicationJSONExplanationOpEnumFail  DeletePolicyModule200ApplicationJSONExplanationOpEnum = "fail"
	DeletePolicyModule200ApplicationJSONExplanationOpEnumRedo  DeletePolicyModule200ApplicationJSONExplanationOpEnum = "redo"
)

type DeletePolicyModule200ApplicationJSONExplanationTypeEnum string

const (
	DeletePolicyModule200ApplicationJSONExplanationTypeEnumExpr DeletePolicyModule200ApplicationJSONExplanationTypeEnum = "expr"
	DeletePolicyModule200ApplicationJSONExplanationTypeEnumRule DeletePolicyModule200ApplicationJSONExplanationTypeEnum = "rule"
	DeletePolicyModule200ApplicationJSONExplanationTypeEnumBody DeletePolicyModule200ApplicationJSONExplanationTypeEnum = "body"
)

type DeletePolicyModule200ApplicationJSONExplanation struct {
	Locals   []DeletePolicyModule200ApplicationJSONExplanationLocals  `json:"locals"`
	Node     *DeletePolicyModule200ApplicationJSONExplanationNode     `json:"node"`
	Op       *DeletePolicyModule200ApplicationJSONExplanationOpEnum   `json:"op"`
	ParentID *float64                                                 `json:"parent_id"`
	QueryID  *float64                                                 `json:"query_id"`
	Type     *DeletePolicyModule200ApplicationJSONExplanationTypeEnum `json:"type"`
}

type DeletePolicyModule200ApplicationJSONMetrics struct {
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

type DeletePolicyModule200ApplicationJSONProvenance struct {
	BuildCommit    *string                `json:"build_commit"`
	BuildHostname  *string                `json:"build_hostname"`
	BuildTimestamp *string                `json:"build_timestamp"`
	Bundles        map[string]interface{} `json:"bundles"`
	Version        *string                `json:"version"`
}

type DeletePolicyModule200ApplicationJSON struct {
	Explanation []DeletePolicyModule200ApplicationJSONExplanation `json:"explanation"`
	Metrics     *DeletePolicyModule200ApplicationJSONMetrics      `json:"metrics"`
	Provenance  *DeletePolicyModule200ApplicationJSONProvenance   `json:"provenance"`
	Result      []interface{}                                     `json:"result"`
}

type DeletePolicyModuleResponse struct {
	FourHundred                                *shared.FourHundred
	FourHundredAndFour                         *shared.FourHundredAndFour
	ContentType                                string
	StatusCode                                 int64
	DeletePolicyModule200ApplicationJSONObject *DeletePolicyModule200ApplicationJSON
}
