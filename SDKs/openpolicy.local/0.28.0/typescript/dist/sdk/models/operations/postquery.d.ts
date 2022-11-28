import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostQueryQueryParams extends SpeakeasyBase {
    explain?: string;
    metrics?: boolean;
    pretty?: boolean;
}
export declare class PostQuery200ApplicationJsonExplanationLocalsKey extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class PostQuery200ApplicationJsonExplanationLocalsValue extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class PostQuery200ApplicationJsonExplanationLocals extends SpeakeasyBase {
    key?: PostQuery200ApplicationJsonExplanationLocalsKey;
    value?: PostQuery200ApplicationJsonExplanationLocalsValue;
}
export declare class PostQuery200ApplicationJsonExplanationNodeTerms extends SpeakeasyBase {
    type?: string;
    value?: string;
}
/**
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
export declare class PostQuery200ApplicationJsonExplanationNode extends SpeakeasyBase {
    index?: number;
    terms?: PostQuery200ApplicationJsonExplanationNodeTerms[];
}
export declare enum PostQuery200ApplicationJsonExplanationOpEnum {
    Enter = "enter",
    Exit = "exit",
    Eval = "eval",
    Fail = "fail",
    Redo = "redo"
}
export declare enum PostQuery200ApplicationJsonExplanationTypeEnum {
    Expr = "expr",
    Rule = "rule",
    Body = "body"
}
export declare class PostQuery200ApplicationJsonExplanation extends SpeakeasyBase {
    locals?: PostQuery200ApplicationJsonExplanationLocals[];
    node?: PostQuery200ApplicationJsonExplanationNode;
    op?: PostQuery200ApplicationJsonExplanationOpEnum;
    parentId?: number;
    queryId?: number;
    type?: PostQuery200ApplicationJsonExplanationTypeEnum;
}
export declare class PostQuery200ApplicationJsonMetrics extends SpeakeasyBase {
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
export declare class PostQuery200ApplicationJson extends SpeakeasyBase {
    explanation?: PostQuery200ApplicationJsonExplanation[];
    metrics?: PostQuery200ApplicationJsonMetrics;
    result?: any[];
}
export declare class PostQueryRequest extends SpeakeasyBase {
    queryParams: PostQueryQueryParams;
    request: Uint8Array;
}
export declare class PostQueryResponse extends SpeakeasyBase {
    fourHundred?: shared.FourHundred;
    contentType: string;
    statusCode: number;
    postQuery200ApplicationJsonObject?: PostQuery200ApplicationJson;
}
