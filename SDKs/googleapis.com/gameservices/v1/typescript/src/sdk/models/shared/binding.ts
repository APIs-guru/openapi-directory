import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Expr } from "./expr";


// Binding
/** 
 * Associates `members`, or principals, with a `role`.
**/
export class Binding extends SpeakeasyBase {
  @Metadata({ data: "json, name=bindingId" })
  bindingId?: string;

  @Metadata({ data: "json, name=condition" })
  condition?: Expr;

  @Metadata({ data: "json, name=members" })
  members?: string[];

  @Metadata({ data: "json, name=role" })
  role?: string;
}
