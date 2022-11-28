import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDocumentWithWebHookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class GetDocumentWithWebHookQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty?: boolean;
}


export class GetDocumentWithWebHook200ApplicationJsonExplanationLocalsKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class GetDocumentWithWebHook200ApplicationJsonExplanationLocalsValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class GetDocumentWithWebHook200ApplicationJsonExplanationLocals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: GetDocumentWithWebHook200ApplicationJsonExplanationLocalsKey;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: GetDocumentWithWebHook200ApplicationJsonExplanationLocalsValue;
}


export class GetDocumentWithWebHook200ApplicationJsonExplanationNodeTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetDocumentWithWebHook200ApplicationJsonExplanationNode
/** 
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
export class GetDocumentWithWebHook200ApplicationJsonExplanationNode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=terms", elemType: GetDocumentWithWebHook200ApplicationJsonExplanationNodeTerms })
  terms?: GetDocumentWithWebHook200ApplicationJsonExplanationNodeTerms[];
}

export enum GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum {
    Enter = "enter",
    Exit = "exit",
    Eval = "eval",
    Fail = "fail",
    Redo = "redo"
}

export enum GetDocumentWithWebHook200ApplicationJsonExplanationTypeEnum {
    Expr = "expr",
    Rule = "rule",
    Body = "body"
}


export class GetDocumentWithWebHook200ApplicationJsonExplanation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locals", elemType: GetDocumentWithWebHook200ApplicationJsonExplanationLocals })
  locals?: GetDocumentWithWebHook200ApplicationJsonExplanationLocals[];

  @SpeakeasyMetadata({ data: "json, name=node" })
  node?: GetDocumentWithWebHook200ApplicationJsonExplanationNode;

  @SpeakeasyMetadata({ data: "json, name=op" })
  op?: GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=query_id" })
  queryId?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetDocumentWithWebHook200ApplicationJsonExplanationTypeEnum;
}


export class GetDocumentWithWebHook200ApplicationJsonMetrics extends SpeakeasyBase {
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


export class GetDocumentWithWebHook200ApplicationJsonProvenance extends SpeakeasyBase {
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


export class GetDocumentWithWebHook200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explanation", elemType: GetDocumentWithWebHook200ApplicationJsonExplanation })
  explanation?: GetDocumentWithWebHook200ApplicationJsonExplanation[];

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: GetDocumentWithWebHook200ApplicationJsonMetrics;

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GetDocumentWithWebHook200ApplicationJsonProvenance;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: any[];
}


export class GetDocumentWithWebHookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDocumentWithWebHookPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDocumentWithWebHookQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" })
  request: Uint8Array;
}


export class GetDocumentWithWebHookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundred?: shared.FourHundred;

  @SpeakeasyMetadata()
  fourHundredAndFour?: shared.FourHundredAndFour;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDocumentWithWebHook200ApplicationJsonObject?: GetDocumentWithWebHook200ApplicationJson;
}
