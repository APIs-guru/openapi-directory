import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeletePolicyModulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeletePolicyModuleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty?: boolean;
}


export class DeletePolicyModule200ApplicationJsonExplanationLocalsKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class DeletePolicyModule200ApplicationJsonExplanationLocalsValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class DeletePolicyModule200ApplicationJsonExplanationLocals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: DeletePolicyModule200ApplicationJsonExplanationLocalsKey;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: DeletePolicyModule200ApplicationJsonExplanationLocalsValue;
}


export class DeletePolicyModule200ApplicationJsonExplanationNodeTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// DeletePolicyModule200ApplicationJsonExplanationNode
/** 
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
export class DeletePolicyModule200ApplicationJsonExplanationNode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=terms", elemType: DeletePolicyModule200ApplicationJsonExplanationNodeTerms })
  terms?: DeletePolicyModule200ApplicationJsonExplanationNodeTerms[];
}

export enum DeletePolicyModule200ApplicationJsonExplanationOpEnum {
    Enter = "enter",
    Exit = "exit",
    Eval = "eval",
    Fail = "fail",
    Redo = "redo"
}

export enum DeletePolicyModule200ApplicationJsonExplanationTypeEnum {
    Expr = "expr",
    Rule = "rule",
    Body = "body"
}


export class DeletePolicyModule200ApplicationJsonExplanation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locals", elemType: DeletePolicyModule200ApplicationJsonExplanationLocals })
  locals?: DeletePolicyModule200ApplicationJsonExplanationLocals[];

  @SpeakeasyMetadata({ data: "json, name=node" })
  node?: DeletePolicyModule200ApplicationJsonExplanationNode;

  @SpeakeasyMetadata({ data: "json, name=op" })
  op?: DeletePolicyModule200ApplicationJsonExplanationOpEnum;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=query_id" })
  queryId?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DeletePolicyModule200ApplicationJsonExplanationTypeEnum;
}


export class DeletePolicyModule200ApplicationJsonMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=counter_server_query_cache_hit" })
  counterServerQueryCacheHit?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_build_comprehension_index_ns" })
  timerQueryCompileStageBuildComprehensionIndexNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_safety_ns" })
  timerQueryCompileStageCheckSafetyNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_types_ns" })
  timerQueryCompileStageCheckTypesNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_undefined_funcs_ns" })
  timerQueryCompileStageCheckUndefinedFuncsNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_check_unsafe_builtins_ns" })
  timerQueryCompileStageCheckUnsafeBuiltinsNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_resolve_refs_ns" })
  timerQueryCompileStageResolveRefsNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_comprehension_terms_ns" })
  timerQueryCompileStageRewriteComprehensionTermsNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_dynamic_terms_ns" })
  timerQueryCompileStageRewriteDynamicTermsNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_expr_terms_ns" })
  timerQueryCompileStageRewriteExprTermsNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_local_vars_ns" })
  timerQueryCompileStageRewriteLocalVarsNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_to_capture_value_ns" })
  timerQueryCompileStageRewriteToCaptureValueNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_query_compile_stage_rewrite_with_values_ns" })
  timerQueryCompileStageRewriteWithValuesNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_rego_input_parse_ns" })
  timerRegoInputParseNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_rego_module_compile_ns" })
  timerRegoModuleCompileNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_rego_module_parse_ns" })
  timerRegoModuleParseNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_rego_query_compile_ns" })
  timerRegoQueryCompileNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_rego_query_eval_ns" })
  timerRegoQueryEvalNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_rego_query_parse_ns" })
  timerRegoQueryParseNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_server_handler_ns" })
  timerServerHandlerNs?: number;

  @SpeakeasyMetadata({ data: "json, name=timer_server_read_bytes_ns" })
  timerServerReadBytesNs?: number;
}


export class DeletePolicyModule200ApplicationJsonProvenance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_commit" })
  buildCommit?: string;

  @SpeakeasyMetadata({ data: "json, name=build_hostname" })
  buildHostname?: string;

  @SpeakeasyMetadata({ data: "json, name=build_timestamp" })
  buildTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=bundles" })
  bundles?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class DeletePolicyModule200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explanation", elemType: DeletePolicyModule200ApplicationJsonExplanation })
  explanation?: DeletePolicyModule200ApplicationJsonExplanation[];

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: DeletePolicyModule200ApplicationJsonMetrics;

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: DeletePolicyModule200ApplicationJsonProvenance;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: any[];
}


export class DeletePolicyModuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePolicyModulePathParams;

  @SpeakeasyMetadata()
  queryParams: DeletePolicyModuleQueryParams;
}


export class DeletePolicyModuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundred?: shared.FourHundred;

  @SpeakeasyMetadata()
  fourHundredAndFour?: shared.FourHundredAndFour;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deletePolicyModule200ApplicationJsonObject?: DeletePolicyModule200ApplicationJson;
}
