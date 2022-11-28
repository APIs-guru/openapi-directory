import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCompileQueryParams extends SpeakeasyBase {
    explain?: string;
    instrument?: boolean;
    metrics?: boolean;
    pretty?: boolean;
}
export declare class PostCompile200ApplicationJsonExplanationLocalsKey extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class PostCompile200ApplicationJsonExplanationLocalsValue extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class PostCompile200ApplicationJsonExplanationLocals extends SpeakeasyBase {
    key?: PostCompile200ApplicationJsonExplanationLocalsKey;
    value?: PostCompile200ApplicationJsonExplanationLocalsValue;
}
export declare class PostCompile200ApplicationJsonExplanationNodeTerms extends SpeakeasyBase {
    type?: string;
    value?: string;
}
/**
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
export declare class PostCompile200ApplicationJsonExplanationNode extends SpeakeasyBase {
    index?: number;
    terms?: PostCompile200ApplicationJsonExplanationNodeTerms[];
}
export declare enum PostCompile200ApplicationJsonExplanationOpEnum {
    Enter = "enter",
    Exit = "exit",
    Eval = "eval",
    Fail = "fail",
    Redo = "redo"
}
export declare enum PostCompile200ApplicationJsonExplanationTypeEnum {
    Expr = "expr",
    Rule = "rule",
    Body = "body"
}
export declare class PostCompile200ApplicationJsonExplanation extends SpeakeasyBase {
    locals?: PostCompile200ApplicationJsonExplanationLocals[];
    node?: PostCompile200ApplicationJsonExplanationNode;
    op?: PostCompile200ApplicationJsonExplanationOpEnum;
    parentId?: number;
    queryId?: number;
    type?: PostCompile200ApplicationJsonExplanationTypeEnum;
}
export declare class PostCompile200ApplicationJsonMetrics extends SpeakeasyBase {
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
export declare class PostCompile200ApplicationJson extends SpeakeasyBase {
    explanation?: PostCompile200ApplicationJsonExplanation[];
    metrics?: PostCompile200ApplicationJsonMetrics;
    result?: any[];
}
export declare class PostCompileRequest extends SpeakeasyBase {
    queryParams: PostCompileQueryParams;
    request?: Map<string, any>;
}
export declare class PostCompileResponse extends SpeakeasyBase {
    fourHundred?: shared.FourHundred;
    contentType: string;
    statusCode: number;
    postCompile200ApplicationJsonObject?: PostCompile200ApplicationJson;
}
