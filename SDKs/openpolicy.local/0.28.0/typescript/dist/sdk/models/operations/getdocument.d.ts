import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDocumentPathParams extends SpeakeasyBase {
    path: string;
}
export declare class GetDocumentQueryParams extends SpeakeasyBase {
    explain?: string;
    input?: Map<string, any>;
    instrument?: boolean;
    metrics?: boolean;
    pretty?: boolean;
    provenance?: boolean;
}
export declare class GetDocument200ApplicationJsonExplanationLocalsKey extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class GetDocument200ApplicationJsonExplanationLocalsValue extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class GetDocument200ApplicationJsonExplanationLocals extends SpeakeasyBase {
    key?: GetDocument200ApplicationJsonExplanationLocalsKey;
    value?: GetDocument200ApplicationJsonExplanationLocalsValue;
}
export declare class GetDocument200ApplicationJsonExplanationNodeTerms extends SpeakeasyBase {
    type?: string;
    value?: string;
}
/**
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
export declare class GetDocument200ApplicationJsonExplanationNode extends SpeakeasyBase {
    index?: number;
    terms?: GetDocument200ApplicationJsonExplanationNodeTerms[];
}
export declare enum GetDocument200ApplicationJsonExplanationOpEnum {
    Enter = "enter",
    Exit = "exit",
    Eval = "eval",
    Fail = "fail",
    Redo = "redo"
}
export declare enum GetDocument200ApplicationJsonExplanationTypeEnum {
    Expr = "expr",
    Rule = "rule",
    Body = "body"
}
export declare class GetDocument200ApplicationJsonExplanation extends SpeakeasyBase {
    locals?: GetDocument200ApplicationJsonExplanationLocals[];
    node?: GetDocument200ApplicationJsonExplanationNode;
    op?: GetDocument200ApplicationJsonExplanationOpEnum;
    parentId?: number;
    queryId?: number;
    type?: GetDocument200ApplicationJsonExplanationTypeEnum;
}
export declare class GetDocument200ApplicationJsonMetrics extends SpeakeasyBase {
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
export declare class GetDocument200ApplicationJsonProvenance extends SpeakeasyBase {
    buildCommit?: string;
    buildHostname?: string;
    buildTimestamp?: string;
    bundles?: Map<string, any>;
    version?: string;
}
export declare class GetDocument200ApplicationJson extends SpeakeasyBase {
    explanation?: GetDocument200ApplicationJsonExplanation[];
    metrics?: GetDocument200ApplicationJsonMetrics;
    provenance?: GetDocument200ApplicationJsonProvenance;
    result?: any[];
}
export declare class GetDocumentRequest extends SpeakeasyBase {
    pathParams: GetDocumentPathParams;
    queryParams: GetDocumentQueryParams;
}
export declare class GetDocumentResponse extends SpeakeasyBase {
    fourHundred?: shared.FourHundred;
    contentType: string;
    statusCode: number;
    getDocument200ApplicationJsonObject?: GetDocument200ApplicationJson;
}
