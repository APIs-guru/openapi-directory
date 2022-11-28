import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class GetDocumentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=explain" })
  explain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=input" })
  input?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=instrument" })
  instrument?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metrics" })
  metrics?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provenance" })
  provenance?: boolean;
}


export class GetDocument200ApplicationJsonExplanationLocalsKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class GetDocument200ApplicationJsonExplanationLocalsValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class GetDocument200ApplicationJsonExplanationLocals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: GetDocument200ApplicationJsonExplanationLocalsKey;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: GetDocument200ApplicationJsonExplanationLocalsValue;
}


export class GetDocument200ApplicationJsonExplanationNodeTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetDocument200ApplicationJsonExplanationNode
/** 
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
export class GetDocument200ApplicationJsonExplanationNode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=terms", elemType: GetDocument200ApplicationJsonExplanationNodeTerms })
  terms?: GetDocument200ApplicationJsonExplanationNodeTerms[];
}

export enum GetDocument200ApplicationJsonExplanationOpEnum {
    Enter = "enter",
    Exit = "exit",
    Eval = "eval",
    Fail = "fail",
    Redo = "redo"
}

export enum GetDocument200ApplicationJsonExplanationTypeEnum {
    Expr = "expr",
    Rule = "rule",
    Body = "body"
}


export class GetDocument200ApplicationJsonExplanation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locals", elemType: GetDocument200ApplicationJsonExplanationLocals })
  locals?: GetDocument200ApplicationJsonExplanationLocals[];

  @SpeakeasyMetadata({ data: "json, name=node" })
  node?: GetDocument200ApplicationJsonExplanationNode;

  @SpeakeasyMetadata({ data: "json, name=op" })
  op?: GetDocument200ApplicationJsonExplanationOpEnum;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=query_id" })
  queryId?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetDocument200ApplicationJsonExplanationTypeEnum;
}


export class GetDocument200ApplicationJsonMetrics extends SpeakeasyBase {
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


export class GetDocument200ApplicationJsonProvenance extends SpeakeasyBase {
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


export class GetDocument200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explanation", elemType: GetDocument200ApplicationJsonExplanation })
  explanation?: GetDocument200ApplicationJsonExplanation[];

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: GetDocument200ApplicationJsonMetrics;

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GetDocument200ApplicationJsonProvenance;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: any[];
}


export class GetDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDocumentPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDocumentQueryParams;
}


export class GetDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundred?: shared.FourHundred;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDocument200ApplicationJsonObject?: GetDocument200ApplicationJson;
}
