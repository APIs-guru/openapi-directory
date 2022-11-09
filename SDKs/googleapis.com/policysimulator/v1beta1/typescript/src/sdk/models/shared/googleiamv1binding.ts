import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeExpr } from "./googletypeexpr";


// GoogleIamV1Binding
/** 
 * Associates `members`, or principals, with a `role`.
**/
export class GoogleIamV1Binding extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: GoogleTypeExpr;

  @Metadata({ data: "json, name=members" })
  members?: string[];

  @Metadata({ data: "json, name=role" })
  role?: string;
}
