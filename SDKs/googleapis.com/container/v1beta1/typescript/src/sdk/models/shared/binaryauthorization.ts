import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BinaryAuthorizationEvaluationModeEnum {
    EvaluationModeUnspecified = "EVALUATION_MODE_UNSPECIFIED"
,    Disabled = "DISABLED"
,    ProjectSingletonPolicyEnforce = "PROJECT_SINGLETON_POLICY_ENFORCE"
}


// BinaryAuthorization
/** 
 * Configuration for Binary Authorization.
**/
export class BinaryAuthorization extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=evaluationMode" })
  evaluationMode?: BinaryAuthorizationEvaluationModeEnum;
}
