import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDocumentWithWebHookPathParams extends SpeakeasyBase {
    path: string;
}
export declare class GetDocumentWithWebHookQueryParams extends SpeakeasyBase {
    pretty?: boolean;
}
export declare class GetDocumentWithWebHook200ApplicationJsonExplanationLocalsKey extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class GetDocumentWithWebHook200ApplicationJsonExplanationLocalsValue extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class GetDocumentWithWebHook200ApplicationJsonExplanationLocals extends SpeakeasyBase {
    key?: GetDocumentWithWebHook200ApplicationJsonExplanationLocalsKey;
    value?: GetDocumentWithWebHook200ApplicationJsonExplanationLocalsValue;
}
export declare class GetDocumentWithWebHook200ApplicationJsonExplanationNodeTerms extends SpeakeasyBase {
    type?: string;
    value?: string;
}
/**
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
export declare class GetDocumentWithWebHook200ApplicationJsonExplanationNode extends SpeakeasyBase {
    index?: number;
    terms?: GetDocumentWithWebHook200ApplicationJsonExplanationNodeTerms[];
}
export declare enum GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum {
    Enter = "enter",
    Exit = "exit",
    Eval = "eval",
    Fail = "fail",
    Redo = "redo"
}
export declare enum GetDocumentWithWebHook200ApplicationJsonExplanationTypeEnum {
    Expr = "expr",
    Rule = "rule",
    Body = "body"
}
export declare class GetDocumentWithWebHook200ApplicationJsonExplanation extends SpeakeasyBase {
    locals?: GetDocumentWithWebHook200ApplicationJsonExplanationLocals[];
    node?: GetDocumentWithWebHook200ApplicationJsonExplanationNode;
    op?: GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum;
    parentId?: number;
    queryId?: number;
    type?: GetDocumentWithWebHook200ApplicationJsonExplanationTypeEnum;
}
export declare class GetDocumentWithWebHook200ApplicationJsonMetrics extends SpeakeasyBase {
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
export declare class GetDocumentWithWebHook200ApplicationJsonProvenance extends SpeakeasyBase {
    buildCommit?: string;
    buildHostname?: string;
    buildTimestamp?: string;
    bundles?: Map<string, any>;
    version?: string;
}
export declare class GetDocumentWithWebHook200ApplicationJson extends SpeakeasyBase {
    explanation?: GetDocumentWithWebHook200ApplicationJsonExplanation[];
    metrics?: GetDocumentWithWebHook200ApplicationJsonMetrics;
    provenance?: GetDocumentWithWebHook200ApplicationJsonProvenance;
    result?: any[];
}
export declare class GetDocumentWithWebHookRequest extends SpeakeasyBase {
    pathParams: GetDocumentWithWebHookPathParams;
    queryParams: GetDocumentWithWebHookQueryParams;
    request: Uint8Array;
}
export declare class GetDocumentWithWebHookResponse extends SpeakeasyBase {
    fourHundred?: shared.FourHundred;
    fourHundredAndFour?: shared.FourHundredAndFour;
    contentType: string;
    statusCode: number;
    getDocumentWithWebHook200ApplicationJsonObject?: GetDocumentWithWebHook200ApplicationJson;
}
