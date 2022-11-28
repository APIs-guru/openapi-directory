import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDocumentWithPathPathParams extends SpeakeasyBase {
    path: string;
}
export declare class GetDocumentWithPathQueryParams extends SpeakeasyBase {
    explain?: string;
    instrument?: boolean;
    metrics?: boolean;
    pretty?: boolean;
    provenance?: boolean;
}
export declare class GetDocumentWithPath200ApplicationJsonExplanationLocalsKey extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class GetDocumentWithPath200ApplicationJsonExplanationLocalsValue extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class GetDocumentWithPath200ApplicationJsonExplanationLocals extends SpeakeasyBase {
    key?: GetDocumentWithPath200ApplicationJsonExplanationLocalsKey;
    value?: GetDocumentWithPath200ApplicationJsonExplanationLocalsValue;
}
export declare class GetDocumentWithPath200ApplicationJsonExplanationNodeTerms extends SpeakeasyBase {
    type?: string;
    value?: string;
}
/**
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
export declare class GetDocumentWithPath200ApplicationJsonExplanationNode extends SpeakeasyBase {
    index?: number;
    terms?: GetDocumentWithPath200ApplicationJsonExplanationNodeTerms[];
}
export declare enum GetDocumentWithPath200ApplicationJsonExplanationOpEnum {
    Enter = "enter",
    Exit = "exit",
    Eval = "eval",
    Fail = "fail",
    Redo = "redo"
}
export declare enum GetDocumentWithPath200ApplicationJsonExplanationTypeEnum {
    Expr = "expr",
    Rule = "rule",
    Body = "body"
}
export declare class GetDocumentWithPath200ApplicationJsonExplanation extends SpeakeasyBase {
    locals?: GetDocumentWithPath200ApplicationJsonExplanationLocals[];
    node?: GetDocumentWithPath200ApplicationJsonExplanationNode;
    op?: GetDocumentWithPath200ApplicationJsonExplanationOpEnum;
    parentId?: number;
    queryId?: number;
    type?: GetDocumentWithPath200ApplicationJsonExplanationTypeEnum;
}
export declare class GetDocumentWithPath200ApplicationJsonMetrics extends SpeakeasyBase {
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
export declare class GetDocumentWithPath200ApplicationJsonProvenance extends SpeakeasyBase {
    buildCommit?: string;
    buildHostname?: string;
    buildTimestamp?: string;
    bundles?: Map<string, any>;
    version?: string;
}
export declare class GetDocumentWithPath200ApplicationJson extends SpeakeasyBase {
    explanation?: GetDocumentWithPath200ApplicationJsonExplanation[];
    metrics?: GetDocumentWithPath200ApplicationJsonMetrics;
    provenance?: GetDocumentWithPath200ApplicationJsonProvenance;
    result?: any[];
}
export declare class GetDocumentWithPathRequest extends SpeakeasyBase {
    pathParams: GetDocumentWithPathPathParams;
    queryParams: GetDocumentWithPathQueryParams;
    request: Uint8Array;
}
export declare class GetDocumentWithPathResponse extends SpeakeasyBase {
    fourHundred?: shared.FourHundred;
    contentType: string;
    statusCode: number;
    getDocumentWithPath200ApplicationJsonObject?: GetDocumentWithPath200ApplicationJson;
}
