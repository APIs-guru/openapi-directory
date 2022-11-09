import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCompileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=explain" })
  explain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=instrument" })
  instrument?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=metrics" })
  metrics?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty?: boolean;
}


export class PostCompileRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCompileQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostCompile200ApplicationJsonExplanationLocalsKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class PostCompile200ApplicationJsonExplanationLocalsValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class PostCompile200ApplicationJsonExplanationLocals extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: PostCompile200ApplicationJsonExplanationLocalsKey;

  @Metadata({ data: "json, name=value" })
  value?: PostCompile200ApplicationJsonExplanationLocalsValue;
}


export class PostCompile200ApplicationJsonExplanationNodeTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


// PostCompile200ApplicationJsonExplanationNode
/** 
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
export class PostCompile200ApplicationJsonExplanationNode extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=terms", elemType: operations.PostCompile200ApplicationJsonExplanationNodeTerms })
  terms?: PostCompile200ApplicationJsonExplanationNodeTerms[];
}

export enum PostCompile200ApplicationJsonExplanationOpEnum {
    Enter = "enter"
,    Exit = "exit"
,    Eval = "eval"
,    Fail = "fail"
,    Redo = "redo"
}

export enum PostCompile200ApplicationJsonExplanationTypeEnum {
    Expr = "expr"
,    Rule = "rule"
,    Body = "body"
}


export class PostCompile200ApplicationJsonExplanation extends SpeakeasyBase {
  @Metadata({ data: "json, name=locals", elemType: operations.PostCompile200ApplicationJsonExplanationLocals })
  locals?: PostCompile200ApplicationJsonExplanationLocals[];

  @Metadata({ data: "json, name=node" })
  node?: PostCompile200ApplicationJsonExplanationNode;

  @Metadata({ data: "json, name=op" })
  op?: PostCompile200ApplicationJsonExplanationOpEnum;

  @Metadata({ data: "json, name=parent_id" })
  parentId?: number;

  @Metadata({ data: "json, name=query_id" })
  queryId?: number;

  @Metadata({ data: "json, name=type" })
  type?: PostCompile200ApplicationJsonExplanationTypeEnum;
}


export class PostCompile200ApplicationJsonMetrics extends SpeakeasyBase {
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


export class PostCompile200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=explanation", elemType: operations.PostCompile200ApplicationJsonExplanation })
  explanation?: PostCompile200ApplicationJsonExplanation[];

  @Metadata({ data: "json, name=metrics" })
  metrics?: PostCompile200ApplicationJsonMetrics;

  @Metadata({ data: "json, name=result" })
  result?: any[];
}


export class PostCompileResponse extends SpeakeasyBase {
  @Metadata()
  fourHundred?: shared.FourHundred;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postCompile200ApplicationJsonObject?: PostCompile200ApplicationJson;
}
