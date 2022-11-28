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

type GetDocumentWithWebHook200ApplicationJSONExplanationLocalsKey struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

type GetDocumentWithWebHook200ApplicationJSONExplanationLocalsValue struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

type GetDocumentWithWebHook200ApplicationJSONExplanationLocals struct {
	Key   *GetDocumentWithWebHook200ApplicationJSONExplanationLocalsKey   `json:"key,omitempty"`
	Value *GetDocumentWithWebHook200ApplicationJSONExplanationLocalsValue `json:"value,omitempty"`
}

type GetDocumentWithWebHook200ApplicationJSONExplanationNodeTerms struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetDocumentWithWebHook200ApplicationJSONExplanationNode
// The AST element associated with the evaluation step.
// https://godoc.org/github.com/open-policy-agent/opa/ast - AST
type GetDocumentWithWebHook200ApplicationJSONExplanationNode struct {
	Index *float64                                                       `json:"index,omitempty"`
	Terms []GetDocumentWithWebHook200ApplicationJSONExplanationNodeTerms `json:"terms,omitempty"`
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
	Locals   []GetDocumentWithWebHook200ApplicationJSONExplanationLocals  `json:"locals,omitempty"`
	Node     *GetDocumentWithWebHook200ApplicationJSONExplanationNode     `json:"node,omitempty"`
	Op       *GetDocumentWithWebHook200ApplicationJSONExplanationOpEnum   `json:"op,omitempty"`
	ParentID *float64                                                     `json:"parent_id,omitempty"`
	QueryID  *float64                                                     `json:"query_id,omitempty"`
	Type     *GetDocumentWithWebHook200ApplicationJSONExplanationTypeEnum `json:"type,omitempty"`
}

type GetDocumentWithWebHook200ApplicationJSONMetrics struct {
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

type GetDocumentWithWebHook200ApplicationJSONProvenance struct {
	BuildCommit    *string                `json:"build_commit,omitempty"`
	BuildHostname  *string                `json:"build_hostname,omitempty"`
	BuildTimestamp *string                `json:"build_timestamp,omitempty"`
	Bundles        map[string]interface{} `json:"bundles,omitempty"`
	Version        *string                `json:"version,omitempty"`
}

type GetDocumentWithWebHook200ApplicationJSON struct {
	Explanation []GetDocumentWithWebHook200ApplicationJSONExplanation `json:"explanation,omitempty"`
	Metrics     *GetDocumentWithWebHook200ApplicationJSONMetrics      `json:"metrics,omitempty"`
	Provenance  *GetDocumentWithWebHook200ApplicationJSONProvenance   `json:"provenance,omitempty"`
	Result      []interface{}                                         `json:"result,omitempty"`
}

type GetDocumentWithWebHookRequest struct {
	PathParams  GetDocumentWithWebHookPathParams
	QueryParams GetDocumentWithWebHookQueryParams
	Request     []byte `request:"mediaType=application/x-yaml"`
}

type GetDocumentWithWebHookResponse struct {
	FourHundred                                    *shared.FourHundred
	FourHundredAndFour                             *shared.FourHundredAndFour
	ContentType                                    string
	StatusCode                                     int64
	GetDocumentWithWebHook200ApplicationJSONObject *GetDocumentWithWebHook200ApplicationJSON
}
