package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentWithWebHookPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type GetDocumentWithWebHookQueryParams struct {
	Pretty *bool `queryParam:"style=form,explode=true,name=pretty"`
}

type GetDocumentWithWebHookRequest struct {
	PathParams  GetDocumentWithWebHookPathParams
	QueryParams GetDocumentWithWebHookQueryParams
	Request     []byte `request:"mediaType=application/x-yaml"`
}

type GetDocumentWithWebHook200ApplicationJSONExplanationLocalsKey struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type GetDocumentWithWebHook200ApplicationJSONExplanationLocalsValue struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type GetDocumentWithWebHook200ApplicationJSONExplanationLocals struct {
	Key   *GetDocumentWithWebHook200ApplicationJSONExplanationLocalsKey   `json:"key"`
	Value *GetDocumentWithWebHook200ApplicationJSONExplanationLocalsValue `json:"value"`
}

type GetDocumentWithWebHook200ApplicationJSONExplanationNodeTerms struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type GetDocumentWithWebHook200ApplicationJSONExplanationNode struct {
	Index *float64                                                       `json:"index"`
	Terms []GetDocumentWithWebHook200ApplicationJSONExplanationNodeTerms `json:"terms"`
}

type GetDocumentWithWebHook200ApplicationJSONExplanationOpEnum string

const (
	GetDocumentWithWebHook200ApplicationJSONExplanationOpEnumEnter GetDocumentWithWebHook200ApplicationJSONExplanationOpEnum = "enter"
	GetDocumentWithWebHook200ApplicationJSONExplanationOpEnumExit  GetDocumentWithWebHook200ApplicationJSONExplanationOpEnum = "exit"
	GetDocumentWithWebHook200ApplicationJSONExplanationOpEnumEval  GetDocumentWithWebHook200ApplicationJSONExplanationOpEnum = "eval"
	GetDocumentWithWebHook200ApplicationJSONExplanationOpEnumFail  GetDocumentWithWebHook200ApplicationJSONExplanationOpEnum = "fail"
	GetDocumentWithWebHook200ApplicationJSONExplanationOpEnumRedo  GetDocumentWithWebHook200ApplicationJSONExplanationOpEnum = "redo"
)

type GetDocumentWithWebHook200ApplicationJSONExplanationTypeEnum string

const (
	GetDocumentWithWebHook200ApplicationJSONExplanationTypeEnumExpr GetDocumentWithWebHook200ApplicationJSONExplanationTypeEnum = "expr"
	GetDocumentWithWebHook200ApplicationJSONExplanationTypeEnumRule GetDocumentWithWebHook200ApplicationJSONExplanationTypeEnum = "rule"
	GetDocumentWithWebHook200ApplicationJSONExplanationTypeEnumBody GetDocumentWithWebHook200ApplicationJSONExplanationTypeEnum = "body"
)

type GetDocumentWithWebHook200ApplicationJSONExplanation struct {
	Locals   []GetDocumentWithWebHook200ApplicationJSONExplanationLocals  `json:"locals"`
	Node     *GetDocumentWithWebHook200ApplicationJSONExplanationNode     `json:"node"`
	Op       *GetDocumentWithWebHook200ApplicationJSONExplanationOpEnum   `json:"op"`
	ParentID *float64                                                     `json:"parent_id"`
	QueryID  *float64                                                     `json:"query_id"`
	Type     *GetDocumentWithWebHook200ApplicationJSONExplanationTypeEnum `json:"type"`
}

type GetDocumentWithWebHook200ApplicationJSONMetrics struct {
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

type GetDocumentWithWebHook200ApplicationJSONProvenance struct {
	BuildCommit    *string                `json:"build_commit"`
	BuildHostname  *string                `json:"build_hostname"`
	BuildTimestamp *string                `json:"build_timestamp"`
	Bundles        map[string]interface{} `json:"bundles"`
	Version        *string                `json:"version"`
}

type GetDocumentWithWebHook200ApplicationJSON struct {
	Explanation []GetDocumentWithWebHook200ApplicationJSONExplanation `json:"explanation"`
	Metrics     *GetDocumentWithWebHook200ApplicationJSONMetrics      `json:"metrics"`
	Provenance  *GetDocumentWithWebHook200ApplicationJSONProvenance   `json:"provenance"`
	Result      []interface{}                                         `json:"result"`
}

type GetDocumentWithWebHookResponse struct {
	FourHundred                                    *shared.FourHundred
	FourHundredAndFour                             *shared.FourHundredAndFour
	ContentType                                    string
	StatusCode                                     int64
	GetDocumentWithWebHook200ApplicationJSONObject *GetDocumentWithWebHook200ApplicationJSON
}
