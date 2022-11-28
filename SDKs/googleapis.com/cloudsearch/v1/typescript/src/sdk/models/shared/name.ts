import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Name
/** 
 * A person's name.
**/
export class Name extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
