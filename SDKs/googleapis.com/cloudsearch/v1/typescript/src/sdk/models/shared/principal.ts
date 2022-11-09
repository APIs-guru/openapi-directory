import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GSuitePrincipal } from "./gsuiteprincipal";


// Principal
/** 
 * Reference to a user, group, or domain.
**/
export class Principal extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupResourceName" })
  groupResourceName?: string;

  @Metadata({ data: "json, name=gsuitePrincipal" })
  gsuitePrincipal?: GSuitePrincipal;

  @Metadata({ data: "json, name=userResourceName" })
  userResourceName?: string;
}
