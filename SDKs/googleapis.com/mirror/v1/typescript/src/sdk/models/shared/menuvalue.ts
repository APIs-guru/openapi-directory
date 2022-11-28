import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MenuValue
/** 
 * A single value that is part of a MenuItem.
**/
export class MenuValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
