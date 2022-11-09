import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Actor
/** 
 * An object containing information about the effective user and authenticated principal responsible for an action.
**/
export class Actor extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=googleSupport" })
  googleSupport?: boolean;
}
