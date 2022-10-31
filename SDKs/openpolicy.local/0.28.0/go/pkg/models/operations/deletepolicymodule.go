package operations

import (
"openapi/pkg/models/shared")

type DeletePolicyModulePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeletePolicyModuleQueryParams struct {
    Pretty *bool `queryParam:"style=form,explode=true,name=pretty"`
    
}

type DeletePolicyModuleRequest struct {
    PathParams DeletePolicyModulePathParams 
    QueryParams DeletePolicyModuleQueryParams 
    
}

type DeletePolicyModule200ApplicationJSONExplanationLocalsKey struct {
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type DeletePolicyModule200ApplicationJSONExplanationLocalsValue struct {
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type DeletePolicyModule200ApplicationJSONExplanationLocals struct {
    Key *DeletePolicyModule200ApplicationJSONExplanationLocalsKey `json:"key,omitempty"`
    Value *DeletePolicyModule200ApplicationJSONExplanationLocalsValue `json:"value,omitempty"`
    
}

type DeletePolicyModule200ApplicationJSONExplanationNodeTerms struct {
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type DeletePolicyModule200ApplicationJSONExplanationNode struct {
    Index *float64 `json:"index,omitempty"`
    Terms []DeletePolicyModule200ApplicationJSONExplanationNodeTerms `json:"terms,omitempty"`
    
}


type DeletePolicyModule200ApplicationJSONExplanationOpEnum string

const (
    DeletePolicyModule200ApplicationJSONExplanationOpEnumEnter DeletePolicyModule200ApplicationJSONExplanationOpEnum = "enter"
DeletePolicyModule200ApplicationJSONExplanationOpEnumExit DeletePolicyModule200ApplicationJSONExplanationOpEnum = "exit"
DeletePolicyModule200ApplicationJSONExplanationOpEnumEval DeletePolicyModule200ApplicationJSONExplanationOpEnum = "eval"
DeletePolicyModule200ApplicationJSONExplanationOpEnumFail DeletePolicyModule200ApplicationJSONExplanationOpEnum = "fail"
DeletePolicyModule200ApplicationJSONExplanationOpEnumRedo DeletePolicyModule200ApplicationJSONExplanationOpEnum = "redo"
)



type DeletePolicyModule200ApplicationJSONExplanationTypeEnum string

const (
    DeletePolicyModule200ApplicationJSONExplanationTypeEnumExpr DeletePolicyModule200ApplicationJSONExplanationTypeEnum = "expr"
DeletePolicyModule200ApplicationJSONExplanationTypeEnumRule DeletePolicyModule200ApplicationJSONExplanationTypeEnum = "rule"
DeletePolicyModule200ApplicationJSONExplanationTypeEnumBody DeletePolicyModule200ApplicationJSONExplanationTypeEnum = "body"
)


type DeletePolicyModule200ApplicationJSONExplanation struct {
    Locals []DeletePolicyModule200ApplicationJSONExplanationLocals `json:"locals,omitempty"`
    Node *DeletePolicyModule200ApplicationJSONExplanationNode `json:"node,omitempty"`
    Op *DeletePolicyModule200ApplicationJSONExplanationOpEnum `json:"op,omitempty"`
    ParentID *float64 `json:"parent_id,omitempty"`
    QueryID *float64 `json:"query_id,omitempty"`
    Type *DeletePolicyModule200ApplicationJSONExplanationTypeEnum `json:"type,omitempty"`
    
}

type DeletePolicyModule200ApplicationJSONMetrics struct {
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

type DeletePolicyModule200ApplicationJSONProvenance struct {
    BuildCommit *string `json:"build_commit,omitempty"`
    BuildHostname *string `json:"build_hostname,omitempty"`
    BuildTimestamp *string `json:"build_timestamp,omitempty"`
    Bundles map[string]interface{} `json:"bundles,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

type DeletePolicyModule200ApplicationJSON struct {
    Explanation []DeletePolicyModule200ApplicationJSONExplanation `json:"explanation,omitempty"`
    Metrics *DeletePolicyModule200ApplicationJSONMetrics `json:"metrics,omitempty"`
    Provenance *DeletePolicyModule200ApplicationJSONProvenance `json:"provenance,omitempty"`
    Result []interface{} `json:"result,omitempty"`
    
}

type DeletePolicyModuleResponse struct {
    FourHundred *shared.FourHundred 
    FourHundredAndFour *shared.FourHundredAndFour 
    ContentType string 
    StatusCode int64 
    DeletePolicyModule200ApplicationJSONObject *DeletePolicyModule200ApplicationJSON 
    
}

