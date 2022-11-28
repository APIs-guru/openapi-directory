import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePolicyModulePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeletePolicyModuleQueryParams extends SpeakeasyBase {
    pretty?: boolean;
}
export declare class DeletePolicyModule200ApplicationJsonExplanationLocalsKey extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class DeletePolicyModule200ApplicationJsonExplanationLocalsValue extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class DeletePolicyModule200ApplicationJsonExplanationLocals extends SpeakeasyBase {
    key?: DeletePolicyModule200ApplicationJsonExplanationLocalsKey;
    value?: DeletePolicyModule200ApplicationJsonExplanationLocalsValue;
}
export declare class DeletePolicyModule200ApplicationJsonExplanationNodeTerms extends SpeakeasyBase {
    type?: string;
    value?: string;
}
/**
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
export declare class DeletePolicyModule200ApplicationJsonExplanationNode extends SpeakeasyBase {
    index?: number;
    terms?: DeletePolicyModule200ApplicationJsonExplanationNodeTerms[];
}
export declare enum DeletePolicyModule200ApplicationJsonExplanationOpEnum {
    Enter = "enter",
    Exit = "exit",
    Eval = "eval",
    Fail = "fail",
    Redo = "redo"
}
export declare enum DeletePolicyModule200ApplicationJsonExplanationTypeEnum {
    Expr = "expr",
    Rule = "rule",
    Body = "body"
}
export declare class DeletePolicyModule200ApplicationJsonExplanation extends SpeakeasyBase {
    locals?: DeletePolicyModule200ApplicationJsonExplanationLocals[];
    node?: DeletePolicyModule200ApplicationJsonExplanationNode;
    op?: DeletePolicyModule200ApplicationJsonExplanationOpEnum;
    parentId?: number;
    queryId?: number;
    type?: DeletePolicyModule200ApplicationJsonExplanationTypeEnum;
}
export declare class DeletePolicyModule200ApplicationJsonMetrics extends SpeakeasyBase {
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
export declare class DeletePolicyModule200ApplicationJsonProvenance extends SpeakeasyBase {
    buildCommit?: string;
    buildHostname?: string;
    buildTimestamp?: string;
    bundles?: Map<string, any>;
    version?: string;
}
export declare class DeletePolicyModule200ApplicationJson extends SpeakeasyBase {
    explanation?: DeletePolicyModule200ApplicationJsonExplanation[];
    metrics?: DeletePolicyModule200ApplicationJsonMetrics;
    provenance?: DeletePolicyModule200ApplicationJsonProvenance;
    result?: any[];
}
export declare class DeletePolicyModuleRequest extends SpeakeasyBase {
    pathParams: DeletePolicyModulePathParams;
    queryParams: DeletePolicyModuleQueryParams;
}
export declare class DeletePolicyModuleResponse extends SpeakeasyBase {
    fourHundred?: shared.FourHundred;
    fourHundredAndFour?: shared.FourHundredAndFour;
    contentType: string;
    statusCode: number;
    deletePolicyModule200ApplicationJsonObject?: DeletePolicyModule200ApplicationJson;
}
