import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeExpr } from "./googletypeexpr";



// GoogleIamV1Binding
/** 
 * Associates `members` with a `role`.
**/
export class GoogleIamV1Binding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: GoogleTypeExpr;

  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: string[];

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}
