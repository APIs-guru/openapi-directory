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
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

type GetDocumentWithPath200ApplicationJSONExplanationLocalsValue struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

type GetDocumentWithPath200ApplicationJSONExplanationLocals struct {
	Key   *GetDocumentWithPath200ApplicationJSONExplanationLocalsKey   `json:"key,omitempty"`
	Value *GetDocumentWithPath200ApplicationJSONExplanationLocalsValue `json:"value,omitempty"`
}

type GetDocumentWithPath200ApplicationJSONExplanationNodeTerms struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

type GetDocumentWithPath200ApplicationJSONExplanationNode struct {
	Index *float64                                                    `json:"index,omitempty"`
	Terms []GetDocumentWithPath200ApplicationJSONExplanationNodeTerms `json:"terms,omitempty"`
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
	Locals   []GetDocumentWithPath200ApplicationJSONExplanationLocals  `json:"locals,omitempty"`
	Node     *GetDocumentWithPath200ApplicationJSONExplanationNode     `json:"node,omitempty"`
	Op       *GetDocumentWithPath200ApplicationJSONExplanationOpEnum   `json:"op,omitempty"`
	ParentID *float64                                                  `json:"parent_id,omitempty"`
	QueryID  *float64                                                  `json:"query_id,omitempty"`
	Type     *GetDocumentWithPath200ApplicationJSONExplanationTypeEnum `json:"type,omitempty"`
}

type GetDocumentWithPath200ApplicationJSONMetrics struct {
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

type GetDocumentWithPath200ApplicationJSONProvenance struct {
	BuildCommit    *string                `json:"build_commit,omitempty"`
	BuildHostname  *string                `json:"build_hostname,omitempty"`
	BuildTimestamp *string                `json:"build_timestamp,omitempty"`
	Bundles        map[string]interface{} `json:"bundles,omitempty"`
	Version        *string                `json:"version,omitempty"`
}

type GetDocumentWithPath200ApplicationJSON struct {
	Explanation []GetDocumentWithPath200ApplicationJSONExplanation `json:"explanation,omitempty"`
	Metrics     *GetDocumentWithPath200ApplicationJSONMetrics      `json:"metrics,omitempty"`
	Provenance  *GetDocumentWithPath200ApplicationJSONProvenance   `json:"provenance,omitempty"`
	Result      []interface{}                                      `json:"result,omitempty"`
}

type GetDocumentWithPathResponse struct {
	FourHundred                                 *shared.FourHundred
	ContentType                                 string
	StatusCode                                  int64
	GetDocumentWithPath200ApplicationJSONObject *GetDocumentWithPath200ApplicationJSON
}
