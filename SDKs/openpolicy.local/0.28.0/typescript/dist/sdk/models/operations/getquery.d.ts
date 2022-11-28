import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQueryQueryParams extends SpeakeasyBase {
    explain?: string;
    metrics?: boolean;
    pretty?: boolean;
    q: string;
}
export declare class GetQuery200ApplicationJsonExplanationLocalsKey extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class GetQuery200ApplicationJsonExplanationLocalsValue extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class GetQuery200ApplicationJsonExplanationLocals extends SpeakeasyBase {
    key?: GetQuery200ApplicationJsonExplanationLocalsKey;
    value?: GetQuery200ApplicationJsonExplanationLocalsValue;
}
export declare class GetQuery200ApplicationJsonExplanationNodeTerms extends SpeakeasyBase {
    type?: string;
    value?: string;
}
/**
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
export declare class GetQuery200ApplicationJsonExplanationNode extends SpeakeasyBase {
    index?: number;
    terms?: GetQuery200ApplicationJsonExplanationNodeTerms[];
}
export declare enum GetQuery200ApplicationJsonExplanationOpEnum {
    Enter = "enter",
    Exit = "exit",
    Eval = "eval",
    Fail = "fail",
    Redo = "redo"
}
export declare enum GetQuery200ApplicationJsonExplanationTypeEnum {
    Expr = "expr",
    Rule = "rule",
    Body = "body"
}
export declare class GetQuery200ApplicationJsonExplanation extends SpeakeasyBase {
    locals?: GetQuery200ApplicationJsonExplanationLocals[];
    node?: GetQuery200ApplicationJsonExplanationNode;
    op?: GetQuery200ApplicationJsonExplanationOpEnum;
    parentId?: number;
    queryId?: number;
    type?: GetQuery200ApplicationJsonExplanationTypeEnum;
}
export declare class GetQuery200ApplicationJsonMetrics extends SpeakeasyBase {
    counterServerQueryCacheHit?: number;
    timerQueryCompileStageBuildComprehensionIndexNs?: number;
    timerQueryCompileStageCheckSafetyNs?: number;
    timerQueryCompileStageCheckTypesNs?: number;
    timerQueryCompileStageCheckUndefinedFuncsNs?: number;
    timerQueryCompileStageCheckUnsafeBuiltinsNs?: number;
    timerQueryCompileStageResolveRefsNs?: number;
    timerQueryCompileStageRewriteComprehensionTermsNs?: number;
    timerQueryCompileStageRewriteDynamicTermsNs?: number;
    timerQueryCompileStageRewriteExprTermsNs?: number;
    timerQueryCompileStageRewriteLocalVarsNs?: number;
    timerQueryCompileStageRewriteToCaptureValueNs?: number;
    timerQueryCompileStageRewriteWithValuesNs?: number;
    timerRegoInputParseNs?: number;
    timerRegoModuleCompileNs?: number;
    timerRegoModuleParseNs?: number;
    timerRegoQueryCompileNs?: number;
    timerRegoQueryEvalNs?: number;
    timerRegoQueryParseNs?: number;
    timerServerHandlerNs?: number;
    timerServerReadBytesNs?: number;
}
export declare class GetQuery200ApplicationJson extends SpeakeasyBase {
    explanation?: GetQuery200ApplicationJsonExplanation[];
    metrics?: GetQuery200ApplicationJsonMetrics;
    result?: any[];
}
export declare class GetQueryRequest extends SpeakeasyBase {
    queryParams: GetQueryQueryParams;
}
export declare class GetQueryResponse extends SpeakeasyBase {
    fourHundred?: shared.FourHundred;
    contentType: string;
    statusCode: number;
    getQuery200ApplicationJsonObject?: GetQuery200ApplicationJson;
}
