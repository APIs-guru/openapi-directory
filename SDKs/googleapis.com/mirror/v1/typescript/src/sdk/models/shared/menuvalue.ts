import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MenuValue
/** 
 * A single value that is part of a MenuItem.
**/
export class MenuValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;
}
