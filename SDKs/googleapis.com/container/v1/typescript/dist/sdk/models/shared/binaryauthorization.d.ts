import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BinaryAuthorizationEvaluationModeEnum {
    EvaluationModeUnspecified = "EVALUATION_MODE_UNSPECIFIED",
    Disabled = "DISABLED",
    ProjectSingletonPolicyEnforce = "PROJECT_SINGLETON_POLICY_ENFORCE"
}
/**
 * Configuration for Binary Authorization.
**/
export declare class BinaryAuthorization extends SpeakeasyBase {
    enabled?: boolean;
    evaluationMode?: BinaryAuthorizationEvaluationModeEnum;
}
