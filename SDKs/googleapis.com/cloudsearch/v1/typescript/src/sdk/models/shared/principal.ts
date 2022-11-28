import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GSuitePrincipal } from "./gsuiteprincipal";



// Principal
/** 
 * Reference to a user, group, or domain.
**/
export class Principal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupResourceName" })
  groupResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=gsuitePrincipal" })
  gsuitePrincipal?: GSuitePrincipal;

  @SpeakeasyMetadata({ data: "json, name=userResourceName" })
  userResourceName?: string;
}
