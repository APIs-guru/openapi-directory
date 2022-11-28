import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BinaryAuthorizationEvaluationModeEnum {
    EvaluationModeUnspecified = "EVALUATION_MODE_UNSPECIFIED",
    Disabled = "DISABLED",
    ProjectSingletonPolicyEnforce = "PROJECT_SINGLETON_POLICY_ENFORCE"
}


// BinaryAuthorization
/** 
 * Configuration for Binary Authorization.
**/
export class BinaryAuthorization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=evaluationMode" })
  evaluationMode?: BinaryAuthorizationEvaluationModeEnum;
}
