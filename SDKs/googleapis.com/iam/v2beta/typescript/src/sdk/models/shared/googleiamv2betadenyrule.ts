import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeExpr } from "./googletypeexpr";



// GoogleIamV2betaDenyRule
/** 
 * A deny rule in an IAM deny policy.
**/
export class GoogleIamV2betaDenyRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=denialCondition" })
  denialCondition?: GoogleTypeExpr;

  @SpeakeasyMetadata({ data: "json, name=deniedPermissions" })
  deniedPermissions?: string[];

  @SpeakeasyMetadata({ data: "json, name=deniedPrincipals" })
  deniedPrincipals?: string[];

  @SpeakeasyMetadata({ data: "json, name=exceptionPermissions" })
  exceptionPermissions?: string[];

  @SpeakeasyMetadata({ data: "json, name=exceptionPrincipals" })
  exceptionPrincipals?: string[];
}
