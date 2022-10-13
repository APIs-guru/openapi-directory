package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type GetDocumentQueryParams struct {
	Explain    *string                `queryParam:"style=form,explode=true,name=explain"`
	Input      map[string]interface{} `queryParam:"style=form,explode=true,name=input"`
	Instrument *bool                  `queryParam:"style=form,explode=true,name=instrument"`
	Metrics    *bool                  `queryParam:"style=form,explode=true,name=metrics"`
	Pretty     *bool                  `queryParam:"style=form,explode=true,name=pretty"`
	Provenance *bool                  `queryParam:"style=form,explode=true,name=provenance"`
}

type GetDocumentRequest struct {
	PathParams  GetDocumentPathParams
	QueryParams GetDocumentQueryParams
}

type GetDocument200ApplicationJSONExplanationLocalsKey struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type GetDocument200ApplicationJSONExplanationLocalsValue struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type GetDocument200ApplicationJSONExplanationLocals struct {
	Key   *GetDocument200ApplicationJSONExplanationLocalsKey   `json:"key"`
	Value *GetDocument200ApplicationJSONExplanationLocalsValue `json:"value"`
}

type GetDocument200ApplicationJSONExplanationNodeTerms struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type GetDocument200ApplicationJSONExplanationNode struct {
	Index *float64                                            `json:"index"`
	Terms []GetDocument200ApplicationJSONExplanationNodeTerms `json:"terms"`
}

type GetDocument200ApplicationJSONExplanationOpEnum string

const (
	GetDocument200ApplicationJSONExplanationOpEnumEnter GetDocument200ApplicationJSONExplanationOpEnum = "enter"
	GetDocument200ApplicationJSONExplanationOpEnumExit  GetDocument200ApplicationJSONExplanationOpEnum = "exit"
	GetDocument200ApplicationJSONExplanationOpEnumEval  GetDocument200ApplicationJSONExplanationOpEnum = "eval"
	GetDocument200ApplicationJSONExplanationOpEnumFail  GetDocument200ApplicationJSONExplanationOpEnum = "fail"
	GetDocument200ApplicationJSONExplanationOpEnumRedo  GetDocument200ApplicationJSONExplanationOpEnum = "redo"
)

type GetDocument200ApplicationJSONExplanationTypeEnum string

const (
	GetDocument200ApplicationJSONExplanationTypeEnumExpr GetDocument200ApplicationJSONExplanationTypeEnum = "expr"
	GetDocument200ApplicationJSONExplanationTypeEnumRule GetDocument200ApplicationJSONExplanationTypeEnum = "rule"
	GetDocument200ApplicationJSONExplanationTypeEnumBody GetDocument200ApplicationJSONExplanationTypeEnum = "body"
)

type GetDocument200ApplicationJSONExplanation struct {
	Locals   []GetDocument200ApplicationJSONExplanationLocals  `json:"locals"`
	Node     *GetDocument200ApplicationJSONExplanationNode     `json:"node"`
	Op       *GetDocument200ApplicationJSONExplanationOpEnum   `json:"op"`
	ParentID *float64                                          `json:"parent_id"`
	QueryID  *float64                                          `json:"query_id"`
	Type     *GetDocument200ApplicationJSONExplanationTypeEnum `json:"type"`
}

type GetDocument200ApplicationJSONMetrics struct {
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

type GetDocument200ApplicationJSONProvenance struct {
	BuildCommit    *string                `json:"build_commit"`
	BuildHostname  *string                `json:"build_hostname"`
	BuildTimestamp *string                `json:"build_timestamp"`
	Bundles        map[string]interface{} `json:"bundles"`
	Version        *string                `json:"version"`
}

type GetDocument200ApplicationJSON struct {
	Explanation []GetDocument200ApplicationJSONExplanation `json:"explanation"`
	Metrics     *GetDocument200ApplicationJSONMetrics      `json:"metrics"`
	Provenance  *GetDocument200ApplicationJSONProvenance   `json:"provenance"`
	Result      []interface{}                              `json:"result"`
}

type GetDocumentResponse struct {
	FourHundred                         *shared.FourHundred
	ContentType                         string
	StatusCode                          int64
	GetDocument200ApplicationJSONObject *GetDocument200ApplicationJSON
}
