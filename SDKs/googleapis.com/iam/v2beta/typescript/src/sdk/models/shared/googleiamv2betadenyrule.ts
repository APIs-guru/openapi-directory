import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeExpr } from "./googletypeexpr";


// GoogleIamV2betaDenyRule
/** 
 * A deny rule in an IAM deny policy.
**/
export class GoogleIamV2betaDenyRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=denialCondition" })
  denialCondition?: GoogleTypeExpr;

  @Metadata({ data: "json, name=deniedPermissions" })
  deniedPermissions?: string[];

  @Metadata({ data: "json, name=deniedPrincipals" })
  deniedPrincipals?: string[];

  @Metadata({ data: "json, name=exceptionPermissions" })
  exceptionPermissions?: string[];

  @Metadata({ data: "json, name=exceptionPrincipals" })
  exceptionPrincipals?: string[];
}
