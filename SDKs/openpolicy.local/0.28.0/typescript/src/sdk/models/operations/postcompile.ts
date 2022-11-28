import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCompileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=explain" })
  explain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=instrument" })
  instrument?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metrics" })
  metrics?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty?: boolean;
}


export class PostCompile200ApplicationJsonExplanationLocalsKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class PostCompile200ApplicationJsonExplanationLocalsValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class PostCompile200ApplicationJsonExplanationLocals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: PostCompile200ApplicationJsonExplanationLocalsKey;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: PostCompile200ApplicationJsonExplanationLocalsValue;
}


export class PostCompile200ApplicationJsonExplanationNodeTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// PostCompile200ApplicationJsonExplanationNode
/** 
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
export class PostCompile200ApplicationJsonExplanationNode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=terms", elemType: PostCompile200ApplicationJsonExplanationNodeTerms })
  terms?: PostCompile200ApplicationJsonExplanationNodeTerms[];
}

export enum PostCompile200ApplicationJsonExplanationOpEnum {
    Enter = "enter",
    Exit = "exit",
    Eval = "eval",
    Fail = "fail",
    Redo = "redo"
}

export enum PostCompile200ApplicationJsonExplanationTypeEnum {
    Expr = "expr",
    Rule = "rule",
    Body = "body"
}


export class PostCompile200ApplicationJsonExplanation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locals", elemType: PostCompile200ApplicationJsonExplanationLocals })
  locals?: PostCompile200ApplicationJsonExplanationLocals[];

  @SpeakeasyMetadata({ data: "json, name=node" })
  node?: PostCompile200ApplicationJsonExplanationNode;

  @SpeakeasyMetadata({ data: "json, name=op" })
  op?: PostCompile200ApplicationJsonExplanationOpEnum;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=query_id" })
  queryId?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostCompile200ApplicationJsonExplanationTypeEnum;
}


export class PostCompile200ApplicationJsonMetrics extends SpeakeasyBase {
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


export class PostCompile200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explanation", elemType: PostCompile200ApplicationJsonExplanation })
  explanation?: PostCompile200ApplicationJsonExplanation[];

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: PostCompile200ApplicationJsonMetrics;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: any[];
}


export class PostCompileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostCompileQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostCompileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundred?: shared.FourHundred;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postCompile200ApplicationJsonObject?: PostCompile200ApplicationJson;
}
