import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=accessSelector" })
  accessSelector?: AccessSelector;

  @Metadata({ data: "json, name=conditionContext" })
  conditionContext?: ConditionContext;

  @Metadata({ data: "json, name=identitySelector" })
  identitySelector?: IdentitySelector;

  @Metadata({ data: "json, name=options" })
  options?: Options;

  @Metadata({ data: "json, name=resourceSelector" })
  resourceSelector?: ResourceSelector;

  @Metadata({ data: "json, name=scope" })
  scope?: string;
}
