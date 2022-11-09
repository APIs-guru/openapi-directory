import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessSelector } from "./accessselector";
import { IdentitySelector } from "./identityselector";
import { ResourceSelector } from "./resourceselector";


// IamPolicyAnalysisQuery
/** 
 * IAM policy analysis query message.
**/
export class IamPolicyAnalysisQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessSelector" })
  accessSelector?: AccessSelector;

  @Metadata({ data: "json, name=identitySelector" })
  identitySelector?: IdentitySelector;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=resourceSelector" })
  resourceSelector?: ResourceSelector;
}
