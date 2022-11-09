import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeletePolicyModulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeletePolicyModuleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty?: boolean;
}


export class DeletePolicyModuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePolicyModulePathParams;

  @Metadata()
  queryParams: DeletePolicyModuleQueryParams;
}


export class DeletePolicyModule200ApplicationJsonExplanationLocalsKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class DeletePolicyModule200ApplicationJsonExplanationLocalsValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class DeletePolicyModule200ApplicationJsonExplanationLocals extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: DeletePolicyModule200ApplicationJsonExplanationLocalsKey;

  @Metadata({ data: "json, name=value" })
  value?: DeletePolicyModule200ApplicationJsonExplanationLocalsValue;
}


export class DeletePolicyModule200ApplicationJsonExplanationNodeTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


// DeletePolicyModule200ApplicationJsonExplanationNode
/** 
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
export class DeletePolicyModule200ApplicationJsonExplanationNode extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=terms", elemType: operations.DeletePolicyModule200ApplicationJsonExplanationNodeTerms })
  terms?: DeletePolicyModule200ApplicationJsonExplanationNodeTerms[];
}

export enum DeletePolicyModule200ApplicationJsonExplanationOpEnum {
    Enter = "enter"
,    Exit = "exit"
,    Eval = "eval"
,    Fail = "fail"
,    Redo = "redo"
}

export enum DeletePolicyModule200ApplicationJsonExplanationTypeEnum {
    Expr = "expr"
,    Rule = "rule"
,    Body = "body"
}


export class DeletePolicyModule200ApplicationJsonExplanation extends SpeakeasyBase {
  @Metadata({ data: "json, name=locals", elemType: operations.DeletePolicyModule200ApplicationJsonExplanationLocals })
  locals?: DeletePolicyModule200ApplicationJsonExplanationLocals[];

  @Metadata({ data: "json, name=node" })
  node?: DeletePolicyModule200ApplicationJsonExplanationNode;

  @Metadata({ data: "json, name=op" })
  op?: DeletePolicyModule200ApplicationJsonExplanationOpEnum;

  @Metadata({ data: "json, name=parent_id" })
  parentId?: number;

  @Metadata({ data: "json, name=query_id" })
  queryId?: number;

  @Metadata({ data: "json, name=type" })
  type?: DeletePolicyModule200ApplicationJsonExplanationTypeEnum;
}


export class DeletePolicyModule200ApplicationJsonMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=counter_server_query_cache_hit" })
  counterServerQueryCacheHit?: number;

  @Metadata({ data: "json, name=timer_query_compile_stage_build_comprehension_index_ns" })
  timerQueryCompileStageBuildComprehensionIndexNs?: number;

  @Metadata({ data: "json, name=timer_query_compile_stage_check_safety_ns" })
  timerQueryCompileStageCheckSafetyNs?: number;

  @Metadata({ data: "json, name=timer_query_compile_stage_check_types_ns" })
  timerQueryCompileStageCheckTypesNs?: number;

  @Metadata({ data: "json, name=timer_query_compile_stage_check_undefined_funcs_ns" })
  timerQueryCompileStageCheckUndefinedFuncsNs?: number;

  @Metadata({ data: "json, name=timer_query_compile_stage_check_unsafe_builtins_ns" })
  timerQueryCompileStageCheckUnsafeBuiltinsNs?: number;

  @Metadata({ data: "json, name=timer_query_compile_stage_resolve_refs_ns" })
  timerQueryCompileStageResolveRefsNs?: number;

  @Metadata({ data: "json, name=timer_query_compile_stage_rewrite_comprehension_terms_ns" })
  timerQueryCompileStageRewriteComprehensionTermsNs?: number;

  @Metadata({ data: "json, name=timer_query_compile_stage_rewrite_dynamic_terms_ns" })
  timerQueryCompileStageRewriteDynamicTermsNs?: number;

  @Metadata({ data: "json, name=timer_query_compile_stage_rewrite_expr_terms_ns" })
  timerQueryCompileStageRewriteExprTermsNs?: number;

  @Metadata({ data: "json, name=timer_query_compile_stage_rewrite_local_vars_ns" })
  timerQueryCompileStageRewriteLocalVarsNs?: number;

  @Metadata({ data: "json, name=timer_query_compile_stage_rewrite_to_capture_value_ns" })
  timerQueryCompileStageRewriteToCaptureValueNs?: number;

  @Metadata({ data: "json, name=timer_query_compile_stage_rewrite_with_values_ns" })
  timerQueryCompileStageRewriteWithValuesNs?: number;

  @Metadata({ data: "json, name=timer_rego_input_parse_ns" })
  timerRegoInputParseNs?: number;

  @Metadata({ data: "json, name=timer_rego_module_compile_ns" })
  timerRegoModuleCompileNs?: number;

  @Metadata({ data: "json, name=timer_rego_module_parse_ns" })
  timerRegoModuleParseNs?: number;

  @Metadata({ data: "json, name=timer_rego_query_compile_ns" })
  timerRegoQueryCompileNs?: number;

  @Metadata({ data: "json, name=timer_rego_query_eval_ns" })
  timerRegoQueryEvalNs?: number;

  @Metadata({ data: "json, name=timer_rego_query_parse_ns" })
  timerRegoQueryParseNs?: number;

  @Metadata({ data: "json, name=timer_server_handler_ns" })
  timerServerHandlerNs?: number;

  @Metadata({ data: "json, name=timer_server_read_bytes_ns" })
  timerServerReadBytesNs?: number;
}


export class DeletePolicyModule200ApplicationJsonProvenance extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_commit" })
  buildCommit?: string;

  @Metadata({ data: "json, name=build_hostname" })
  buildHostname?: string;

  @Metadata({ data: "json, name=build_timestamp" })
  buildTimestamp?: string;

  @Metadata({ data: "json, name=bundles" })
  bundles?: Map<string, any>;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


export class DeletePolicyModule200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=explanation", elemType: operations.DeletePolicyModule200ApplicationJsonExplanation })
  explanation?: DeletePolicyModule200ApplicationJsonExplanation[];

  @Metadata({ data: "json, name=metrics" })
  metrics?: DeletePolicyModule200ApplicationJsonMetrics;

  @Metadata({ data: "json, name=provenance" })
  provenance?: DeletePolicyModule200ApplicationJsonProvenance;

  @Metadata({ data: "json, name=result" })
  result?: any[];
}


export class DeletePolicyModuleResponse extends SpeakeasyBase {
  @Metadata()
  fourHundred?: shared.FourHundred;

  @Metadata()
  fourHundredAndFour?: shared.FourHundredAndFour;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deletePolicyModule200ApplicationJsonObject?: DeletePolicyModule200ApplicationJson;
}
