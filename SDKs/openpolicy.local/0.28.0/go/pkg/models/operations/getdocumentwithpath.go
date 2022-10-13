package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentWithPathPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type GetDocumentWithPathQueryParams struct {
	Explain    *string `queryParam:"style=form,explode=true,name=explain"`
	Instrument *bool   `queryParam:"style=form,explode=true,name=instrument"`
	Metrics    *bool   `queryParam:"style=form,explode=true,name=metrics"`
	Pretty     *bool   `queryParam:"style=form,explode=true,name=pretty"`
	Provenance *bool   `queryParam:"style=form,explode=true,name=provenance"`
}

type GetDocumentWithPathRequest struct {
	PathParams  GetDocumentWithPathPathParams
	QueryParams GetDocumentWithPathQueryParams
	Request     []byte `request:"mediaType=application/x-yaml"`
}

type GetDocumentWithPath200ApplicationJSONExplanationLocalsKey struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type GetDocumentWithPath200ApplicationJSONExplanationLocalsValue struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type GetDocumentWithPath200ApplicationJSONExplanationLocals struct {
	Key   *GetDocumentWithPath200ApplicationJSONExplanationLocalsKey   `json:"key"`
	Value *GetDocumentWithPath200ApplicationJSONExplanationLocalsValue `json:"value"`
}

type GetDocumentWithPath200ApplicationJSONExplanationNodeTerms struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type GetDocumentWithPath200ApplicationJSONExplanationNode struct {
	Index *float64                                                    `json:"index"`
	Terms []GetDocumentWithPath200ApplicationJSONExplanationNodeTerms `json:"terms"`
}

type GetDocumentWithPath200ApplicationJSONExplanationOpEnum string

const (
	GetDocumentWithPath200ApplicationJSONExplanationOpEnumEnter GetDocumentWithPath200ApplicationJSONExplanationOpEnum = "enter"
	GetDocumentWithPath200ApplicationJSONExplanationOpEnumExit  GetDocumentWithPath200ApplicationJSONExplanationOpEnum = "exit"
	GetDocumentWithPath200ApplicationJSONExplanationOpEnumEval  GetDocumentWithPath200ApplicationJSONExplanationOpEnum = "eval"
	GetDocumentWithPath200ApplicationJSONExplanationOpEnumFail  GetDocumentWithPath200ApplicationJSONExplanationOpEnum = "fail"
	GetDocumentWithPath200ApplicationJSONExplanationOpEnumRedo  GetDocumentWithPath200ApplicationJSONExplanationOpEnum = "redo"
)

type GetDocumentWithPath200ApplicationJSONExplanationTypeEnum string

const (
	GetDocumentWithPath200ApplicationJSONExplanationTypeEnumExpr GetDocumentWithPath200ApplicationJSONExplanationTypeEnum = "expr"
	GetDocumentWithPath200ApplicationJSONExplanationTypeEnumRule GetDocumentWithPath200ApplicationJSONExplanationTypeEnum = "rule"
	GetDocumentWithPath200ApplicationJSONExplanationTypeEnumBody GetDocumentWithPath200ApplicationJSONExplanationTypeEnum = "body"
)

type GetDocumentWithPath200ApplicationJSONExplanation struct {
	Locals   []GetDocumentWithPath200ApplicationJSONExplanationLocals  `json:"locals"`
	Node     *GetDocumentWithPath200ApplicationJSONExplanationNode     `json:"node"`
	Op       *GetDocumentWithPath200ApplicationJSONExplanationOpEnum   `json:"op"`
	ParentID *float64                                                  `json:"parent_id"`
	QueryID  *float64                                                  `json:"query_id"`
	Type     *GetDocumentWithPath200ApplicationJSONExplanationTypeEnum `json:"type"`
}

type GetDocumentWithPath200ApplicationJSONMetrics struct {
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

type GetDocumentWithPath200ApplicationJSONProvenance struct {
	BuildCommit    *string                `json:"build_commit"`
	BuildHostname  *string                `json:"build_hostname"`
	BuildTimestamp *string                `json:"build_timestamp"`
	Bundles        map[string]interface{} `json:"bundles"`
	Version        *string                `json:"version"`
}

type GetDocumentWithPath200ApplicationJSON struct {
	Explanation []GetDocumentWithPath200ApplicationJSONExplanation `json:"explanation"`
	Metrics     *GetDocumentWithPath200ApplicationJSONMetrics      `json:"metrics"`
	Provenance  *GetDocumentWithPath200ApplicationJSONProvenance   `json:"provenance"`
	Result      []interface{}                                      `json:"result"`
}

type GetDocumentWithPathResponse struct {
	FourHundred                                 *shared.FourHundred
	ContentType                                 string
	StatusCode                                  int64
	GetDocumentWithPath200ApplicationJSONObject *GetDocumentWithPath200ApplicationJSON
}
