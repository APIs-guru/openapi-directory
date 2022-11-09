import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDocumentWithPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class GetDocumentWithPathQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=explain" })
  explain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=instrument" })
  instrument?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=metrics" })
  metrics?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=provenance" })
  provenance?: boolean;
}


export class GetDocumentWithPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDocumentWithPathPathParams;

  @Metadata()
  queryParams: GetDocumentWithPathQueryParams;

  @Metadata({ data: "request, media_type=application/x-yaml" })
  request: Uint8Array;
}


export class GetDocumentWithPath200ApplicationJsonExplanationLocalsKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class GetDocumentWithPath200ApplicationJsonExplanationLocalsValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class GetDocumentWithPath200ApplicationJsonExplanationLocals extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: GetDocumentWithPath200ApplicationJsonExplanationLocalsKey;

  @Metadata({ data: "json, name=value" })
  value?: GetDocumentWithPath200ApplicationJsonExplanationLocalsValue;
}


export class GetDocumentWithPath200ApplicationJsonExplanationNodeTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


// GetDocumentWithPath200ApplicationJsonExplanationNode
/** 
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
export class GetDocumentWithPath200ApplicationJsonExplanationNode extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=terms", elemType: operations.GetDocumentWithPath200ApplicationJsonExplanationNodeTerms })
  terms?: GetDocumentWithPath200ApplicationJsonExplanationNodeTerms[];
}

export enum GetDocumentWithPath200ApplicationJsonExplanationOpEnum {
    Enter = "enter"
,    Exit = "exit"
,    Eval = "eval"
,    Fail = "fail"
,    Redo = "redo"
}

export enum GetDocumentWithPath200ApplicationJsonExplanationTypeEnum {
    Expr = "expr"
,    Rule = "rule"
,    Body = "body"
}


export class GetDocumentWithPath200ApplicationJsonExplanation extends SpeakeasyBase {
  @Metadata({ data: "json, name=locals", elemType: operations.GetDocumentWithPath200ApplicationJsonExplanationLocals })
  locals?: GetDocumentWithPath200ApplicationJsonExplanationLocals[];

  @Metadata({ data: "json, name=node" })
  node?: GetDocumentWithPath200ApplicationJsonExplanationNode;

  @Metadata({ data: "json, name=op" })
  op?: GetDocumentWithPath200ApplicationJsonExplanationOpEnum;

  @Metadata({ data: "json, name=parent_id" })
  parentId?: number;

  @Metadata({ data: "json, name=query_id" })
  queryId?: number;

  @Metadata({ data: "json, name=type" })
  type?: GetDocumentWithPath200ApplicationJsonExplanationTypeEnum;
}


export class GetDocumentWithPath200ApplicationJsonMetrics extends SpeakeasyBase {
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


export class GetDocumentWithPath200ApplicationJsonProvenance extends SpeakeasyBase {
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


export class GetDocumentWithPath200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=explanation", elemType: operations.GetDocumentWithPath200ApplicationJsonExplanation })
  explanation?: GetDocumentWithPath200ApplicationJsonExplanation[];

  @Metadata({ data: "json, name=metrics" })
  metrics?: GetDocumentWithPath200ApplicationJsonMetrics;

  @Metadata({ data: "json, name=provenance" })
  provenance?: GetDocumentWithPath200ApplicationJsonProvenance;

  @Metadata({ data: "json, name=result" })
  result?: any[];
}


export class GetDocumentWithPathResponse extends SpeakeasyBase {
  @Metadata()
  fourHundred?: shared.FourHundred;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDocumentWithPath200ApplicationJsonObject?: GetDocumentWithPath200ApplicationJson;
}
