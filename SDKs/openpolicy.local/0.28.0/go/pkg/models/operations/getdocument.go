package operations

import (
"openapi/pkg/models/shared")

type GetDocumentPathParams struct {
    Path string `pathParam:"style=simple,explode=false,name=path"`
    
}

type GetDocumentQueryParams struct {
    Explain *string `queryParam:"style=form,explode=true,name=explain"`
    Input map[string]interface{} `queryParam:"style=form,explode=true,name=input"`
    Instrument *bool `queryParam:"style=form,explode=true,name=instrument"`
    Metrics *bool `queryParam:"style=form,explode=true,name=metrics"`
    Pretty *bool `queryParam:"style=form,explode=true,name=pretty"`
    Provenance *bool `queryParam:"style=form,explode=true,name=provenance"`
    
}

type GetDocumentRequest struct {
    PathParams GetDocumentPathParams 
    QueryParams GetDocumentQueryParams 
    
}

type GetDocument200ApplicationJSONExplanationLocalsKey struct {
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type GetDocument200ApplicationJSONExplanationLocalsValue struct {
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type GetDocument200ApplicationJSONExplanationLocals struct {
    Key *GetDocument200ApplicationJSONExplanationLocalsKey `json:"key,omitempty"`
    Value *GetDocument200ApplicationJSONExplanationLocalsValue `json:"value,omitempty"`
    
}

type GetDocument200ApplicationJSONExplanationNodeTerms struct {
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type GetDocument200ApplicationJSONExplanationNode struct {
    Index *float64 `json:"index,omitempty"`
    Terms []GetDocument200ApplicationJSONExplanationNodeTerms `json:"terms,omitempty"`
    
}


type GetDocument200ApplicationJSONExplanationOpEnum string

const (
    GetDocument200ApplicationJSONExplanationOpEnumEnter GetDocument200ApplicationJSONExplanationOpEnum = "enter"
GetDocument200ApplicationJSONExplanationOpEnumExit GetDocument200ApplicationJSONExplanationOpEnum = "exit"
GetDocument200ApplicationJSONExplanationOpEnumEval GetDocument200ApplicationJSONExplanationOpEnum = "eval"
GetDocument200ApplicationJSONExplanationOpEnumFail GetDocument200ApplicationJSONExplanationOpEnum = "fail"
GetDocument200ApplicationJSONExplanationOpEnumRedo GetDocument200ApplicationJSONExplanationOpEnum = "redo"
)



type GetDocument200ApplicationJSONExplanationTypeEnum string

const (
    GetDocument200ApplicationJSONExplanationTypeEnumExpr GetDocument200ApplicationJSONExplanationTypeEnum = "expr"
GetDocument200ApplicationJSONExplanationTypeEnumRule GetDocument200ApplicationJSONExplanationTypeEnum = "rule"
GetDocument200ApplicationJSONExplanationTypeEnumBody GetDocument200ApplicationJSONExplanationTypeEnum = "body"
)


type GetDocument200ApplicationJSONExplanation struct {
    Locals []GetDocument200ApplicationJSONExplanationLocals `json:"locals,omitempty"`
    Node *GetDocument200ApplicationJSONExplanationNode `json:"node,omitempty"`
    Op *GetDocument200ApplicationJSONExplanationOpEnum `json:"op,omitempty"`
    ParentID *float64 `json:"parent_id,omitempty"`
    QueryID *float64 `json:"query_id,omitempty"`
    Type *GetDocument200ApplicationJSONExplanationTypeEnum `json:"type,omitempty"`
    
}

type GetDocument200ApplicationJSONMetrics struct {
    CounterServerQueryCacheHit *float64 `json:"counter_server_query_cache_hit,omitempty"`
    TimerQueryCompileStageBuildComprehensionIndexNs *float64 `json:"timer_query_compile_stage_build_comprehension_index_ns,omitempty"`
    TimerQueryCompileStageCheckSafetyNs *float64 `json:"timer_query_compile_stage_check_safety_ns,omitempty"`
    TimerQueryCompileStageCheckTypesNs *float64 `json:"timer_query_compile_stage_check_types_ns,omitempty"`
    TimerQueryCompileStageCheckUndefinedFuncsNs *float64 `json:"timer_query_compile_stage_check_undefined_funcs_ns,omitempty"`
    TimerQueryCompileStageCheckUnsafeBuiltinsNs *float64 `json:"timer_query_compile_stage_check_unsafe_builtins_ns,omitempty"`
    TimerQueryCompileStageResolveRefsNs *float64 `json:"timer_query_compile_stage_resolve_refs_ns,omitempty"`
    TimerQueryCompileStageRewriteComprehensionTermsNs *float64 `json:"timer_query_compile_stage_rewrite_comprehension_terms_ns,omitempty"`
    TimerQueryCompileStageRewriteDynamicTermsNs *float64 `json:"timer_query_compile_stage_rewrite_dynamic_terms_ns,omitempty"`
    TimerQueryCompileStageRewriteExprTermsNs *float64 `json:"timer_query_compile_stage_rewrite_expr_terms_ns,omitempty"`
    TimerQueryCompileStageRewriteLocalVarsNs *float64 `json:"timer_query_compile_stage_rewrite_local_vars_ns,omitempty"`
    TimerQueryCompileStageRewriteToCaptureValueNs *float64 `json:"timer_query_compile_stage_rewrite_to_capture_value_ns,omitempty"`
    TimerQueryCompileStageRewriteWithValuesNs *float64 `json:"timer_query_compile_stage_rewrite_with_values_ns,omitempty"`
    TimerRegoInputParseNs *float64 `json:"timer_rego_input_parse_ns,omitempty"`
    TimerRegoModuleCompileNs *float64 `json:"timer_rego_module_compile_ns,omitempty"`
    TimerRegoModuleParseNs *float64 `json:"timer_rego_module_parse_ns,omitempty"`
    TimerRegoQueryCompileNs *float64 `json:"timer_rego_query_compile_ns,omitempty"`
    TimerRegoQueryEvalNs *float64 `json:"timer_rego_query_eval_ns,omitempty"`
    TimerRegoQueryParseNs *float64 `json:"timer_rego_query_parse_ns,omitempty"`
    TimerServerHandlerNs *float64 `json:"timer_server_handler_ns,omitempty"`
    TimerServerReadBytesNs *float64 `json:"timer_server_read_bytes_ns,omitempty"`
    
}

type GetDocument200ApplicationJSONProvenance struct {
    BuildCommit *string `json:"build_commit,omitempty"`
    BuildHostname *string `json:"build_hostname,omitempty"`
    BuildTimestamp *string `json:"build_timestamp,omitempty"`
    Bundles map[string]interface{} `json:"bundles,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

type GetDocument200ApplicationJSON struct {
    Explanation []GetDocument200ApplicationJSONExplanation `json:"explanation,omitempty"`
    Metrics *GetDocument200ApplicationJSONMetrics `json:"metrics,omitempty"`
    Provenance *GetDocument200ApplicationJSONProvenance `json:"provenance,omitempty"`
    Result []interface{} `json:"result,omitempty"`
    
}

type GetDocumentResponse struct {
    FourHundred *shared.FourHundred 
    ContentType string 
    StatusCode int64 
    GetDocument200ApplicationJSONObject *GetDocument200ApplicationJSON 
    
}

