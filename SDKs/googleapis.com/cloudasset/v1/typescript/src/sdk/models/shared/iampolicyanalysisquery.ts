import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessSelector } from "./accessselector";
import { ConditionContext } from "./conditioncontext";
import { IdentitySelector } from "./identityselector";
import { Options } from "./options";
import { ResourceSelector } from "./resourceselector";



// IamPolicyAnalysisQuery
/** 
 * IAM policy analysis query message.
**/
export class IamPolicyAnalysisQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessSelector" })
  accessSelector?: AccessSelector;

  @SpeakeasyMetadata({ data: "json, name=conditionContext" })
  conditionContext?: ConditionContext;

  @SpeakeasyMetadata({ data: "json, name=identitySelector" })
  identitySelector?: IdentitySelector;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: Options;

  @SpeakeasyMetadata({ data: "json, name=resourceSelector" })
  resourceSelector?: ResourceSelector;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string;
}
