import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessSelector } from "./accessselector";
import { IdentitySelector } from "./identityselector";
import { ResourceSelector } from "./resourceselector";



// IamPolicyAnalysisQuery
/** 
 * IAM policy analysis query message.
**/
export class IamPolicyAnalysisQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessSelector" })
  accessSelector?: AccessSelector;

  @SpeakeasyMetadata({ data: "json, name=identitySelector" })
  identitySelector?: IdentitySelector;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceSelector" })
  resourceSelector?: ResourceSelector;
}
